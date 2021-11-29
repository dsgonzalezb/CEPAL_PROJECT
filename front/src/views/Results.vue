<template>
    <div>
        <div class="head">
            <div class="title">
                <h2><b>{{$t('graphics.points.title')}}</b></h2>
            </div>
            <div class="bar">
                <div class="ter">
                    {{$t('graphics.points.level')}} {{municipio}}
                </div>
                <div class="line-b">
                    <div class="level">
                        <div class="lv c3" v-b-modal.c3>
                            {{$t('graphics.points.bajo')}}
                        </div>
                        <div class="lv c2" v-b-modal.c2>
                            {{$t('graphics.points.medio')}}
                        </div>
                        <div class="lv c1" v-b-modal.c1>
                            {{$t('graphics.points.alto')}}
                        </div>
                    </div>
                    <progress-ebar :bar="bar_value" :showT="false" :orientation="'H'" />
                    <div class="points">
                        {{$t('graphics.points.total_points')}} {{Intl.NumberFormat().format(value)}}
                    </div>
                </div>
                
            </div>
        </div>
        <div class="load-c" v-if="!load">
             <div class="loader">
                 <div>
                    <ul>
                        <li>
                            <svg viewBox="0 0 90 120" fill="currentColor">
                            <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg viewBox="0 0 90 120" fill="currentColor">
                            <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg viewBox="0 0 90 120" fill="currentColor">
                            <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg viewBox="0 0 90 120" fill="currentColor">
                            <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg viewBox="0 0 90 120" fill="currentColor">
                            <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg viewBox="0 0 90 120" fill="currentColor">
                            <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                <span>{{$t('graphics.cal_graphs')}}</span>
             </div>
        </div>
        <div class="boards">
            <point-board v-for="(board, i) in boards" :key="i" :board="board" />
        </div>
        
        <b-modal ref="c3" id="c3" size="xl" hide-footer title="Nivel de circularidad Baja">
            <h3>Perfil tipo del municipio</h3>
            <p>
                La gestión de los residuos se basa principalmente en la actividad de disposición final de residuos a partir de la prestación del servicio público de aseo (SPDA). 
            </p>
            <h4>
                Retos:
            </h4>
            <ul>
                <li>Consecución de información periódica (mínimo anual) en cuanto a la caracterización de residuos por parte del prestador del SPDA (Disposición final) o del municipio. </li>
                <li>Consecución de información anual de la gestión de residuos proveniente de fuentes como la empresa prestadora del SPDA, la Supervicios (SPDA - SUI), IDEAM (RESPEL), ANLA (Esquemas REP), AAC (RCD, Biomasa Residual), EPSPDA (Biosólidos), dependencias o entidades municipales (bodegas de reciclaje privadas).</li> 
                <li>Implementar procesos de socialización y prácticas de reducción de residuos, reutilización y separación desde la fuente. </li>
                <li>Evaluar la viabilidad de implementar: i) alternativas de tratamiento de residuos orgánicos a pequeña escala (alianzas público privadas/comunidad/huertas urbanas) y ii) alternativas de tratamiento de residuos orgánicos in situ. </li>
                <li>Actualizar/conocer/levantar el censo de áreas cultivadas y evaluar la creación o fortalecimiento de encadenamientos productivos hacia el uso de insumos orgánicos provenientes del tratamiento de residuos, fuente complementaria (MinAgricultura). </li>
                <li>Elaborar/actualizar el PGIRS incorporando análisis de viabilidad de tratamiento y aprovechamiento de residuos</li>
                <li>Actualizar el POT (POT/PBOT/EOT ) incorporando usos del suelo compatibles con infraestructura asociada a la gestión de residuos.</li>
                <li>Promover la estructuración y puesta en marcha de proyectos públicos y/o privados orientados hacia la valorización de residuos con el fin de competir en convocatorias de recursos públicos (IAT, FCTeI, MinCiencias, entidades y organizaciones del SNCTI) o privados (fondos de inversión – banca).  </li>
            </ul>

        </b-modal>

        <b-modal ref="c2" id="c2" size="xl" hide-footer title="Nivel de circularidad Media">
            <h3>Perfil tipo del municipio</h3>
            <p>
                La gestión de los residuos se basa principalmente en: i) las actividades de disposición final y aprovechamiento de residuos a partir de la prestación del SPDA y ii) nacientes procesos en bodegas de reciclaje y tratamientos privados de residuos orgánicos, producto de la existencia de canales de comercialización en crecimiento.
            </p>
            <h4>
                Retos:
            </h4>
            <ul>
                <li>Fortalecimiento del reporte proveniente de diferentes fuentes de información. </li>
                <li>Implementación de sistemas de información asociados con la gestión de datos. </li>
                <li>Actualizar el censo de recicladores de oficio y la identificación de ECA. </li>
                <li>Fomentar la formalización de recicladores de oficio.</li>
                <li>Promoción de la operación de rutas selectivas. </li>
                <li>Implementar proyectos a partir del IAT. </li>
                <li>Identificar el potencial de actores industriales y agropecuarios en la incorporación en sus procesos productivos de materiales reciclados o regenerados. </li>
                <li>Implementar/promover/incentivar prácticas de gobierno corporativo asociadas a compras verdes/compras sostenibles/compras circulares de bienes o servicios que incorporen materiales/insumos obtenidos producto del tratamiento/aprovechamiento/valorización de residuos. </li>
                <li>Dinamizar procesos sociales/productivos basados en la reducción de pérdidas y desperdicio de alimentos, tratamiento de residuos orgánicos y recuperación/aumento de la cobertura vegetal del espacio público. </li>
                <li>Potencializar el uso de biosólidos de acuerdo con la normatividad vigente. </li>
                <li>Impulsar a través de la AAC y/o la ANLA la implementación de acciones por parte del sector productivo dirigidas a la ubicación de puntos de recolección e infraestructura asociada a esquemas REP. </li>
                <li>Generar alianzas con las Cámaras de Comercio y agremiaciones con el fin de identificar el ecosistema productivo al interior del municipio y en las entidades territoriales cercanas, asociado con la valorización de residuos  y la transformación de materiales e insumo obtenidos del tratamiento de residuos. </li>
                <li>Incentivar la ubicación al interior del municipio de gestores de residuos no afectos al servicio público de aseo. </li>
            </ul>
        </b-modal>

        <b-modal ref="c1" id="c1" size="xl" hide-footer title="Nivel de circularidad Alta">
            <h3>Perfil tipo del municipio</h3>
            <p>
                La gestión de los residuos se basa principalmente en: i) las actividades de disposición final, tratamiento y aprovechamiento de residuos a partir de la prestación del SPDA, ii) la participación activa de gestores no afectos a la prestación del servicio de aseo que dinamizan procesos de valorización de residuos (corrientes: RCD, Biomasa, Respel, otros), iii) la implementación activa de esquemas REP, iv) la vinculación activa de procesos sociales asociados a la valorización de residuos y v) la aplicación de herramientas digitales asociadas con la gestión de residuos. 
            </p>
            <h4>
                Retos:
            </h4>
            <ul>
                <li>Armonización de datos proveniente de diferentes fuentes de información con la implementación de sistemas de información orientados a la métrica del flujo de materiales, residuos y su incorporación al aparato productivo y obras públicas (intensidad en el uso de materiales, agua y energía, GEI emitidos y dejados de emitir). </li>
                <li>Implementar practicas asociadas con la valorización energética de biogás y el aprovechamiento de lixiviados generados en rellenos sanitarios.</li>
                <li>Incentivar el uso de vehículos impulsados con fuentes de energía renovables en la recolección y transporte de residuos. </li>
                <li>Caracterización y alianzas con el sector industrial, constructor, académico y de servicios orientadas al uso e innovación de materiales e insumos provenientes de la valorización de residuos.  </li>
                <li>Potencializar encadenamientos asociados con la valorización de residuos de construcción y demolición, así como al uso de biotecnología para la incorporación de biomasa residual al aparato productivo. </li>
                <li>Dinamizar la construcción sostenible como vehículo para la incorporación de RCD a la economía.</li>
                <li>Promover la agricultura urbana y sistema alimentario regenerativo como vehículos para reducción de pérdidas y desperdicio de alimentos. </li>
                <li>Impulsar la formalización de negocios y empleos verdes.  </li>
                <li>Dinamizar el uso de herramientas digitales para orientar al ciudadano en la gestión circular de residuos, transacción de residuos/materiales/insumos valorizados. </li>
                <li>Creación de espacios e instancias participativas asociadas con la innovación en la valorización de residuos.</li>
                <li>Implementar instrumentos financieros que dinamizasen las transacciones públicas y privadas de residuos/materiales/insumos valorizados. </li>
                <li>Incentivar la ubicación de cluster o parques eco-industriales asociados con la valorización de residuos. </li>
                <li>Promover la implementación de prácticas en producción y consumo sostenible.</li>
                <li>Incorporar guías, manuales o protocolos que promuevan la valorización de residuos.</li>

            </ul>
        </b-modal>

    </div>
