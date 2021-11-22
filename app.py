from os import error
import sys
from os.path import exists
from typing import List
import pandas as pd
import eel
import tkinter as tk
import re
from tkinter import filedialog
import json
import datetime
from cryptography.fernet import Fernet
from pandas.core import frame

# ANCHOR Zona encrypt

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


# ANCHOR find_territory

@eel.expose
def find_territory(value):
    data = decrypt('data/territorio')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
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

# ANCHOR find_descriptive
@eel.expose
def find_descriptive(value):
    data = decrypt('data/descriptiva')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
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

# ANCHOR get_answered_questions validation
@eel.expose
def get_answered_questions(year, territory):
    section_list = []
    data = decrypt('data/pregunta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    data2 = decrypt('data/subseccion')
    dataDumps2 = json.dumps(data2)
    dframe2 = None
    try:
        dframe2 = pd.DataFrame(data2)
    except:
        try:
            dframe2 = pd.DataFrame(eval(data2))
        except:
            try:
                dframe2 = pd.DataFrame(eval(dataDumps2))
            except:
                return
    file_exists = exists('data/respuesta_usuario')
    data3 = decrypt('data/respuesta_usuario')
    dataDumps3 = None
    dframe3=None
    if file_exists:
        data3 = decrypt('data/respuesta_usuario')
        dataDumps3 = json.dumps(data3)
        try:
            dframe3 = pd.DataFrame(data3)
        except:
            try:
                dframe3 = pd.DataFrame(eval(data3))
            except:
                try:
                    dframe3 = pd.DataFrame(eval(dataDumps3))
                except:
                    return False
    else:
        return False
    for i in dframe2.index:
        dfilter = dframe.loc[(dframe['SECCION'] == dframe2['SECCION'][i]) & (dframe['PAGINA'] == dframe2['PAGINA'][i])]
        #print(dfilter.index)
        if not dfilter.empty:
            dfilter2 = dframe3.loc[(dframe3['id_pregunta'] == dfilter['ID_PREGUNTA'][dfilter.index[0]]) & (dframe3['anio_actual'] == year) & (dframe3['id_territorio'] == territory)]
            #print(dfilter2)
            #print(section_list)
            if not dfilter2.empty:
                section_list.append(True)
            else:
                section_list.append(False)
    if False in section_list:
        return False
    else:
        return True
    
# ANCHOR get_consolidated_answers validation
@eel.expose
def get_consolidated_answers(year , territory):
    section_list = []
    data = decrypt('data/pregunta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    file_exists = exists('data/respuesta_usuario')
    data3 = decrypt('data/respuesta_usuario')
    dataDumps3 = None
    dframe3=None
    if file_exists:
        data3 = decrypt('data/respuesta_usuario')
        dataDumps3 = json.dumps(data3)
        try:
            dframe3 = pd.DataFrame(data3)
        except:
            try:
                dframe3 = pd.DataFrame(eval(data3))
            except:
                try:
                    dframe3 = pd.DataFrame(eval(dataDumps3))
                except:
                    return False
    else:
        return False
    dfilter = dframe.loc[dframe['SECCION'] == 6]
    #print(dfilter.index)
    if not dfilter.empty:
        dfilter2 = dframe3.loc[(dframe3['id_pregunta'] == dfilter['ID_PREGUNTA'][dfilter.index[0]]) & (dframe3['anio_actual'] == year) & (dframe3['id_territorio'] == territory)]
        #print(dfilter2)
        #print(section_list)
        if not dfilter2.empty:
            section_list.append(True)
        else:
            section_list.append(False)
    if False in section_list:
        return False
    else:
        return True
         
# ANCHOR save_population
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


# ANCHOR Reference
def getReferenceData(file, field, anio, territory):
    #print('data/'+file)
    data = decrypt('data/'+file)
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    if(file == 'descriptiva'):
        #print(dframe)
        dfilter = dframe.loc[(dframe['ANIO'] == int(anio)) & (dframe['ID_TERRITORIO'] == int(territory))]
        value = 0
        for i in dfilter.index:
            value = dfilter[field][i]
           #print(dfilter[field])
        #print(value)
        return value
    else: 
        return 0

@eel.expose
def getReferences(anio, territory):
    data = decrypt('data/referencia')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dat = []
    for i in dframe.index:
        dat.append(getReferenceData(dframe['ARCHIVO'][i], dframe['COLUMNA'][i], anio, territory))
    dframe['DATA'] = dat
    #print(dframe)
    result = json.loads(dframe.to_json(orient="records"))
    return json.dumps(result)

@eel.expose
def getReferencesQuestion(question, anio, territory):
    #print(anio)
    data = decrypt('data/referencia')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['ID_PREGUNTA'] == int(question)]
    dat = []
    for i in dfilter.index:
        dat.append(getReferenceData(dfilter['ARCHIVO'][i], dfilter['COLUMNA'][i], anio, territory))
    dfilter['DATA'] = dat
    #print(dfilter)
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)



