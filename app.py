import pandas as pd
import eel
import json

@eel.expose
def find_territory(value):
    f = open('data/territorio.json', encoding="utf8")
    data = json.load(f)
    dframe = pd.DataFrame(data)
    dframe['CODIGO'] = dframe['CODIGO'].astype('string')
    dfilter = dframe.loc[dframe['SUB_DIVI_POL'].str.contains(value) | dframe['CODIGO'].str.contains(str(value))]
    
    return dfilter.to_json(orient="records")
  
@eel.expose
def find_descriptive(value):
    f = open('data/descriptiva.json', encoding="utf8")
    data = json.load(f)
    dframe = pd.DataFrame(data)
    dfilter = dframe.loc[dframe['ID_TERRITORIO'] == value]
    dfilter = dfilter.sort_values(by=['ANIO'])
    
    years = dfilter['ANIO'].to_list()
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
    dfilter['DENSITY'] = dfilter['POBLACION_TOTAL'] / dfilter['AREA']
    densityDatsets =[
        {
            'data': dfilter['DENSITY'].to_list(),
            'label': 'DENSIDAD POBLACIONAL',
            'borderColor': "#3e95cd",
            'fill': False
        },
    ]
    dfilter1 = dfilter.drop(['ID_DESCRIPTIVA', 'DENSITY', 'ID_TERRITORIO', 'EMPRESAS', 'VALOR_AGREGADO', 'INGRESOS', 'SISTEMA_CIUDADES', 'AREA'], axis=1)
    dfilter2 = dfilter.drop(['ID_DESCRIPTIVA', 'ID_TERRITORIO', 'EMPRESAS', 'VALOR_AGREGADO', 'INGRESOS', 'SISTEMA_CIUDADES', 'POBLACION_CABECERA', 'POBLACION_RESTO'], axis=1)
    dfilter1.rename(columns={'ANIO': 'AÑO'}, inplace=True)
    dfilter2.rename(columns={'ANIO': 'AÑO', 'DENSITY': 'DENSIDAD POBLACIONAL'}, inplace=True)
    returnData = {
        'labels': years,
        'datasets' :datasets,
        'dDatasets': densityDatsets,
        'datatableS': json.loads(dfilter1.to_json(orient="records")),
        'datatableD': json.loads(dfilter2.to_json(orient="records"))
    }
    #print(dfilter)
    return json.dumps(returnData)


@eel.expose
def hello_world():
    return "Hello from python"

@eel.expose
def print_string(string):
    if len(string) > 20:
        print(string)
        return "Success!"
    else:
        return "Please type more than 20 characters."
    
eel.init('gui') # or the name of your directory
eel.start('index.html', size=(1366, 768), cmdline_args=['--start-fullscreen'])