</template>

<script>
import PointBoard from '../components/points/PointBoard.vue'
import ProgressBar from '../components/boards/ProgressBar.vue'
export default {
    name:'Results',
    components: {
        'progress-ebar': ProgressBar,
        'point-board' : PointBoard
    },
    data(){
        return{
            points: [],
            boards: [],
            subsects: [],
            year: null,
            idDes: null,
            municipio: '',
            ansd: [],
            bar_value: 0,
            value: 0,
            load: false
        }
    },
    async mounted(){
        this.year =  localStorage.getItem('year');
        this.idDes =  localStorage.getItem('id_territorio');
        this.municipio =  localStorage.getItem('municipio')
        this.$store.dispatch('setLoading')
        try{
            var val6 = await window.eel.getAnswerUserD( this.year, this.idDes)(val6)
            this.ansd = JSON.parse(val6)
            if(this.ansd == null) this.ansd = []
            setTimeout( async ()=>{ 
                try {
                    var val = await window.eel.getSubsectionsAll()(val)
                    this.subsects = JSON.parse(val)
                    setTimeout( async ()=>{
                        try{
                            var val5 = await window.eel.getPointsAll()(val5)
                            //console.log(val5)
                            this.points = JSON.parse(val5)

                            let sectionSPDA = this.points.filter(e=>e['SECCION'] == 2)
                            let maxSPDA = Math.max.apply(Math, sectionSPDA.map(function(o) { return o['SUBSECCION']; }))
                            let sectionManage = this.points.filter(e=>e['SECCION'] == 3)
                            let maxManage = Math.max.apply(Math, sectionManage.map(function(o) { return o['SUBSECCION']; }))
                            let sectionREP = this.points.filter(e=>e['SECCION'] == 4)
                            let maxREP = Math.max.apply(Math, sectionREP.map(function(o) { return o['SUBSECCION']; }))
                            let sectionOTHER = this.points.filter(e=>e['SECCION'] == 5)
                            let maxOTHER = Math.max.apply(Math, sectionOTHER.map(function(o) { return o['SUBSECCION']; }))

                            let spda = [], manage = [], rep = [], other = []
                            let spdaUnique = [], manageUnique = [], repUnique = [], otherUnique = []

                            //console.log(maxSPDA)
                            

                            for (let i = 1; i <= maxSPDA; i++) {
                                spda.push(sectionSPDA.filter(e=>e['SUBSECCION'] == i))
                            }
                            for (let i = 1; i <= maxManage; i++) {
                                manage.push(sectionManage.filter(e=>e['SUBSECCION'] == i))     
                            }
                            for (let i = 1; i <= maxREP; i++) {
                                rep.push(sectionREP.filter(e=>e['SUBSECCION'] == i) )     
                            }
                            for (let i = 1; i <= maxOTHER; i++) {
                                other.push(sectionOTHER.filter(e=>e['SUBSECCION'] == i))   
                            }

                            //console.log(spda)
                            for (let i = 0; i < spda.length; i++) {
                                spdaUnique.push(spda[i].map(item => item['CODIGO']).filter((value, index, self) => self.indexOf(value) === index))
                                
                            }
                            for (let i = 0; i < manage.length; i++) {
                                manageUnique.push(manage[i].map(item => item['CODIGO']).filter((value, index, self) => self.indexOf(value) === index))
                                
                            }
                            for (let i = 0; i < rep.length; i++) {
                                repUnique.push(rep[i].map(item => item['CODIGO']).filter((value, index, self) => self.indexOf(value) === index))
                            }
                            for (let i = 0; i < other.length; i++) {
                                otherUnique.push(other[i].map(item => item['CODIGO']).filter((value, index, self) => self.indexOf(value) === index))
                            }
                            
                            
                            

                            //console.log(spdaUnique)

                            let spdaFinal = {
                                name: this.$t('spda.full_name'),
                                subsec:[]
                            }
                            let manageFinal = {
                                name: this.$t('manager.full_name'),
                                subsec:[]
                            }
                            let repFinal = {
                                name: this.$t('rep.full_name'),
                                subsec:[]
                            }
                            let otherFinal = {
                                name: this.$t('other_profiles.full_name'),
                                subsec:[]
                            }


                            for (let j = 0; j < spda.length; j++) {
                                let section1 = {
                                    name: this.subsects.filter(e=> e['SECCION'] == 2 && e['PAGINA'] == j+1)[0]['TITULO'],
                                    data: []
                                }
                                for (let i = 0; i < spdaUnique.length; i++) {
                                    for (let l = 0; l < spdaUnique[i].length; l++) {
                                        //console.log(spdaUnique[i][l])
                                        //console.log(spda[j])
                                        var code1 = spda[j].filter(e=>e['CODIGO'] == spdaUnique[i][l])
                                        
                                        //console.log(code1)
                                        if(code1[0] != undefined ){
                                            var maxPoints1 = Math.max.apply(Math, code1.map(function(o) { return o['PUNTOS']; }))
                                            section1.data.push({
                                                code : spdaUnique[i][l],
                                                max_points : maxPoints1,
                                                points : this.ansd.filter(e => e.id_pregunta == code1[0]['ID_PREGUNTA'])[0].puntaje,
                                                id_ques : code1[0]['ID_PREGUNTA'],
                                                optional : code1[0]['OPCIONAL'] == null || code1[0]['OPCIONAL'] == 0 ? true : false 
                                            })
                                        }   
                                    }
                                }
                                spdaFinal.subsec.push(section1)

                            }
                            for (let j = 0; j < manage.length; j++) {
                                let section2 = {
                                    name: this.subsects.filter(e=> e['SECCION'] == 3 && e['PAGINA'] == j+1)[0]['TITULO'],
                                    data: []
                                }
                                for (let i = 0; i < manageUnique.length; i++) {
                                    for (let l = 0; l <  manageUnique[i].length; l++) {
                                        var code2 = manage[j].filter(e=>e['CODIGO'] == manageUnique[i][l])
                                        if(code2[0] != undefined ){
                                            var maxPoints2 = Math.max.apply(Math, code2.map(function(o) { return o['PUNTOS']; }))
                                            section2.data.push({
                                                code : manageUnique[i][l],
                                                max_points : maxPoints2,
                                                points : this.ansd.filter(e => e.id_pregunta == code1[0]['ID_PREGUNTA'])[0].puntaje,
                                                id_ques : code2[0]['ID_PREGUNTA'],
                                                optional : code2[0]['OPCIONAL'] == null || code2[0]['OPCIONAL'] == 0 ? true : false 
                                            })
                                        }
                                        
                                    }
                                    
                                }
                                manageFinal.subsec.push(section2)              
                            }
                            for (let j = 0; j < rep.length; j++) {
                                let section3 = {
                                    name: this.subsects.filter(e=> e['SECCION'] == 4 && e['PAGINA'] == j+1)[0]['TITULO'],
                                    data: []
                                }
                                for (let i = 0; i < repUnique.length; i++) {
                                    for (let l = 0; l < repUnique[i].length; l++) {
                                        var code3 = rep[j].filter(e=>e['CODIGO'] == repUnique[i][l])
                                        if(code3[0] != undefined ){
                                            var maxPoints3 = Math.max.apply(Math, code3.map(function(o) { return o['PUNTOS']; }))
                                            section3.data.push({
                                                code : repUnique[i][l],
                                                max_points : maxPoints3,
                                                points : this.ansd.filter(e => e.id_pregunta == code1[0]['ID_PREGUNTA'])[0].puntaje,
                                                id_ques : code3[0]['ID_PREGUNTA'],
                                                optional : code3[0]['OPCIONAL'] == null || code3[0]['OPCIONAL'] == 0 ? true : false 
                                            })
                                        }
                                        
                                    }
                                    
                                }
                                repFinal.subsec.push(section3)
                            }
                            for (let j = 0; j < other.length; j++) {
                                let section4 = {
                                    name: this.subsects.filter(e=> e['SECCION'] == 5 && e['PAGINA'] == j+1)[0]['TITULO'],
                                    data: []
                                }
                                for (let i = 0; i < otherUnique.length; i++) {
                                    for (let l = 0; l < otherUnique[i].length; l++) {
                                        var code4 = other[j].filter(e=>e['CODIGO'] == otherUnique[i][l])
                                        if(code4[0] != undefined ){
                                            var maxPoints4 = Math.max.apply(Math, code4.map(function(o) { return o['PUNTOS']; }))
                                            section4.data.push({
                                                code : otherUnique[i][l],
                                                max_points : maxPoints4,
                                                points : this.ansd.filter(e => e.id_pregunta == code1[0]['ID_PREGUNTA'])[0].puntaje,
                                                id_ques : code4[0]['ID_PREGUNTA'],
                                                optional : code4[0]['OPCIONAL'] == null || code4[0]['OPCIONAL'] == 0 ? true : false 
                                            })
                                        }
                                        
                                    }
                                    
                                }
                                otherFinal.subsec.push(section4)
                            }

                            
                            
                            
                            

                            this.boards.push(spdaFinal)
                            this.boards.push(manageFinal)
                            this.boards.push(repFinal)
                            this.boards.push(otherFinal)
                            
                            let totalPoints = 0
                            for (let k = 0; k < this.boards.length; k++) {
                                let sumMax = 0, sum = 0
                                /* console.log('______________') */
                                for (let i = 0; i < this.boards[k].subsec.length; i++) {
                                    let sumSubMax = 0, sumSub = 0
                                    for (let j = 0; j < this.boards[k].subsec[i].data.length; j++) {
                                        sumSubMax += this.boards[k].subsec[i].data[j].max_points
                                        sumSub += this.boards[k].subsec[i].data[j].points
                                    }
                                
                                    /* console.log('Indice '+ i)
                                    console.log('sumSub '+ sumSub)
                                    console.log('sumSubMax '+ sumSubMax) */
                                    if(sumSub == 0 &&  this.boards[k].subsec[i].data[0].optional == false) sumMax += 0
                                    else sumMax += sumSubMax

                                    sum += sumSub
                                
                                }
                                /* console.log('sum '+ sum)
                                console.log('sumMax '+ sumMax) */
                                totalPoints += (sum/sumMax)/4
                            }
                            
                            this.value = totalPoints
                            this.bar_value = totalPoints * 100 / 1
                            console.log('Loaded')
                            this.load = true
                        } catch (error) {
                            console.log(error)
                            this.$store.dispatch('clearLoading')
                        }


                    }, 500);
                } catch (error) {
                    console.log(error)
                    this.isLoad=true
                    this.$store.dispatch('clearLoading')
                }

            }, 500);

            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.$store.dispatch('clearLoading')
        }
        

        
    },
    methods: {
        onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        },
        groupBy(xs, key) {
            return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        }
    }
}
</script>