# ANCHOR Subsections by section
@eel.expose
def getSubsections(section):
    data = decrypt('data/subseccion')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['SECCION'] == int(section)]
    dfilter = dfilter.sort_values(by=['PAGINA'])
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)

# ANCHOR Subsections all
@eel.expose
def getSubsectionsAll():
    data = decrypt('data/subseccion')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    result = json.loads(dframe.to_json(orient="records"))
    return json.dumps(result)

# ANCHOR getQuestion sin parametros // TODOS
@eel.expose
def getQuestion():
    data = decrypt('data/pregunta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    result = json.loads(dframe.to_json(orient="records"))
    return json.dumps(result)

# ANCHOR getAnswerUser año y territorio // TODOS
@eel.expose
def getAnswerUserD(year, territorio):
    file_exists = exists('data/respuesta_usuario')
    if file_exists:
        data = decrypt('data/respuesta_usuario')
        dataDumps = json.dumps(data)
        dframe = None
        try:
            dframe = pd.DataFrame(data)
        except:
            try:
                dframe = pd.DataFrame(eval(data))
            except:
                try:
                    dframe = pd.DataFrame(eval(dataDumps))
                except:
                    return
        dfilter = dframe.loc[(dframe['anio_actual'] == year) & (dframe['id_territorio'] == territorio)]
        #print(dfilter)
        result = json.loads(dfilter.to_json(orient="records"))
        return json.dumps(result)
    else:
        return None

# ANCHOR getQuestion por seccion y pagina
@eel.expose
def getSPDAQuestions(page, section):
    data = decrypt('data/pregunta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[(dframe['PAGINA'] == int(page)) & (dframe['SECCION'] == int(section))]
    dfilter = dfilter.sort_values(by=['ORDEN'])
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)

# ANCHOR getQuestion por seccion
@eel.expose
def getSPDAQuestionsC(section):
    data = decrypt('data/pregunta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['SECCION'] == int(section)]
    dfilter = dfilter.sort_values(by=['ORDEN'])
    result = json.loads(dfilter.to_json(orient="records"))
    return json.dumps(result)

# ANCHOR getAnswers por pregunta
@eel.expose
def getSPDAAnswers(question):
    data = decrypt('data/respuesta')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
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

# ANCHOR getTables por pregunta
@eel.expose
def getTables(question):
    data = decrypt('data/tabla')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
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

# ANCHOR saveAnswers
@eel.expose
def saveAnswers(answers):
    fernet = Fernet(key)
    file_exists = exists('data/respuesta_usuario')
    if file_exists:
        data = decrypt('data/respuesta_usuario')
        dataDumps = json.dumps(data)
        ans = json.loads(answers)
        
        answerDumps = json.dumps(ans)
        dframe = None
        aframe = None
        #print(answerDumps)
        try:
            dframe = pd.DataFrame(data)
        except:
            try:
                dframe = pd.DataFrame(eval(data))
            except:
                try:
                    dframe = pd.DataFrame(eval(dataDumps))
                except:
                    return
        try:
            aframe = pd.DataFrame(ans)
        except:
            try:
                aframe = pd.DataFrame(eval(answerDumps))
            except  Exception as e: 
                print('Error - '+ str(e))
                print('Error on line {}'.format(sys.exc_info()[-1].tb_lineno))
                return
        #print(dframe)
        #dframe.set_index(['id_pregunta', 'anio_actual'], inplace=True, drop=False)
        #aframe.set_index(['id_pregunta', 'anio_actual'], inplace=True, drop=False)
        #combined_dataframe = dframe.set_index(['id_pregunta', 'anio_actual']).combine_first(aframe.set_index(['id_pregunta', 'anio_actual'])).reset_index()
        #combined_dataframe = dframe.merge(aframe,on=['id_pregunta', 'anio_actual'],how='outer', indicator=True)
        combined_dataframe = (pd.concat([dframe, aframe])
                            .drop_duplicates(subset=['id_pregunta', 'anio_actual', 'id_territorio'] , keep='last')
                            .sort_values('id_pregunta' , ascending=False)
                            .reset_index(drop=True))
        #dframe.reset_index()
        jsonans = json.loads(combined_dataframe.to_json(orient="records"))
        
        answersUp = json.dumps(jsonans)
        encrypted = fernet.encrypt(answersUp.encode('utf8'))
        # opening the file in write mode and 
        # writing the encrypted data
        with open('data/respuesta_usuario', 'wb') as encrypted_file:
            encrypted_file.write(encrypted) 

    else:
        encrypted = fernet.encrypt(answers.encode('utf8'))
        # opening the file in write mode and 
        # writing the encrypted data
        with open('data/respuesta_usuario', 'wb') as encrypted_file:
            encrypted_file.write(encrypted) 

# ANCHOR getUserAnswers por pregunta año y territorio 
@eel.expose
def getUserAnswers(question, year, territorio):
    #print(question)
    #print(year)
    file_exists = exists('data/respuesta_usuario')
    if file_exists:
        #print('Here')
        data = decrypt('data/respuesta_usuario')
        dataDumps = json.dumps(data)
        dframe = None
        try:
            dframe = pd.DataFrame(data)
        except:
            try:
                dframe = pd.DataFrame(eval(data))
            except:
                try:
                    dframe = pd.DataFrame(eval(dataDumps))
                except:
                    return
        #print(dframe)
        dfilter = dframe.loc[(dframe['id_pregunta'] == question) & (dframe['anio_actual'] == year) & (dframe['id_territorio'] == territorio)]
        #print(dfilter)
        result = json.loads(dfilter.to_json(orient="records"))
        return json.dumps(result)
    else:
        return None

# ANCHOR getCategory
@eel.expose
def getCategory(id_territory):
    data = decrypt('data/descriptiva')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[(dframe['ID_TERRITORIO'] == int(id_territory)) & (dframe['ANIO'] < 2020)]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getFormula por pregunta
@eel.expose
def getFormula(id_question):
    data = decrypt('data/formula')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['CPD'] == '&'+str(id_question)]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getFormula por id_cal
@eel.expose
def getFormulaByIdCal(id):
    data = decrypt('data/formula')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['id_cal'] == int(id)]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getValidationFormula
