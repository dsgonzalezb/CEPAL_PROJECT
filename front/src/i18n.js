const messages = {
    en: {
    },
    es: {
        header:{
            settings: 'Configuración',
            home: 'Inicio',
            start: 'Iniciar',
            sub_loc: 'Seleccione un municipio para iniciar', 
            search: 'Codigo municipio -  municipio',
            year_loc: 'Seleccione el año al agregar o modificar datos',
            select: 'Seleccionar',
            yearS: 'Selector de año'
        },
        home:{
            title: 'MC-GRM 1.0 (Medición de la Circularidad en la Gestión de Residuos en Municipios) ',
            message: '<p>Esta herramienta se estructura en el marco de la cooperaci&oacute;n CEPAL - DNP, que busca desarrollar una metodolog&iacute;a que permita a los municipios colombianos diagnosticar el grado de circularidad en la gesti&oacute;n de los residuos s&oacute;lidos urbanos y desarrollar escenarios prospectivos de manejo de residuos.</p><p>Esta es una herramienta tecnol&oacute;gica de tipo portable, lo cual permite que sea ejecutado desde una computadora personal sin necesidad de instalaci&oacute;n, esto se lograr&aacute;; tan solo con descargar el archivo "MC-GRM.zip" desde el enlace publicado por el ente encargado en <a href="http://www.dnp.gov.co/MC-GRM">www.dnp.gov.co/MC-GRM</a>. Una vez descargado el archivo, solo requiere ser descomprimido en cualquier carpeta local y abrir el archivo .exe para acceder a ella. En la misma ruta se encontrar&aacute;; el acceso a este manual de usuario y documentos anexos de inter&eacute;s, construidos a partir del proyecto que dio origen a esta herramienta.</p><h2>Objetivos de la herramienta</h2><p>Medir el rendimiento circular de la economía resulta ser una estrategia clave tanto en los diferentes sectores productivos como en los gobiernos, puesto que su abordaje permite incorporar criterios ambientales, sociales y económicos en la toma de decisiones que marcan la pauta en la implementación de estrategias que permitan la configuración de sistemas de producción y consumo resilientes y sostenibles.</p><p>Es por ello que la herramienta MC-GRM 1.0 tiene como objetivo general, medir la circularidad en la gestión de los residuos generados a escala municipal, contribuyendo así a la construcción de datos que permitan la transición de consolidados y agregados nacionales a particularidades propias de las entidades territoriales, permitiendo así una integración bottom-up de la información; en este sentido, los objetivos específicos a ser alcanzados con la implementación de la herramienta son los siguientes:</p><ul><li>Integrar diferentes fuentes de información secundaria y primaria, proveniente de actores públicos y privados, asociadas con la gestión de residuos a nivel municipal.</li><li>Aportar en el análisis de los flujos de las corrientes de residuos prioritarias que se generan a escala municipal, su grado de circularidad, así como en la identificación de actores, oportunidades y retos.</li><li>Contribuir, a través del diligenciamiento periódico de la herramienta y la proyección de datos, en la construcción y fortalecimiento de política pública y de instrumentos de planeación asociados con la gestión de residuos y del territorio.</li><li>Categorizar los municipios según sus capacidades sociales, económicas y en gestión de residuos, de tal manera que se puedan enmarcar los resultados obtenidos en la medición de la circularidad con las condiciones, barreras y oportunidades de las entidades territoriales.</li><li>Adoptar una métrica común a nivel municipal que permita medir la gestión circular de los residuos, mediante la obtención de puntos de resultados asociados con prácticas implementadas por actores públicos y privados.</li><li>Obtener indicadores técnicos, operativos, económicos, sociales y ambientales asociados con la circularidad en la gestión de los residuos a nivel municipal. </li><li>Informar y divulgar experiencias exitosas en la implementación de buenas prácticas orientadas a la circularidad en la gestión de los residuos generados, fomentando así su replicabilidad entre municipios con características similares.</li><li>Promover el aumento del grado de circularidad en la gestión de los residuos a nivel municipal, a partir del análisis periódico de los resultados obtenidos del diligenciamiento de la herramienta. </li></ul><p>Al finalizar el proceso de registro, la herramienta generar&aacute; un archivo de tipo "xlsx" con los datos reportados en el a&ntilde;o de una manera consolidada para que pueda ser reportada al ente encargado.</p><p>Para m&aacute;s informaci&oacute;n consultar a <a href="mailto:rbula@dnp.gov.co">rbula@dnp.gov.co</a></p>'
        },
        settings:{
            alert: 'En esta sección, se podrán cargar al sistema los datos desde archivos JSON, <b> recuerde cargar correctamente el formato, y al archivo correspondiente o el sistema dejara de funcionar.</b>',
            select: 'Seleccionar archivos',
            pass: 'Ingresa la contraseña suministrada',
            file: 'Selecciona el archivo nuevo',
            oldF: 'Selecciona el archivo a actualizar',
            update: 'Actualizar archivo',
            updated: 'Archivo actualizado',
            fail_pass: 'Contreseña incorrecta'

        },
        descriptive:{
            see_data: 'Ver datos',
            populationSeries: 'Serie de población',
            populationDensity: 'Densidad poblacional',
            bussinessDesnsity: 'Densidad empresarial (Empresa por cada 10.000 hab)',
            money: 'Ingresos Municipales',
            economy: 'Economías de Aglomeración (Sistema de ciudades)',
            agregateValue: 'Valor agregado municipal (Promedio últimos 4 años)',
            eca: 'Capacidad ECA (Ton/mes)',
            pgris: 'PGRIS Aprobado',
            res: 'Caracterización de residuos (en disposición final)',
            name: 'Capacidades',
            des1: 'Capacidades poblacionales',
            des2: 'Capacidades economicas y financieras',
            des3: 'Capacidades manejo residuos',
            edit: 'Editar',
            cancel: 'Cancelar',
            save: 'Guardar',
            data_save: 'Datos Guardados',
            see_data_t: 'Datos descriptiva',
            valid_data: 'Validar datos',
            source: 'Fuente oficial:',
            edito: 'Persona que edita'
        },
        spda:{
            name: 'SPDA',
            full_name: 'GESTIÓN REALIZADA POR EL SERVICIO PÚBLICO DE ASEO',
            save: 'Confirmar y validar datos',
            sp1: 'Sistema de disposición final',
            sp2: 'Flujo de agua',
            sp3: 'Flujo de biogas',
            sp4: 'Estación de clasificación y aprovechamiento',
            sp5: 'Recilección transporte de residuos',
        },
        manager:{
            name: 'Gestores',
            full_name: 'GESTIÓN REALIZADA POR EMPRESAS GESTORAS NO AFECTAS AL SERVICIO PÚBLICO DE ASEO',
            add_table: 'Añadir Registro'
        },
        rep:{
            name: 'REP',
            full_name: 'GESTIÓN REALIZADA EN LA IMPLEMENTACION DE ESQUEMAS DE RESPONSABILIDAD EXTENDIDA DEL PRODUCTOR (REP) - PLANES Y SISTEMAS POSCONSUMO',
        },
        other_profiles:{
            name: 'Dinámicas administrativas',
            full_name: 'DINAMICAS ADMINISTRATIVAS HACIA LA TRANCISION DE ESQUEMAS CIRCULARES EN LA GESTION DE RESIDUOS',
        },
        graphics:{
            cal_graphs: 'Generando tableros...',
            generate_consolidated: 'Generar Consolidados',
            name: 'Tableros',
            results: 'Tablero resultados',
            actual: 'Escenario actual',
            sankey: 'Diagrama sankey',
            proyect: 'Escenarios',
            cal_consolidates: 'Calculando Consolidados',
            points:{
                title: 'NIVEL DE CIRCULARIDAD EN LA GESTIÓN DE LOS RESIDUOS GENERADOS',
                theme: 'Tématica',
                result: 'Estación de resultado',
                point: 'Puntaje',
                mini_bar: '0,25',
                total_points: 'PUNTAJE TOTAL',
                level: 'Nivel de circularidad para el municipio',
                alto: 'Alta',
                medio: 'Media',
                bajo: 'Baja'
            },
            proyects:{
                title: 'Caracteristicas del escenario alternativo',
                year: 'Año',
                alternative: 'Desarrollo escenario alternativo'
            },
            sankeys:{
                title: 'Diagrama de Sankey'
            }
        },
        excel: {
            name: 'Generar reporte consolidado'
        }
    }
}

export default messages