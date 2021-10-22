<template>
    <div>
        <div class="questions" v-if="answers.length == 0 && isLoad == false">
            En Construcción
        </div>
        <div class="questions" v-if="answers.length>0 && isLoad" @mouseover="$forceUpdate()">
            <div class="question" v-for="(question, i) in questions" :key="i">
                <div v-show="question['VISIBLE'] == 1 && getCalculated(i)">
                    <b>{{question['COD_PREGUNTA']}}</b> <b v-if="question['TIPO_1'] == 'titulo'">{{question['PREGUNTA']}}</b> <span v-else>{{question['PREGUNTA']}}</span> <span class="help" v-show="question['AYUDA'] != 'NA'" v-b-tooltip.hover :title="question['AYUDA']" ><i class="fas fa-question-circle"></i></span>
                    <div class="cols-c" v-if="answers[i] != undefined ">
                        <!--COL1 -->
                        <div class="col-c" v-if="question['TIPO_1'] != 'NA'">
                            <div v-if="question['TIPO_1']== 'grafica'">
                                <chartjs-line  :bind="true"></chartjs-line>
                            </div>
                            <div v-if="question['TIPO_1']== 'tabla' && question['TABLES'] != undefined && question['TANSWERS'] != undefined ">
                                <div class="header">
                                    <div class="item-h" v-for="(item, j) in question['TABLES']" :key="j">
                                        {{item['COLUMNA']}}
                                    </div>
                                    
                                </div>
                                <div class="body"  v-for="(tanswers, k) in question['TANSWERS']" :key="k+question['TANSWERS'].length" >
                                    <div class="item" v-for="(item, j) in question['TABLES']" :key="j">
                                        <div v-if="item['TIPO']== 'abierto numero'">
                                            <b-input v-model="question['TANSWERS'][k][j+1]" @paste.prevent @keypress="validNumber($event)"></b-input>
                                        </div>
                                        <div v-if="item['TIPO']== 'abierto texto'">
                                            <b-input v-model="question['TANSWERS'][k][j+1]"></b-input>
                                        </div>
                                        <div v-if="item['TIPO']== 'abierto fecha'">
                                            <b-form-datepicker :id="'datepicker-T-'+k+'-'+j" locale="es" v-bind="labels['es'] || {}" v-model="question['TANSWERS'][k][j+1]"></b-form-datepicker>
                                        </div>
                                        <div v-if="item['TIPO']== 'selección unica'">
                                            <v-select :options="getRes(item['ORDEN'],i)" v-model="question['TANSWERS'][k][j+1]"  label="TEXTO" />
                                        </div>
                                    </div>  
                                </div>
                                <!-- <b-button variant="outline-primary" style="width: 100%" @click="addTableAnswer(i)"><i class="far fa-plus-square"></i> {{$t('manager.add_table')}}</b-button> -->
                                
                            </div>
                            <div class="inline" v-if="question['TIPO_1']== 'abierto numero'">
                                <b-input v-model="answers[i]['dato_text']" @paste.prevent @keypress="validNumber($event)"></b-input> <span v-if="question['UNIDAD_1'] != 'NA'">{{question['UNIDAD_1']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_1']== 'abierto texto'">
                                <b-input v-model="answers[i]['dato_text']"></b-input> <span v-if="question['UNIDAD_1'] != 'NA'">{{question['UNIDAD_1']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_1']== 'abierto fecha'">
                                <b-form-datepicker :id="'datepicker-Q1-'+i" locale="es" v-bind="labels['es'] || {}" v-model="answers[i]['dato_text']"></b-form-datepicker> <span v-if="question['UNIDAD_1'] != 'NA'">{{question['UNIDAD_1']}}</span>
                            </div>
                            <div class="inline calculado" v-if="question['TIPO_1']== 'calculado'">
                                <b-input v-model="answers[i]['dato_calc']" :disabled="true"></b-input> <span v-if="question['UNIDAD_1'] != 'NA'">{{question['UNIDAD_1']}}</span>
                            </div> 
                            <div class="inline referencia" v-if="question['TIPO_1']== 'referencia'">
                                <b-input v-model="answers[i]['dato_num']" :disabled="true"></b-input> <span v-if="question['UNIDAD_1'] != 'NA'">{{question['UNIDAD_1']}}</span>
                            </div>
                            <div v-if="question['TIPO_1']== 'selección multiple'">
                                <b-form-checkbox
                                v-for="(item, j) in question['RESPUESTAS']"
                                :key="j"
                                :id="'checkbox'+i+j"
                                v-model="answers[i][item['COLUMNA']]"
                                :name="'checkbox'+i+j"
                                :value="1"
                                :unchecked-value="0"
                                :disabled="ifActive(answers[i],3) && answers[i][item['COLUMNA']] == 0"
                                >
                                {{item['TEXTO']}}
                                </b-form-checkbox>
                            </div>
                            <div v-if="question['TIPO_1']== 'selección unica'">
                                <v-select :options="question['RESPUESTAS']" v-model="answers[i]['dato_unico']"  label="TEXTO" />
                            </div>
                            <div v-if="question['TIPO_1']== 'año'">
                                <b>Año {{year}}</b>
                            </div>
                            <div class="inline2" v-if="question['TIPO_1']== 'año editable'">
                            <span v-if="question['UNIDAD_1'] != 'NA'">{{question['UNIDAD_1']}}</span> <v-select v-model="answers[i]['anio']" :options="yearOpt"></v-select>
                            </div>
                            <br>
                            <br v-if="question['TIPO_1'] != 'titulo'" >
                        </div>
                        <!--COL1 -->
                        <!--COL2 -->
                        <div class="col-c" v-if="question['TIPO_2'] != 'NA'">
                            <div v-if="question['TIPO_2']== 'grafica'">
                                <chartjs-line  :bind="true"></chartjs-line>
                            </div>
                            <div class="inline" v-if="question['TIPO_2']== 'abierto numero'">
                                <b-input v-model="answers[i]['dato_text']" @paste.prevent @keypress="validNumber($event)"></b-input> <span v-if="question['UNIDAD_2'] != 'NA'">{{question['UNIDAD_2']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_2']== 'abierto texto'">
                                <b-input v-model="answers[i]['dato_text']"></b-input> <span v-if="question['UNIDAD_2'] != 'NA'">{{question['UNIDAD_2']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_2']== 'abierto fecha'">
                                <b-form-datepicker :id="'datepicker-Q2-'+i" locale="es" v-bind="labels['es'] || {}" v-model="answers[i]['dato_text']"></b-form-datepicker> <span v-if="question['UNIDAD_2'] != 'NA'">{{question['UNIDAD_2']}}</span>
                            </div>
                            <div class="inline calculado" v-if="question['TIPO_2']== 'calculado'">
                                <b-input v-model="answers[i]['dato_calc']" :disabled="true"></b-input> <span v-if="question['UNIDAD_2'] != 'NA'">{{question['UNIDAD_2']}}</span>
                            </div>
                            <div class="inline referencia" v-if="question['TIPO_2']== 'referencia'">
                                <b-input v-model="answers[i]['dato_num']" :disabled="true"></b-input> <span v-if="question['UNIDAD_2'] != 'NA'">{{question['UNIDAD_2']}}</span>
                            </div>
                            <div v-if="question['TIPO_2']== 'selección multiple'">
                                <b-form-checkbox
                                v-for="(item, j) in question['RESPUESTAS']"
                                :key="j"
                                :id="'checkbox'+i+j"
                                v-model="answers[i][item['COLUMNA']]"
                                :name="'checkbox'+i+j"
                                :value="1"
                                :unchecked-value="0"
                                :disabled="ifActive(answers[i],3) && answers[i][item['COLUMNA']] == 0"
                                >
                                {{item['TEXTO']}}
                                </b-form-checkbox>
                            </div>
                            <div v-if="question['TIPO_2']== 'selección unica'">
                                <v-select :options="question['RESPUESTAS']" v-model="answers[i]['dato_unico']"  label="TEXTO" />
                            </div>
                            <div v-if="question['TIPO_2']== 'año'">
                                <b>Año {{year}}</b>
                            </div>
                            <div class="inline2" v-if="question['TIPO_2']== 'año editable'">
                            <span v-if="question['UNIDAD_2'] != 'NA'">{{question['UNIDAD_2']}}</span> <v-select v-model="answers[i]['anio']" :options="yearOpt"></v-select>
                            </div>
                            <br>
                            <br v-if="question['TIPO_2'] != 'titulo'" >
                        </div>
                        <!--COL2 -->
                        <!--COL3 -->
                        <div class="col-c" v-if="question['TIPO_3'] != 'NA'">
                            <div v-if="question['TIPO_3']== 'grafica'">
                                <chartjs-line  :bind="true"></chartjs-line>
                            </div>
                            <div class="inline" v-if="question['TIPO_3']== 'abierto numero'">
                                <b-input v-model="answers[i]['dato_text']" @paste.prevent @keypress="validNumber($event)"></b-input> <span v-if="question['UNIDAD_3'] != 'NA'">{{question['UNIDAD_3']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_3']== 'abierto texto'">
                                <b-input v-model="answers[i]['dato_text']"></b-input> <span v-if="question['UNIDAD_3'] != 'NA'">{{question['UNIDAD_3']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_3']== 'abierto fecha'">
                                <b-form-datepicker :id="'datepicker-Q3-'+i" locale="es" v-bind="labels['es'] || {}" v-model="answers[i]['dato_text']"></b-form-datepicker> <span v-if="question['UNIDAD_3'] != 'NA'">{{question['UNIDAD_3']}}</span>
                            </div>
                            <div class="inline calculado" v-if="question['TIPO_3']== 'calculado'">
                                <b-input v-model="answers[i]['dato_calc']" :disabled="true"></b-input> <span v-if="question['UNIDAD_3'] != 'NA'">{{question['UNIDAD_3']}}</span>
                            </div>
                            <div class="inline referencia" v-if="question['TIPO_3']== 'referencia'">
                                <b-input v-model="answers[i]['dato_num']" :disabled="true"></b-input> <span v-if="question['UNIDAD_3'] != 'NA'">{{question['UNIDAD_3']}}</span>
                            </div>
                            <div v-if="question['TIPO_3']== 'selección multiple'">
                                <b-form-checkbox
                                v-for="(item, j) in question['RESPUESTAS']"
                                :key="j"
                                :id="'checkbox'+i+j"
                                v-model="answers[i][item['COLUMNA']]"
                                :name="'checkbox'+i+j"
                                :value="1"
                                :unchecked-value="0"
                                :disabled="ifActive(answers[i],3) && answers[i][item['COLUMNA']] == 0"
                                >
                                {{item['TEXTO']}}
                                </b-form-checkbox>
                            </div>
                            <div v-if="question['TIPO_3']== 'selección unica'">
                                <v-select :options="question['RESPUESTAS']" v-model="answers[i]['dato_unico']"  label="TEXTO" />
                            </div>
                            <div v-if="question['TIPO_3']== 'año'">
                                <b>Año {{year}}</b>
                            </div>
                            <div class="inline2" v-if="question['TIPO_3']== 'año editable'">
                            <span v-if="question['UNIDAD_3'] != 'NA'">{{question['UNIDAD_3']}}</span> <v-select v-model="answers[i]['anio']" :options="yearOpt"></v-select>
                            </div>
                            <br>
                            <br v-if="question['TIPO_3'] != 'titulo'" >
                        </div>
                        <!--COL3 -->
                        <!--COL4 -->
                        <div class="col-c" v-if="question['TIPO_4'] != 'NA'">
                            <div v-if="question['TIPO_4']== 'grafica'">
                                <chartjs-line  :bind="true"></chartjs-line>
                            </div>
                            <div class="inline" v-if="question['TIPO_4']== 'abierto numero'">
                                <b-input v-model="answers[i]['dato_text']" @paste.prevent @keypress="validNumber($event)"></b-input> <span v-if="question['UNIDAD_4'] != 'NA'">{{question['UNIDAD_4']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_4']== 'abierto texto'">
                                <b-input v-model="answers[i]['dato_text']"></b-input> <span v-if="question['UNIDAD_4'] != 'NA'">{{question['UNIDAD_4']}}</span>
                            </div>
                            <div class="inline" v-if="question['TIPO_4']== 'abierto fecha'">
                                <b-form-datepicker :id="'datepicker-Q4-'+i" locale="es" v-bind="labels['es'] || {}" v-model="answers[i]['dato_text']"></b-form-datepicker> <span v-if="question['UNIDAD_4'] != 'NA'">{{question['UNIDAD_4']}}</span>
                            </div>
                            <div  class="inline calculado" v-if="question['TIPO_4']== 'calculado'">
                                <b-input v-model="answers[i]['dato_calc']" :disabled="true"></b-input> <span v-if="question['UNIDAD_4'] != 'NA'">{{question['UNIDAD_4']}}</span>
                            </div>
                            <div class="inline referencia" v-if="question['TIPO_4']== 'referencia'">
                                <b-input v-model="answers[i]['dato_num']" :disabled="true"></b-input> <span v-if="question['UNIDAD_4'] != 'NA'">{{question['UNIDAD_4']}}</span>
                            </div>
                            <div v-if="question['TIPO_4']== 'selección multiple'">
                                <b-form-checkbox
                                v-for="(item, j) in question['RESPUESTAS']"
                                :key="j"
                                :id="'checkbox'+i+j"
                                v-model="answers[i][item['COLUMNA']]"
                                :name="'checkbox'+i+j"
                                :value="1"
                                :unchecked-value="0"
                                :disabled="ifActive(answers[i],3) && answers[i][item['COLUMNA']] == 0"
                                >
                                {{item['TEXTO']}}
                                </b-form-checkbox>
                            </div>
                            <div v-if="question['TIPO_4']== 'selección unica'">
                                <v-select :options="question['RESPUESTAS']" v-model="answers[i]['dato_unico']"  label="TEXTO" />
                            </div>
                            <div v-if="question['TIPO_4']== 'año'">
                                <b>Año {{year}}</b>
                            </div>
                            <div class="inline2" v-if="question['TIPO_4']== 'año editable'">
                            <span v-if="question['UNIDAD_4'] != 'NA'">{{question['UNIDAD_4']}}</span> <v-select v-model="answers[i]['anio']" :options="yearOpt"></v-select>
                            </div>
                            <br>
                            <br v-if="question['TIPO_4'] != 'titulo'" >
                        </div>
                        <!--COL4 -->
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align: center" v-show="questions.length>0">
            <b-button variant="outline-warning" @click="validAnswers"><i class="far fa-save"></i> {{$t('spda.save')}}</b-button>
        </div>

        <b-modal ref="error" id="error" size="md" :ok-only="true" :title="$t('descriptive.valid_data')">
            <div v-html="this.errorMessage"></div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name:'Question',
    props:{
        wizard:{
            type: Number,
            default: 1
        },
        section:{
            type: Number,
            default: 2
        }
    },
    data(){
        return{
            errorSave: false,
            errorMessage: '',
            questions: [],
            answers:[],
            isLoad: false,
            year: null,
            idDes: null,
            yearOpt: [
                2019,
                2018,
                2017,
                2016,
                2015,
                2014,
                2013,
                2012,
                2011,
                2010,
                2009
            ],
            regN: /^[0-9]+$/,
            labels: {
                es: {
                    labelPrevDecade: 'Década anterior',
                    labelPrevYear: 'Año anterior',
                    labelPrevMonth: 'Mes anterior',
                    labelCurrentMonth: 'Mes actual',
                    labelNextMonth: 'Mes siguiente',
                    labelNextYear: 'Año siquiente',
                    labelNextDecade: 'Década siguiente',
                    labelToday: 'Hoy',
                    labelSelected: 'Fecha seleccionada',
                    labelNoDateSelected: 'Sin fecha elegida',
                    labelCalendar: 'Calendario',
                    labelNav: 'Navegación de calendario ',
                    labelHelp: 'Utilice las teclas de flecha para navegar por el calendario'
                },
            },
            constants_calculated: {
                table: 'REG_TAB'
            }
        }
    },
    async mounted(){
        this.year =  localStorage.getItem('year');
        this.idDes =  localStorage.getItem('id_territorio');
        this.$store.dispatch('year')
        this.isLoad=false
        this.updateQuestions()
    },
    methods: {
        getCalculated(i){
            if(this.questions.length < 1 ) return false
            if(this.questions[i]['FORMULA'] == undefined) return false
            if(this.questions[i]['FORMULA'].length<1){
                return true
            }
            else{
                //console.log(this.questions[i]['FORMULA'][0].tipo)
                if(this.questions[i]['FORMULA'][0].tipo == this.constants_calculated.table){
                    let idO = this.questions[i]['FORMULA'][0]['CPO'].split("&")[1]
                    //console.log(idO)
                    if(this.questions[i]['FORMULA'][0]['OP'] == '='){
                        let answer = this.getAnswerValues(parseInt(idO))
                        //console.log(answer)
                        if(parseInt(answer['dato_text']) == 0 || answer['dato_text'] == null || answer['dato_text'] == undefined || answer['dato_text'] == '' ){
                            return false
                        }
                        else if(parseInt(answer['dato_text']) < 11 ){
                            this.setRowsTables(i, parseInt(answer['dato_text']))
                            return true
                        }
                        else if(parseInt(answer['dato_text']) > 10 ){
                            this.setAnswerValueTable(parseInt(idO))
                            this.setRowsTables(i, 10)
                            return true
                        }
                        else{
                           return false 
                        }
                    }
                }
            }
        },
        getAnswerValues(id){
            return this.answers.filter(e=>{
                return e.id_pregunta == parseInt(id)
            })[0]
        },
        setAnswerValueTable(id){
            let index = this.answers.findIndex( x => x.id_pregunta == parseInt(id) );
            this.answers[index]['dato_text'] = '10'
        },
        setRowsTables(i , maxr){
            let currentLen = this.questions[i]['TANSWERS'].length
            let diference = maxr - currentLen
            if(diference<0){
                for (let index = 0; index < diference*-1; index++) {
                    this.removeTableAnswer(i)
                }
            }
            if(diference>0){
                for (let index = 0; index < diference; index++) {
                    this.addTableAnswer(i)
                }
            }

        },
        addTableAnswer(i){
            this.questions[i]['TANSWERS'].push(
                {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
                    9: '',
                    10: '',
                }
            )
            this.$forceUpdate();
        },
        removeTableAnswer(i){
            this.questions[i]['TANSWERS'].pop()
            this.$forceUpdate();
        },
        getRes(order, i){
            return this.questions[i]['RESPUESTAS'].filter((e)=>{return parseInt(e['COLUMNA']) == parseInt(order)})
        },
        ifActive(item, cant){
            var count = 0
            if(item['A'] == 1) count++
            if(item['B'] == 1) count++
            if(item['C'] == 1) count++
            if(item['D'] == 1) count++
            if(item['E'] == 1) count++
            if(item['F'] == 1) count++
            if(item['G'] == 1) count++
            if(item['H'] == 1) count++
            if(item['I'] == 1) count++
            if(item['J'] == 1) count++
            if(cant <= count) return true
            else return false
        },
        async updateQuestions(){
            this.isLoad = false
            this.answers = []
            this.$store.dispatch('setLoading')
            try {
                var val = await window.eel.getSPDAQuestions(this.wizard, this.section)(val)
                this.questions = JSON.parse(val)
                for (let i = 0; i < this.questions.length; i++) {
                    setTimeout( async ()=>{ 
                        try{
                            var val2 = await window.eel.getSPDAAnswers(this.questions[i]['ID_PREGUNTA'])(val2)
                            if(val2 != undefined)
                                if(val2.length>0){
                                    //if(i == 7){ console.log(JSON.parse(val2))}
                                    this.questions[i]['RESPUESTAS'] = JSON.parse(val2)
                                    this.isLoad = true
                                }
                                else{
                                    this.questions[i]['RESPUESTAS'] = []
                                    this.isLoad = false
                                }
                            else{
                                this.questions[i]['RESPUESTAS'] = []
                                this.isLoad = false
                            }
                        }
                        catch(error){
                            console.log(error)
                            console.log('in index '+ i)
                            this.questions[i]['RESPUESTAS'] = []
                        }
                        this.answers.push(
                            {
                                id_pregunta: this.questions[i]['ID_PREGUNTA'],
                                A: 0,
                                B: 0,
                                C: 0,
                                D: 0,
                                E: 0,
                                F: 0,
                                G: 0,
                                H: 0,
                                I: 0,
                                J: 0,
                                dato_num: '',
                                dato_calc: '',
                                anio: '',
                                dato_text: '',
                                dato_unico: '', 
                                nombre_edita: '',
                                correo_edita: '',
                                entidad_edita: '',
                                numero_edita: '',
                                puntaje: '',
                                anio_actual: this.year,
                                id_territorio: this.idDes
                            }
                        )
                        if(this.questions[i]['TIPO_4'] == 'año editable' || this.questions[i]['TIPO_3'] == 'año editable'){
                            this.answers[i].anio = 2019
                        }
                        
                    }, 500);
                    setTimeout( async ()=>{ 
                        try{
                            var val2 = await window.eel.getTables(this.questions[i]['ID_PREGUNTA'])(val2)
                            if(val2 != undefined)
                                if(val2.length>0){
                                    //if(i == 7){ console.log(JSON.parse(val2))}
                                    this.questions[i]['TABLES'] = JSON.parse(val2)
                                    this.questions[i]['TANSWERS'] = []
                                }
                                else{
                                    this.questions[i]['TABLES'] = []
                                    this.questions[i]['TANSWERS'] = []
                                }
                            else{
                                this.questions[i]['TABLES'] = []
                                this.questions[i]['TANSWERS'] = []
                            }
                        }
                        catch(error){
                            console.log(error)
                            console.log('in index '+ i)
                            this.questions[i]['TABLES'] = []
                            this.questions[i]['TANSWERS'] = []
                        }
                    }, 500);

                    setTimeout( async ()=>{ 
                        try{
                            var val2 = await window.eel.getFormula(this.questions[i]['ID_PREGUNTA'])(val2)
                            if(val2 != undefined)
                                if(val2.length>0){
                                    //if(i == 7){ console.log(JSON.parse(val2))}
                                    this.questions[i]['FORMULA'] = JSON.parse(val2)
                                }
                                else
                                    this.questions[i]['FORMULA'] = []
                            else
                                this.questions[i]['FORMULA'] = []
                        }
                        catch(error){
                            console.log(error)
                            console.log('in index '+ i)
                            this.questions[i]['FORMULA'] = []
                        }
                    }, 500);
                    setTimeout( async ()=>{ 
                        try{
                            var val2 = await window.eel.getUserAnswers(this.questions[i]['ID_PREGUNTA'], this.year, this.idDes)(val2)
                            //console.log(val2)
                            if(val2 != undefined)
                                if(val2.length>0){
                                    var val3 = JSON.parse(val2)
                                    this.answers[i].id_pregunta = val3[0].id_pregunta
                                    this.answers[i].A = val3[0].A
                                    this.answers[i].B = val3[0].B
                                    this.answers[i].C = val3[0].C
                                    this.answers[i].D = val3[0].D
                                    this.answers[i].E = val3[0].E
                                    this.answers[i].F = val3[0].F
                                    this.answers[i].G = val3[0].G
                                    this.answers[i].H = val3[0].H
                                    this.answers[i].I = val3[0].I
                                    this.answers[i].J = val3[0].J
                                    this.answers[i].dato_num = val3[0].dato_num
                                    this.answers[i].dato_calc = val3[0].dato_calc
                                    this.answers[i].anio = val3[0].anio
                                    this.answers[i].dato_text = val3[0].dato_text
                                    this.answers[i].dato_unico = ''
                                    this.answers[i].nombre_edita = val3[0].nombre_edita
                                    this.answers[i].correo_edita = val3[0].correo_edita
                                    this.answers[i].entidad_edita = val3[0].entidad_edita
                                    this.answers[i].numero_edita = val3[0].numero_edita
                                    this.answers[i].puntaje = val3[0].puntaje
                                    this.answers[i].anio_actual = val3[0].anio_actual
                                    this.answers[i].id_territorio = val3[0].id_territorio

                                    if (this.questions[i]['TIPO_1']== 'selección unica' || this.questions[i]['TIPO_2']== 'selección unica' || this.questions[i]['TIPO_3']== 'selección unica' || this.questions[i]['TIPO_4']== 'selección unica') {
                                        //console.log(i)
                                        try {
                                            if(this.answers[i]['A'] == 1){
                                                //console.log(i + ' S')
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][0] 
                                            }
                                            if(this.answers[i]['B'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][1] 
                                            } 
                                            if(this.answers[i]['C'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][2] 
                                            }
                                            if(this.answers[i]['D'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][3] 
                                            }
                                            if(this.answers[i]['E'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][4] 
                                            }
                                            if(this.answers[i]['F'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][5] 
                                            }
                                            if(this.answers[i]['G'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][6] 
                                            }
                                            if(this.answers[i]['H'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][7] 
                                            }
                                            if(this.answers[i]['I'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][8] 
                                            }
                                            if(this.answers[i]['J'] == 1){
                                                this.answers[i]['dato_unico'] =  this.questions[i]['RESPUESTAS'][9] 
                                            }
                                            
                                        } catch (error) {
                                            console.log('fail load - ' + error)
                                        }
                                    }
                                    if (this.questions[i]['TIPO_1']== 'tabla' || this.questions[i]['TIPO_2']== 'tabla' || this.questions[i]['TIPO_3']== 'tabla' || this.questions[i]['TIPO_4']== 'tabla') {
                                        this.questions[i]['TANSWERS'] =[]
                                        var columA = [], columB = [], columC = [], columD = [], columE = [], columF = [], columG = [], columH = [], columI = [], columJ = []
                                        
                                        columA = this.answers[i]['A'].split(';')
                                        columB = this.answers[i]['B'].split(';')
                                        columC = this.answers[i]['C'].split(';')
                                        columD = this.answers[i]['D'].split(';')
                                        columE = this.answers[i]['E'].split(';')
                                        columF = this.answers[i]['F'].split(';')
                                        columG = this.answers[i]['G'].split(';')
                                        columH = this.answers[i]['H'].split(';')
                                        columI = this.answers[i]['I'].split(';')
                                        columJ = this.answers[i]['J'].split(';')
                                        //console.log(columA)
                                        //console.log(columG)
                                        for (let n = 0; n < columA.length-1; n++) {
                                            this.questions[i]['TANSWERS'].push(
                                                {
                                                    1: this.questions[i]['TABLES'][0] == undefined ? "" : this.questions[i]['TABLES'][0]['TIPO'] == 'selección unica' ? columA[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '1' && e['TEXTO'] == columA[n]})[0] : ""  :columA[n] != undefined ? columA[n].length > 0 ? columA[n] : "" : "",
                                                    2: this.questions[i]['TABLES'][1] == undefined ? "" : this.questions[i]['TABLES'][1]['TIPO'] == 'selección unica' ? columB[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '2' && e['TEXTO'] == columB[n]})[0] : ""  :columB[n] != undefined ? columB[n].length > 0 ? columB[n] : "" : "",
                                                    3: this.questions[i]['TABLES'][2] == undefined ? "" : this.questions[i]['TABLES'][2]['TIPO'] == 'selección unica' ? columC[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '3' && e['TEXTO'] == columC[n]})[0] : ""  :columC[n] != undefined ? columC[n].length > 0 ? columC[n] : "" : "",
                                                    4: this.questions[i]['TABLES'][3] == undefined ? "" : this.questions[i]['TABLES'][3]['TIPO'] == 'selección unica' ? columD[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '4' && e['TEXTO'] == columD[n]})[0] : ""  :columD[n] != undefined ? columD[n].length > 0 ? columD[n] : "" : "",
                                                    5: this.questions[i]['TABLES'][4] == undefined ? "" : this.questions[i]['TABLES'][4]['TIPO'] == 'selección unica' ? columE[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '5' && e['TEXTO'] == columE[n]})[0] : ""  :columE[n] != undefined ? columE[n].length > 0 ? columE[n] : "" : "",
                                                    6: this.questions[i]['TABLES'][5] == undefined ? "" : this.questions[i]['TABLES'][5]['TIPO'] == 'selección unica' ? columF[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '6' && e['TEXTO'] == columF[n]})[0] : ""  :columF[n] != undefined ? columF[n].length > 0 ? columF[n] : "" : "",
                                                    7: this.questions[i]['TABLES'][6] == undefined ? "" : this.questions[i]['TABLES'][6]['TIPO'] == 'selección unica' ? columG[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '7' && e['TEXTO'] == columG[n]})[0] : ""  :columG[n] != undefined ? columG[n].length > 0 ? columG[n] : "" : "",
                                                    8: this.questions[i]['TABLES'][7] == undefined ? "" : this.questions[i]['TABLES'][7]['TIPO'] == 'selección unica' ? columH[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '8' && e['TEXTO'] == columH[n]})[0] : ""  :columH[n] != undefined ? columH[n].length > 0 ? columH[n] : "" : "",
                                                    9: this.questions[i]['TABLES'][8] == undefined ? "" : this.questions[i]['TABLES'][8]['TIPO'] == 'selección unica' ? columI[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '9' && e['TEXTO'] == columI[n]})[0] : ""  :columI[n] != undefined ? columI[n].length > 0 ? columI[n] : "" : "",
                                                    10: this.questions[i]['TABLES'][9] == undefined ? "" : this.questions[i]['TABLES'][9]['TIPO'] == 'selección unica' ? columJ[n] != undefined ?  this.questions[i]['RESPUESTAS'].filter((e)=>{ return e['COLUMNA'] == '10' && e['TEXTO'] == columJ[n]})[0] : ""  :columJ[n] != undefined ? columJ[n].length > 0 ? columJ[n] : "" : "",
                                                }
                                            )
                                        
                                        }

                                    }
                                }
                        }
                        catch(error){
                            console.log(error)
                            console.log('in index '+ i)
                        }
                    }, 500);
                }
                this.isLoad=true
                this.$store.dispatch('clearLoading')
            } catch (error) {
                console.log(error)
                this.isLoad=true
                this.$store.dispatch('clearLoading')
            }
        },
        validAnswers(){
            this.error = false
            this.errorMessage = "Verifica las preguntas: <br>"
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i]['TIPO_1']== 'abierto fecha' || this.questions[i]['TIPO_1']== 'abierto texto' || this.questions[i]['TIPO_1']== 'abierto numero' || 
                    this.questions[i]['TIPO_2']== 'abierto fecha' || this.questions[i]['TIPO_2']== 'abierto texto' || this.questions[i]['TIPO_2']== 'abierto numero' ||
                    this.questions[i]['TIPO_3']== 'abierto fecha' || this.questions[i]['TIPO_3']== 'abierto texto' || this.questions[i]['TIPO_3']== 'abierto numero' ||
                    this.questions[i]['TIPO_4']== 'abierto fecha' || this.questions[i]['TIPO_4']== 'abierto texto' || this.questions[i]['TIPO_4']== 'abierto numero') {
                    if(this.answers[i]['dato_text'] == "" || this.answers[i]['dato_text'] == null){
                        this.error = true
                        this.errorMessage += "<b>" +this.questions[i]['COD_PREGUNTA'] + "</b> " + this.questions[i]['PREGUNTA'] + "<br>"
                        //console.log(i)
                    }
                }
                if (this.questions[i]['TIPO_1']== 'selección multiple' || this.questions[i]['TIPO_2']== 'selección multiple' || this.questions[i]['TIPO_3']== 'selección multiple' || this.questions[i]['TIPO_4']== 'selección multiple') {
                    var count = 0
                    if(this.answers[i]['A'] == 1) count++
                    if(this.answers[i]['B'] == 1) count++
                    if(this.answers[i]['C'] == 1) count++
                    if(this.answers[i]['D'] == 1) count++
                    if(this.answers[i]['E'] == 1) count++
                    if(this.answers[i]['F'] == 1) count++
                    if(this.answers[i]['G'] == 1) count++
                    if(this.answers[i]['H'] == 1) count++
                    if(this.answers[i]['I'] == 1) count++
                    if(this.answers[i]['J'] == 1) count++
                    if(count == 0){
                        this.error = true
                        this.errorMessage += "<b>" +this.questions[i]['COD_PREGUNTA'] + "</b> " + this.questions[i]['PREGUNTA'] + "<br>"
                        //console.log(i)
                    }
                }
                if (this.questions[i]['TIPO_1']== 'selección unica' || this.questions[i]['TIPO_2']== 'selección unica' || this.questions[i]['TIPO_3']== 'selección unica' || this.questions[i]['TIPO_4']== 'selección unica') {
                    if(this.answers[i]['dato_unico']['TEXTO'] == undefined){
                        this.error = true
                        this.errorMessage += "<b>" +this.questions[i]['COD_PREGUNTA'] + "</b> " + this.questions[i]['PREGUNTA'] + "<br>"
                        //console.log(i)
                    }
                    else{
                        this.answers[i]['A'] = 0
                        this.answers[i]['B'] = 0 
                        this.answers[i]['C'] = 0
                        this.answers[i]['D'] = 0
                        this.answers[i]['E'] = 0
                        this.answers[i]['F'] = 0
                        this.answers[i]['G'] = 0
                        this.answers[i]['H'] = 0
                        this.answers[i]['I'] = 0
                        this.answers[i]['J'] = 0
                        this.answers[i][this.answers[i]['dato_unico']['COLUMNA']] = 1
                        //this.answers[i]['dato_unico'] = ""
                        
                    }
                }
                if (this.questions[i]['TIPO_1']== 'año editable' || this.questions[i]['TIPO_2']== 'año editable' || this.questions[i]['TIPO_3']== 'año editable' || this.questions[i]['TIPO_4']== 'año editable') {
                    if(this.answers[i]['anio'] == "" || this.answers[i]['anio'] == null){
                        this.error = true
                        this.errorMessage += "<b>" +this.questions[i]['COD_PREGUNTA'] + "</b> " + this.questions[i]['PREGUNTA'] + "<br>"
                        //console.log(i)
                    }
                }
                if (this.questions[i]['TIPO_1']== 'tabla' || this.questions[i]['TIPO_2']== 'tabla' || this.questions[i]['TIPO_3']== 'tabla' || this.questions[i]['TIPO_4']== 'tabla') {
                    this.answers[i]['A'] = ""
                    this.answers[i]['B'] = ""
                    this.answers[i]['C'] = ""
                    this.answers[i]['D'] = ""
                    this.answers[i]['E'] = ""
                    this.answers[i]['F'] = ""
                    this.answers[i]['G'] = ""
                    this.answers[i]['H'] = ""
                    this.answers[i]['I'] = ""
                    this.answers[i]['J'] = ""
                    for (let j = 0; j < this.questions[i]['TANSWERS'].length; j++) {
                        
                        for (let k = 0; k <  this.questions[i]['TABLES'].length; k++) {

                            if (this.questions[i]['TABLES'][k]['TIPO'] == 'abierto numero' || this.questions[i]['TABLES'][k]['TIPO'] == 'abierto texto' || this.questions[i]['TABLES'][k]['TIPO'] == 'abierto fecha') {
                                if(this.questions[i]['TANSWERS'][j][k+1] == "" || this.questions[i]['TANSWERS'][j][k+1] == null){
                                    this.error = true
                                    this.errorMessage += "<b>" +this.questions[i]['COD_PREGUNTA'] + "</b> " + this.questions[i]['PREGUNTA'] + "<br>"
                                    //console.log(i)
                                }
                                else{
                                    let alphabet = String.fromCharCode(64 + k+1);
                                    this.answers[i][alphabet] += this.questions[i]['TANSWERS'][j][k+1] + ';'
                                }

                            }
                            if (this.questions[i]['TABLES'][k]['TIPO']== 'selección unica') {
                                if(this.questions[i]['TANSWERS'][j][k+1] == undefined){
                                    this.error = true
                                    this.errorMessage += "<b>" +this.questions[i]['COD_PREGUNTA'] + "</b> " + this.questions[i]['PREGUNTA'] + "<br>"
                                    //console.log(i)
                                }
                                else{
                                    let alphabet = String.fromCharCode(64 + k+1);
                                    this.answers[i][alphabet] += this.questions[i]['TANSWERS'][j][k+1]['TEXTO'] + ';'
                                }


                            }
                        }
                        
                    }
                }
            }
            if(!this.error){
                this.saveAnswers()
            }
            else{
                this.$refs['error'].show()
            }
            
        },
        async saveAnswers(){
            var answerS =  JSON.stringify(this.answers)
            var answ = JSON.parse(answerS)
            //console.log(answ)
            for (let i = 0; i < answ.length; i++) {
                delete answ[i].dato_unico
            }
            this.$store.dispatch('setLoading')
            try{
                var val2 = await window.eel.saveAnswers(JSON.stringify(answ))(val2)
                this.makeToast('success', this.$t('descriptive.data_save'))

                this.$store.dispatch('clearLoading')
            }
            catch(error){
                this.$store.dispatch('clearLoading')
                console.log('Error')
            }
        },
        makeToast(variant = null, message) {
            this.$bvToast.toast( message, {
                title: message,
                variant: variant,
                solid: true,
                autoHideDelay: 2000,
                toaster: 'b-toaster-bottom-right'
            })
        },
        validNumber(event){
            
            if(event.charCode === 0 || this.regN.test(String.fromCharCode(event.charCode))){
                //console.log(event.charCode)
                return true
            } else {
                event.preventDefault();
            }
        },
    }
}
</script>

<style lang="sass" scoped>
.questions
    width: 90%
    margin: 0 auto
.help
    color: #007bff
    cursor: pointer
.cols-c
    display: flex
    align-items: center
.col-c
    margin: 0 5px
    min-width: 213px
    .inline
        display: grid
        grid-template-columns: 8fr 4fr
        gap: 5px
        align-items: center
    .inline2
        display: grid
        grid-template-columns: 4fr 8fr
        gap: 5px
        align-items: center

    .item-h
        flex: 1 1 20%
        text-align: center
        padding: 5px
        border-bottom: solid 1px #007bff
        border-top: solid 1px #007bff
        border-left: solid 1px #007bff
        &:last-child
            border-right: solid 1px #007bff 

    .item
        flex: 1 1 20%
        text-align: center
        padding: 5px
        border-bottom: solid 1px #007bff
        border-top: solid 1px #007bff
        border-left: solid 1px #007bff
        &:last-child
            border-right: solid 1px #007bff  
</style>

<style scoped>
.header, .body{
        display: flex;
        gap: 5px;
        width: 100%;
        background: #007bff;
        padding: ((24px/2) * 1.5) 5px;
        align-items: center;
        justify-content: center;
        color: #fff
}
</style>