@eel.expose
def getValidationFormula():
    data = decrypt('data/formula')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['tipo'] == "VALIDACION"]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getFormulaByAlias para formulas compuestas
@eel.expose
def getFormulaByAlias():
    data = decrypt('data/formula')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['alias'] != "NA"]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getVariables
@eel.expose
def getVariables():
    data = decrypt('data/variables')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    return json.dumps(json.loads(dframe.to_json(orient="records")))

# ANCHOR getPoints por pregunta
@eel.expose
def getPoints(id_question):
    data = decrypt('data/puntos')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['ID_PREGUNTA'] == int(id_question)]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getPoints all
@eel.expose
def getPointsAll():
    data = decrypt('data/puntos')
    dataDumps = json.dumps(data)
    dframe = None
    #print(dataDumps)
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    #print(dframe)
    return json.dumps(json.loads(dframe.to_json(orient="records")))

# ANCHOR getIndexBoard por pestaña
@eel.expose
def getIndexBoard(pestana):
    data = decrypt('data/indice_tableros')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['ID_PESTAÑA'] == int(pestana)]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getSubIndexBoard por IndexBoard
@eel.expose
def getSubIndexBoard(index):
    data = decrypt('data/tableros_seccion')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['ID_INDICE'] == int(index)]
    dfilter = dfilter.sort_values(by=['ORDEN'])
    return json.dumps(json.loads(dfilter.to_json(orient="records")))


# ANCHOR getTotalBoards por ID_SECCION
@eel.expose
def getTotalBoards(section):
    data = decrypt('data/tablero')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['ID_SECCION'] == int(section)]
    dfilter = dfilter.sort_values(by=['ORDEN'])
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getFigure por ID_TABLERO
@eel.expose
def getFigure(board):
    data = decrypt('data/cifra')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    dfilter = dframe.loc[dframe['ID_TABLERO'] == int(board)]
    return json.dumps(json.loads(dfilter.to_json(orient="records")))

# ANCHOR getFolder
@eel.expose
def getFolder(wildcard=[("archivos JSON", "*.json")]):
    root = tk.Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    folder = filedialog.askopenfilename(filetypes=wildcard)
    return folder

# ANCHOR save_file; actualizacion de jsons
@eel.expose
def save_file(file, name):
    fernet = Fernet(key)
    if name == 'descriptiva':
        f = open(file, encoding="utf8")
        data = json.load(f)
        str = json.dumps(data)
        val = re.sub(r'"(\d+),(\d+)"', r'\1.\2', str)
        val = val.replace("", 0)
        encrypted = fernet.encrypt(val.encode('utf8'))
        # opening the file in write mode and 
        # writing the encrypted data
        with open('./data/'+name, 'wb') as encrypted_file:
            encrypted_file.write(encrypted)
    else:
        f = open(file, encoding="utf8")
        data = json.load(f)
        str = json.dumps(data)
        encrypted = fernet.encrypt(str.encode('utf8'))
        # opening the file in write mode and 
        # writing the encrypted data
        with open('./data/'+name, 'wb') as encrypted_file:
            encrypted_file.write(encrypted)
            
# ANCHOR getSankeyNodes all
@eel.expose
def getSankeyNodes():
    data = decrypt('data/sankey_nodos')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    result = json.loads(dframe.to_json(orient="records"))
    return json.dumps(result)

# ANCHOR getSankeyLinks all
@eel.expose
def getSankeyLinks():
    data = decrypt('data/sankey_links')
    dataDumps = json.dumps(data)
    dframe = None
    try:
        dframe = pd.DataFrame(data)
    except:
        try:
            dframe = pd.DataFrame(eval(data))
        except:
            try:
                dframe = pd.DataFrame(eval(dataDumps))
            except:
                return
    result = json.loads(dframe.to_json(orient="records"))
    return json.dumps(result)
        
    
eel.init('gui') # or the name of your directory
eel.start('index.html', size=(1366, 768), cmdline_args=['--start-fullscreen'])