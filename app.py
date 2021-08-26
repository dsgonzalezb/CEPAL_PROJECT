import pandas as pd
import eel
import json
import datetime
from cryptography.fernet import Fernet

key = 's439NtXWeX28815bJCsmRfhEeiTGvs1Xnr_zAduKUAU='

def decrypt(filename):
    # using the key
    fernet = Fernet(key)
    with open(filename, 'rb') as enc_file:
        encrypted = enc_file.read()
    decrypted = fernet.decrypt(encrypted)
    return json.loads(decrypted.decode('utf8'))

def encrypt(str, filename):
    fernet = Fernet(key)
    #f = open('territorio.json', encoding="utf8")
    #data = json.load(f)
    #str = json.dumps(data)
    # opening the original file to encrypt
    # encrypting the file
    encrypted = fernet.encrypt(str.encode('utf8'))
    # opening the file in write mode and 
    # writing the encrypted data
    with open(filename, 'wb') as encrypted_file:
        encrypted_file.write(encrypted) 

@eel.expose
def find_territory(value):
    data = decrypt('data/territorio')
    dframe = pd.DataFrame(data)
    dframe['CODIGO'] = dframe['CODIGO'].astype('string')
    dfilter = dframe.loc[dframe['SUB_DIVI_POL'].str.contains(value) | dframe['CODIGO'].str.contains(str(value))]
    
    return dfilter.to_json(orient="records")
  
@eel.expose
def find_descriptive(value):
    data = decrypt('data/descriptiva')
    dframe = pd.DataFrame(eval(data))
    dfilter = dframe.loc[dframe['ID_TERRITORIO'] == value]
    dfilter = dfilter.sort_values(by=['ANIO'])
    #Labels
    years = dfilter['ANIO'].to_list()
    #Poblacion
    datasets = [
        {
            'data': dfilter['POBLACION_TOTAL'].to_list(),
            'label': 'POBLACION TOTAL',
            'borderColor': "#3e95cd",
            'fill': False
        },
        {
            'data': dfilter['POBLACION_CABECERA'].to_list(),
            'label': 'POBLACION CABECERA',
            'borderColor': "#8e5ea2",
            'fill': False
        },
        {
            'data': dfilter['POBLACION_RESTO'].to_list(),
            'label': 'POBLACION RESTO',
            'borderColor': "#3cba9f",
            'fill': False
        },
    ]
    #Densidad Poblacion
    dfilter['DENSITY'] = dfilter['POBLACION_TOTAL'] / dfilter['AREA']
    densityDatsets =[
        {
            'data': dfilter['DENSITY'].to_list(),
            'label': 'DENSIDAD POBLACIONAL',
            'borderColor': "#3e95cd",
            'fill': False
        },
    ]
    #Densidad Empresas
    dfilter['POBLACION_EN_MIL'] = dfilter['POBLACION_TOTAL'] / 10000
    dfilter['DENSIDAD_EMPRESAS'] = dfilter['EMPRESAS'] / dfilter['POBLACION_EN_MIL']
    bussinessDatsets =[
        {
            'data': dfilter['DENSIDAD_EMPRESAS'].to_list(),
            'label': 'DENSIDAD EMPRESARIAL',
            'borderColor': "#8e5ea2",
            'fill': False
        },
    ]
    
    #Valor Agregado
    print((datetime.datetime.now().year - 4))
    last4Years = dfilter.loc[(dfilter['ANIO'] > datetime.datetime.now().year - 4) & (dfilter['ANIO'] < datetime.datetime.now().year + 1) ]
    listValue = last4Years['VALOR_AGREGADO'].to_list()
    last4Years['AVG'] = sum(listValue) / len(listValue)
    vDatasets = [
        {
            'data': last4Years['AVG'].to_list(),
            'label': 'PROMEDIO',
            'borderColor': "#3e95cd",
            'fill': False
        },
        {
            'data': last4Years['VALOR_AGREGADO'].to_list(),
            'label': 'VALOR AGREGADO',
            'borderColor': "#3cba9f",
            'fill': False
        },
    ]
    
    #Configuracion output 
    dfilter1 = dfilter.drop(['DENSITY', 'ID_TERRITORIO', 'EMPRESAS', 'VALOR_AGREGADO', 'INGRESOS', 'SISTEMA_CIUDADES', 'AREA'], axis=1)
    dfilter2 = dfilter.drop(['ID_TERRITORIO', 'EMPRESAS', 'VALOR_AGREGADO', 'INGRESOS', 'SISTEMA_CIUDADES', 'POBLACION_CABECERA', 'POBLACION_RESTO'], axis=1)
    dfilter3 = last4Years.drop(['ID_TERRITORIO', 'EMPRESAS', 'INGRESOS', 'SISTEMA_CIUDADES', 'POBLACION_CABECERA', 'POBLACION_RESTO'], axis=1)
    dfilter1.rename(columns={'ANIO': 'AÑO'}, inplace=True)
    dfilter2.rename(columns={'ANIO': 'AÑO', 'DENSITY': 'DENSIDAD POBLACIONAL'}, inplace=True)
    dfilter3.rename(columns={'ANIO': 'AÑO', 'DENSITY': 'DENSIDAD POBLACIONAL'}, inplace=True)
    returnData = {
        'labels': years,
        'vLabesl': last4Years['ANIO'].to_list(),
        'datasets' :datasets,
        'dDatasets': densityDatsets,
        'bDatasets': bussinessDatsets,
        'vDatasets': vDatasets,
        'datatableS': json.loads(dfilter1.to_json(orient="records")),
        'datatableD': json.loads(dfilter2.to_json(orient="records")),
        'datatableB': json.loads(dfilter2.to_json(orient="records")),
        'datatableVB': json.loads(dfilter3.to_json(orient="records"))
    }
    #print(dfilter)
    return json.dumps(returnData)


@eel.expose
def save_population(dataA):
    data = decrypt('data/descriptiva')
    dframe = pd.DataFrame(eval(data))
    dfilter = dframe.loc[dframe['ID_DESCRIPTIVA'] == dataA['id']].index
    #print(dfilter)
    dframe.at[dfilter,"ANIO"] = int(dataA['anio'])
    dframe.at[dfilter,"POBLACION_TOTAL"] =  int(dataA['pTotal'])
    dframe.at[dfilter,"POBLACION_CABECERA"] =  int(dataA['pCabecera'])
    dframe.at[dfilter,"POBLACION_RESTO"] =  int(dataA['pResto'])
    data = dframe.to_json(orient="records")
    encrypt(json.dumps(data), 'data/descriptiva')
    return 'true'

@eel.expose
def save_density(dataA):
    data = decrypt('data/descriptiva')
    dframe = pd.DataFrame(eval(data))
    dfilter = dframe.loc[dframe['ID_DESCRIPTIVA'] == dataA['id']].index
    #print(dfilter)
    dframe.at[dfilter,"ANIO"] = int(dataA['anio'])
    dframe.at[dfilter,"POBLACION_TOTAL"] =  int(dataA['pTotal'])
    dframe.at[dfilter,"AREA"] =  int(dataA['area'])
    data = dframe.to_json( orient="records")
    encrypt(json.dumps(data), 'data/descriptiva')
    return 'true'
    
eel.init('gui') # or the name of your directory
eel.start('index.html', size=(1366, 768), cmdline_args=['--start-fullscreen'])