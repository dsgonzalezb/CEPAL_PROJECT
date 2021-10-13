from os import error
from typing import List
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
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(eval(data))
    except:
        try:
            dframe = pd.DataFrame(eval(dataDumps))
        except:
            return 
    dframe['CODIGO'] = dframe['CODIGO'].astype('string')
    dfilter = dframe.loc[dframe['SUB_DIVI_POL'].str.contains(value) | dframe['CODIGO'].str.contains(str(value))]
    
    return dfilter.to_json(orient="records")
  
@eel.expose
def find_descriptive(value):
    data = decrypt('data/descriptiva')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(eval(data))
    except:
        try:
            dframe = pd.DataFrame(eval(dataDumps))
        except:
            return 
    dfilter = dframe.loc[(dframe['ID_TERRITORIO'] == int(value)) & (dframe['ANIO'] < 2020)]
    dfilter = dfilter.sort_values(by=['ANIO'])
    #print(dfilter['PGIRS_APROVADO'])
    
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
    #print((datetime.datetime.now().year - 4))
    last4Years = dfilter.loc[(dfilter['ANIO'] > datetime.datetime.now().year - 4) & (dfilter['ANIO'] < datetime.datetime.now().year + 1) ]
    listValue = last4Years['VALOR_AGREGADO'].to_list()
    last4Years['AVG'] = 0
    try:
        last4Years['AVG'] = sum(listValue) / len(listValue)
    except:
        last4Years['AVG'] = 0
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
    
    #Ingesos
    moneyDatsets =[
        {
            'data': dfilter['INGRESOS'].to_list(),
            'label': 'INGRESOS',
            'borderColor': "#8e5ea2",
            'fill': False
        },
    ]
    
    #ECA
    ecaDatasets =[
        {
            'data': dfilter['CAPACIDAD_ECA'].to_list(),
            'label': 'CAPACIDAD ECA',
            'borderColor': "#8e5ea2",
            'fill': False
        },
    ]
    
    #PGRIS
    pLabels= ['SI', 'NO']
    listPG = []
    total = int(dfilter['PGIRS_APROVADO'].count())
    listPG.append(int(dfilter[dfilter['PGIRS_APROVADO'] == 'SI'].count().iloc[0]))
    listPG.append(int(dfilter[dfilter['PGIRS_APROVADO'] == 'NO'].count().iloc[0]))
    #print([dfilter[dfilter['PGIRS_APROVADO'] == 'SI'].count().iloc[0], dfilter[dfilter['PGIRS_APROVADO'] == 'NO'].count().iloc[0]])
    
    #Residuos
    
    resDatasets =[
        {
            'data': dfilter['CARACTERIZACION_DE_RESIDUO'].to_list(),
            'label': 'CARACTERIZACION DE RESIDUO',
            'borderColor': "#8e5ea2",
            'fill': False
        },
    ]
    
    #Configuracion output 
    dfilter.rename(columns={'ANIO': 'AÑO', 'DENSITY': 'DENSIDAD POBLACIONAL'}, inplace=True)
    economy = None
    try:
        economy = dfilter['SISTEMA_CIUDADES'].iloc[0]
    except:
        economy = None
    returnData = {
        'labels': years,
        'vLabesl': last4Years['ANIO'].to_list(),
        'pLabels': pLabels,
        'datasets' :datasets,
        'dDatasets': densityDatsets,
        'bDatasets': bussinessDatsets,
        'vDatasets': vDatasets,
        'iDatasets': moneyDatsets,
        'eDatasets': ecaDatasets,
        'pgDatasets' : listPG,
        'resDatasets': resDatasets,
        'economy': economy,
        'datatableS': json.loads(dfilter.to_json(orient="records")),
    }
    #print(returnData)
    return json.dumps(returnData)


@eel.expose
def save_population(dataA):
    data = decrypt('data/descriptiva')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(eval(data))
    except:
        try:
            dframe = pd.DataFrame(eval(dataDumps))
        except:
            return 
    dfilter = dframe.loc[dframe['ID_DESCRIPTIVA'] == dataA['id']].index
    #print(dfilter)
    dframe.at[dfilter,"ANIO"] = int(dataA['anio'])
    dframe.at[dfilter,"POBLACION_TOTAL"] =  int(dataA['pTotal'])
    dframe.at[dfilter,"POBLACION_CABECERA"] =  int(dataA['pCabecera'])
    dframe.at[dfilter,"POBLACION_RESTO"] =  int(dataA['pResto'])
    dframe.at[dfilter,"EMPRESAS"] = int(dataA['empresas'])
    dframe.at[dfilter,"AREA"] =  int(dataA['area'])
    dframe.at[dfilter,"COD_DANE"] =  int(dataA['cod_dane'])
    dframe.at[dfilter,"INGRESOS"] =  int(dataA['ingresos'])
    dframe.at[dfilter,"CAPACIDAD_ECA"] = int(dataA['capacidad_eca'])
    dframe.at[dfilter,"VALOR_AGREGADO"] =  int(dataA['valor_agregado'])
    dframe.at[dfilter,"TONELADAS DISPUESTAS"] =  int(dataA['ton_dis'])
    dframe.at[dfilter,"PGIRS_APROVADO"] =  dataA['pgris_ap']
    dframe.at[dfilter,"CARACTERIZACION_DE_RESIDUO"] =  int(dataA['car_residuo'])
    data = dframe.to_json(orient="records")
    encrypt(json.dumps(data), 'data/descriptiva')
    return 'true'


@eel.expose
def getSPDAQuestions(page, section):
    data = decrypt('data/pregunta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(eval(data))
    except:
        try:
            dframe = pd.DataFrame(eval(dataDumps))
        except:
            return
    dfilter = dframe.loc[(dframe['PAGINA'] == int(page)) & (dframe['SECCION'] == int(section))]
    dfilter = dfilter.sort_values(by=['ID_PREGUNTA'])
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)

@eel.expose
def getSPDAAnswers(question):
    data = decrypt('data/respuesta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(eval(data))
    except:
        try:
            dframe = pd.DataFrame(eval(dataDumps))
        except:
            return
    dfilter = dframe.loc[dframe['ID_PREGUNTA'] == int(question)]
    dfilter = dfilter.sort_values(by=['COLUMNA'])
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)

@eel.expose
def getTables(question):
    data = decrypt('data/tabla')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(eval(data))
    except:
        try:
            dframe = pd.DataFrame(eval(dataDumps))
        except:
            return
    dfilter = dframe.loc[dframe['ID_PREGUNTA'] == int(question)]
    dfilter = dfilter.sort_values(by=['ORDEN'])
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)
    
    
eel.init('gui') # or the name of your directory
eel.start('index.html', size=(1366, 768), cmdline_args=['--start-fullscreen'])