<style lang="sass" scoped>
h2 , h3
    text-align: center
.bar
    width: 80%
    margin: 15px auto
    display: grid
    grid-template-columns: 30% 69%
    align-items: center
    gap: 15px
    .points
        font-weight: bold
.level
    display: grid
    grid-template-columns: 33.3% 33.3% 33.3%
    height: 70px
    align-items: center
    justify-items: center
    font-size: 2rem
    font-weight: bold
    color: #fff
    .lv
        width: 100%
        height: 100%
        display: grid
        align-items: center
        justify-items: center
        cursor: pointer
    .c1
        background-color: #00af50  
    .c2
        background-color: #8ac1c8
    .c3
        background-color: #bebebe
.load-c
    display: grid
    justify-items: center
.loader
    --background: linear-gradient(135deg, #23C4F8, #275EFE)
    --shadow: #{rgba(#275EFE, .28)}
    --text: #6C7486
    --page: #{rgba(#fff, .36)}
    --page-fold: #{rgba(#fff, .52)}
    --duration: 3s
    width: 200px
    height: 140px
    position: relative
    &:before,
    &:after 
        --r: -6deg
        content: ''
        position: absolute
        bottom: 8px
        width: 120px
        top: 80%
        box-shadow: 0 16px 12px var(--shadow)
        transform: rotate(var(--r))
    &:before
        left: 4px
    &:after
        --r: 6deg
        right: 4px
    div
        width: 100%
        height: 100%
        border-radius: 13px
        position: relative
        z-index: 1
        perspective: 600px
        box-shadow: 0 4px 6px var(--shadow)
        background-image: var(--background)
        ul 
            margin: 0
            padding: 0
            list-style: none
            position: relative
            li
                --r: 180deg
                --o: 0
                --c: var(--page)
                position: absolute
                top: 10px
                left: 10px
                transform-origin: 100% 50%
                color: var(--c)
                opacity: var(--o)
                transform: rotateY(var(--r))
                animation: var(--duration) ease infinite
                $i: 2
                @while $i < 6
                    &:nth-child(#{$i})
                        --c: var(--page-fold)
                        animation-name: page-#{$i}
                    $i: $i + 1
                svg
                    width: 90px
                    height: 120px
                    display: block
                &:first-child
                    --r: 0deg
                    --o: 1
                &:last-child
                    --o: 1
    span
        display: block
        left: 0
        right: 0
        top: 100%
        margin-top: 20px
        text-align: center
        color: var(--text)

$i: 2
@while $i < 6
    $delay: $i * 15 - 30
    @keyframes page-#{$i}
        #{0 + $delay}%
            transform: rotateY(180deg)
            opacity: 0
        #{20 + $delay}%
            opacity: 1
        #{35 + $delay}%,
        100%
            opacity: 0
        #{50 + $delay}%,
        100%
            transform: rotateY(0deg)
    $i: $i + 1

html
    box-sizing: border-box
    -webkit-font-smoothing: antialiased


*
    box-sizing: inherit
    &:before,
    &:after 
        box-sizing: inherit


// Center & dribbble
body
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background: #1C212E
    font-family: 'Roboto', Arial
    .dribbble
        position: fixed
        display: block
        right: 24px
        bottom: 24px
        img
            display: block
            width: 76px
</style>