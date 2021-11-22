<template>
    <div class="card-board" :class="{'card-board-a' : type == 'A', 'card-board-b' : type == 'B', 'card-board-c' : type == 'C'}" v-show="loaded">
        <span class="help" v-show="help!= 'NA'" v-b-tooltip.hover :title="help" ><i class="fas fa-question-circle"></i></span>
        <div class="board-a" v-if="type == 'A'">
            <div class="column-1">
                <div class="title">
                    <div class="text" v-if="title1 != 'NA'">
                        {{title1}}
                    </div>
                    <div class="icon" v-if="icon1 != 'NA'">
                        <i :class="icon1"></i>
                    </div>
                </div>
            </div>
            <div class="column-2">
                <div class="title">
                    <div class="icon" v-if="icon2 != 'NA'">
                        <i :class="icon2"></i>
                    </div>
                    <div class="text" v-if="title2 != 'NA'">
                        {{title2}}
                    </div>
                </div>
                <div></div>
                <div></div>
                <div class="title">
                    <div class="icon" v-if="icon3 != 'NA'">
                        <i :class="icon3"></i>
                    </div>
                    <div class="text" v-if="title3 != 'NA'">
                        {{title3}}
                    </div>
                </div>
            </div>
            <div class="column-2">
                <div>
                    <figure-card :figure="figuresCreated[0]" />
                    <figure-card :figure="figuresCreated[1]"/>
                </div>
                <progress-ebar :bar="bar1Created" :color="color1"/>
                <progress-ebar :bar="bar2Created" :color="color2" />
                <div>
                    <figure-card :figure="figuresCreated[2]" />
                    <figure-card :figure="figuresCreated[3]"/>
                </div>
            </div>
            
        </div>

        <div class="board-a" v-if="type == 'B'">
            <div class="column-1">
                <div class="title">
                    <div class="text" v-if="title1 != 'NA'">
                        {{title1}}
                    </div>
                    <div class="icon" v-if="icon1 != 'NA'">
                        <i :class="icon1"></i>
                    </div>
                </div>
            </div>
            
            <div class="column-1">
                <figure-card :figure="figuresCreated[0]"  />
                <progress-ebar orientation="H" :bar="bar1Created" :color="color1" />
                <progress-ebar orientation="H" :bar="bar2Created" :color="color2"/>
                <figure-card  :figure="figuresCreated[1]"/>
            </div>
            
        </div>


        <div class="board-a" v-if="type == 'C'">
            <div class="column-1">
                <div class="title">
                    <div class="text" v-if="title1 != 'NA'">
                        {{title1}}
                    </div>
                    <div class="icon" v-if="icon1 != 'NA'">
                        <i :class="icon1"></i>
                    </div>
                </div>
            </div>
            <div class="column-3">
                <figure-card v-for="(fig, i) in figuresCreated" :key="i" :figure="fig" />
            </div>
            
            <div class="column-1">
                <progress-ebar orientation="H" size="S" :bar="bar1Created" :color="color1" />
            </div>
            
        </div>
        <br>
        <br v-if="note != 'NA'">
        <div class="note" v-if="note != 'NA'">
            {{note}}
        </div>
    </div>
</template>

<script>
import FigureCard from './FigureCard.vue'
import ProgressBar from './ProgressBar.vue'
export default {
    components: {
        'figure-card' : FigureCard,
        'progress-ebar': ProgressBar
    },
    props:{
        type:{
            type: String,
            default: 'A'
        },
        title1:{
            type: String,
            default: 'Titulo'
        },
        icon1:{
            type: String,
            default: 'fas fa-cog'
        },
        title2:{
            type: String,
            default: 'Titulo'
        },
        icon2:{
            type: String,
            default: 'fas fa-cog'
        },
        title3:{
            type: String,
            default: 'Titulo'
        },
        color1:{
            type: String,
            default: '#0000FF'
        },
        color2:{
            type: String,
            default: '#0000FF'
        },
        bart1:{
            type: Number,
            default: 1
        },
        bar1:{
            type: Number,
            default: 1
        },
        bart2:{
            type: Number,
            default: 1
        },
        bar2:{
            type: Number,
            default: 1
        },
        id_board:{
            type: Number,
            default: 1
        },
        help:{
            type: String,
            default: 'NA'
        },
        note:{
            type: String,
            default: 'NA'
        },
    },
    data(){
        return{
            year: null,
            idDes: null,
            formulaAlias:[],
            ansd: [],
            ques: [],
            figures: [],
            variables: [],
            references: [],
            figuresCreated: [],
            bar1Created: 100,
            bar2Created: 100,
            constants_calculated: {
                table: 'REG_TAB',
                sum: 'SUMATORIA',
                simple: 'CALC_SIMPLE',
                compose: 'CALC_COMPUESTO',
                equal:  'IGUAL'
            },
            loaded: false
        }
    },
    async mounted(){
        this.year =  localStorage.getItem('year');
        this.idDes =  localStorage.getItem('id_territorio');
        this.$store.dispatch('setLoading')
        try{
            var val5 = await window.eel.getQuestion()(val5)
            this.ques = JSON.parse(val5)
            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.$store.dispatch('clearLoading')
        }

        this.$store.dispatch('setLoading')
        try{
            var val6 = await window.eel.getAnswerUserD( this.year, this.idDes)(val6)
            this.ansd = JSON.parse(val6)
            if(this.ansd == null) this.ansd = []
            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.$store.dispatch('clearLoading')
        }

        this.$store.dispatch('setLoading')
        try{
            var val7 = await window.eel.getVariables()(val7)
            this.variables = JSON.parse(val7)
            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.isLoad=true
            this.$store.dispatch('clearLoading')
        }

        this.$store.dispatch('setLoading')
        try{
            var val2 = await window.eel.getFormulaByAlias()(val2)
            this.formulaAlias = JSON.parse(val2)
            this.$store.dispatch('clearLoading')
        }
        catch(error){
            console.log(error)
            this.$store.dispatch('clearLoading')
        }
        

        this.$store.dispatch('setLoading')
        try{
            var val10 = await window.eel.getReferences(this.year, this.idDes)(val10)
            this.references = JSON.parse(val10)
            this.$store.dispatch('clearLoading')
        }
        catch(error){
            console.log(error)
            this.$store.dispatch('clearLoading')
        }
        this.getFigures()
        this.getBars()
        this.loaded = true
    },
    methods:{
        async getBars(){
            let tempB1 = []
            let tempBT1 = []
            let tempB2 = []
            let tempBT2 = []
            if(this.bar1 != 'NA')
                setTimeout( async ()=>{ 
                    try{
                        var val2 = await window.eel.getFormulaByIdCal(this.bar1)(val2)
                        if(val2 != undefined)
                            if(val2.length>0){
                                //if(i == 7){ console.log(JSON.parse(val2))}
                                tempB1 = JSON.parse(val2)
                                setTimeout( async ()=>{ 
                                    try{
                                        var val2 = await window.eel.getFormulaByIdCal(this.bart1)(val2)
                                        if(val2 != undefined)
                                            if(val2.length>0){
                                                //if(i == 7){ console.log(JSON.parse(val2))}
                                                tempBT1 = JSON.parse(val2)
                                                this.bar1Created = Math.floor(((this.getCalculated(tempB1[0]) * 100 ) / this.getCalculated(tempBT1[0])))
                                            }
                                            else
                                                this.bar1Created = 0
                                        else
                                            this.bar1Created = 0
                                    }
                                    catch(error){
                                        console.log(error)
                                        console.log('in index ')
                                        this.bar1Created = 0
                                    }
                                }, 500);
                                
                            }
                            else
                                this.bar1Created = 0
                        else
                            this.bar1Created = 0
                    }
                    catch(error){
                        console.log(error)
                        console.log('in index ')
                        this.bar1Created = 0
                    }
                }, 500);
            else{
                this.bar1Created = 0
            }

            if(this.bar2 != 'NA')
                setTimeout( async ()=>{ 
                    try{
                        var val2 = await window.eel.getFormulaByIdCal(this.bar2)(val2)
                        if(val2 != undefined)
                            if(val2.length>0){
                                //if(i == 7){ console.log(JSON.parse(val2))}
                                tempB2 = JSON.parse(val2)
                                setTimeout( async ()=>{ 
                                    try{
                                        var val2 = await window.eel.getFormulaByIdCal(this.bart2)(val2)
                                        if(val2 != undefined)
                                            if(val2.length>0){
                                                //if(i == 7){ console.log(JSON.parse(val2))}
                                                tempBT2 = JSON.parse(val2)
                                                this.bar2Created = Math.floor(((this.getCalculated(tempB2[0]) * 100 ) / this.getCalculated(tempBT2[0])))
                                            }
                                            else
                                                this.bar2Created = 0
                                        else
                                           this.bar2Created = 0
                                    }
                                    catch(error){
                                        console.log(error)
                                        console.log('in index ')
                                        this.bar2Created = 0
                                    }
                                }, 500);
                                
                            }
                            else
                                this.bar2Created = 0
                        else
                            this.bar2Created = 0
                    }
                    catch(error){
                        console.log(error)
                        console.log('in index ')
                        this.bar2Created = 0
                    }
                }, 500);
            else{
                this.bar2Created = 0
            }
        },
        async getFigures(){
            this.$store.dispatch('setLoading')
            try{
                var val = await window.eel.getFigure(this.id_board)(val)
                this.figures = JSON.parse(val)
                for (let i = 0; i < this.figures.length; i++) {

                    this.figuresCreated.push(
                        {
                            icon: this.figures[i]['ICONO'],
                            data1: this.figures[i]['CIFRA_A'] == 'NA' ? this.figures[i]['CIFRA_A'] : 0,
                            data2: this.figures[i]['CIFRA_B'] == 'NA' ? this.figures[i]['CIFRA_B'] : 0,
                            unit1: this.figures[i]['UNIDAD_A'],
                            unit2: this.figures[i]['UNIDAD_B'],
                            help:  this.figures[i]['AYUDA'],
                            color: this.figures[i]['COLOR'],
                            bar: this.figures[i]['BARRA'] == 'NA' ? this.figures[i]['BARRA'] : 0,
                            etiq1: this.figures[i]['ETIQUETA_A'],
                            etiq2: this.figures[i]['ETIQUETA_B'],
                        }
                    )   

                    if(this.figures[i]['CIFRA_A'] != 'NA')
                        setTimeout( async ()=>{ 
                            try{
                                var val2 = await window.eel.getFormulaByIdCal(this.figures[i]['CIFRA_A'])(val2)
                                if(val2 != undefined)
                                    if(val2.length>0){
                                        //if(i == 7){ console.log(JSON.parse(val2))}
                                        this.figures[i]['FORMULA_A'] = JSON.parse(val2)
                                        console.log('________________')
                                        console.log('BOARD :' + this.id_board)
                                        console.log('CIFRA_A :' + JSON.stringify(this.figures[i]['CIFRA_A']))
                                        console.log('FORMULA_A :' + JSON.stringify(this.figures[i]['FORMULA_A']))
                                        this.figuresCreated[i].data1 = this.getCalculated(this.figures[i]['FORMULA_A'][0])
                                    }
                                    else
                                        this.figures[i]['FORMULA_A'] = []
                                else
                                    this.figures[i]['FORMULA_A'] = []
                            }
                            catch(error){
                                console.log(error)
                                console.log('in index '+ i)
                                this.figures[i]['FORMULA_A'] = []
                            }
                        }, 500);
                    else
                        this.figures[i]['FORMULA_A'] = []

                    if(this.figures[i]['CIFRA_B'] != 'NA')
                        setTimeout( async ()=>{ 
                            try{
                                var val2 = await window.eel.getFormulaByIdCal(this.figures[i]['CIFRA_B'])(val2)
                                if(val2 != undefined)
                                    if(val2.length>0){
                                        //if(i == 7){ console.log(JSON.parse(val2))}
                                        this.figures[i]['FORMULA_B'] = JSON.parse(val2)
                                        this.figuresCreated[i].data2 = this.getCalculated(this.figures[i]['FORMULA_B'][0])
                                    }
                                    else
                                        this.figures[i]['FORMULA_B'] = []
                                else
                                    this.figures[i]['FORMULA_B'] = []
                            }
                            catch(error){
                                console.log(error)
                                console.log('in index '+ i)
                                this.figures[i]['FORMULA_B'] = []
                            }
                        }, 500);
                    else
                        this.figures[i]['FORMULA_B'] = []

                    if(this.figures[i]['BARRA'] != 'NA')
                        setTimeout( async ()=>{ 
                            try{
                                var val2 = await window.eel.getFormulaByIdCal(this.figures[i]['BARRA'])(val2)
                                if(val2 != undefined)
                                    if(val2.length>0){
                                        //if(i == 7){ console.log(JSON.parse(val2))}
                                        this.figures[i]['BARRA_F'] = JSON.parse(val2)
                                        setTimeout( async ()=>{ 
                                            try{
                                                var val2 = await window.eel.getFormulaByIdCal(this.figures[i]['BARRAT'])(val2)
                                                if(val2 != undefined)
                                                    if(val2.length>0){
                                                        //if(i == 7){ console.log(JSON.parse(val2))}
                                                        this.figures[i]['BARRAT_F'] = JSON.parse(val2)
                                                        this.figuresCreated[i].bar = Math.floor(((this.getCalculated(this.figures[i]['BARRA_F'][0]) * 100 ) / this.getCalculated(this.figures[i]['BARRAT_F'][0])))
                                                    }
                                                    else
                                                        this.figures[i]['BARRAT_F'] = []
                                                else
                                                    this.figures[i]['BARRAT_F'] = []
                                            }
                                            catch(error){
                                                console.log(error)
                                                console.log('in index '+ i)
                                                this.figures[i]['BARRAT_F'] = []
                                            }
                                        }, 500);
                                       
                                    }
                                    else
                                        this.figures[i]['BARRA_F'] = []
                                else
                                    this.figures[i]['BARRA_F'] = []
                            }
                            catch(error){
                                console.log(error)
                                console.log('in index '+ i)
                                this.figures[i]['BARRA_F'] = []
                            }
                        }, 500);
                    else{
                        this.figures[i]['BARRA_F'] = []
                        this.figures[i]['BARRAT_F'] = []
                    }
                                     
                    
                }
                this.$store.dispatch('clearLoading')
            }
            catch(error){
                console.log(error)
                this.$store.dispatch('clearLoading')
            }
        },
        getAnswerValues(id){
            let ans = this.ansd.filter(e=>{ return e.id_pregunta == parseInt(id) })[0]
            /* for (let i = 0; i < this.ansd.length; i++) {
                if(this.ansd[i].id_pregunta == parseInt(id)) ans = this.ansd[i]
            } */
            return ans
            
        },
        getQuestions(id){
            let ques = this.ques.filter(e=>{ return e['ID_PREGUNTA'] == parseInt(id) })[0]
            /* for (let i = 0; i < this.ques.length; i++) {
                if(this.ques[i]['ID_PREGUNTA'] == parseInt(id)) ques = this.ques[i]
            } */
            return ques
        },
        getAliasFormula(alias){
            return this.formulaAlias.filter(e=>{
                return e.alias == alias
            })[0]
        },
        getRefValue(ref){
            return this.references.filter(e=>{
                return e['ID_REFERENCIA'] == ref
            })[0]
        },
        getCalculated(formula){
            if(formula == undefined) return 0
            if(formula.length<1){
                return 0
            }
            else{
                //console.log(formula.tipo)
                if(formula.tipo == this.constants_calculated.sum){
                    let idOList = formula['CPO'].split(";")
                    let values =[]
                    console.log('________________')
                    for (let i = 0; i < idOList.length; i++) {
                        let idO = idOList[i].split("&")[1]
                        let answer = this.getAnswerValues(parseInt(idO))
                        console.log('answer with id'+ idO +': '+ JSON.stringify(answer) )
                        if(answer != undefined) {
                            if(answer['dato_text'] != null && answer['dato_text'] != undefined && answer['dato_text'] != '' ){
                                values.push(parseFloat(answer['dato_text']))
                                console.log('Val text '+ i + ': '+ parseFloat(answer['dato_text']))
                            }
                            else if( answer['dato_calc1'] != null && answer['dato_calc1'] != undefined && answer['dato_calc1'] != ''){
                                values.push(parseFloat(answer['dato_calc1']))
                                console.log('Val calc '+ i + ': '+ answer['dato_calc1'] + ',  parsed: '+ parseFloat(answer['dato_calc1']))
                            }
                            else{
                                values.push(0)
                                console.log('Val null '+ i + ': '+ 0)
                            }
                        }
                        
                    }
                    let sum = values.reduce((a, b) => a + b, 0)
                    console.log(sum)
                    return sum
                }
                if(formula.tipo == this.constants_calculated.simple){
                    let value = this.simpleCalculated(formula)
                    console.log(value)
                    return value
                }
                if(formula.tipo == this.constants_calculated.compose){
                    let value = this.simpleCalculated(formula)
                    console.log(value)
                    return value
                }
                if(formula.tipo == this.constants_calculated.equal){
                    let value = this.simpleCalculated(formula)
                    console.log(value)
                    return value
                }
            }
        },
        simpleCalculated(formula){
            var CPOType = "NA"
            var CPO2Type = "NA"
            //console.log(formula)
            if(formula['CPO'].indexOf("&") != -1)  CPOType = "ID"
            if(formula['CPO'].indexOf("#") != -1)  CPOType = "VAR"
            if(formula['CPO'].indexOf("!") != -1)  CPOType = "ALIAS"
            if(formula['CPO'].indexOf("[") != -1)  CPOType = "CONST"
            if(formula['CPO'].indexOf("?") != -1)  CPOType = "REF"

            if(formula['CPO2'].indexOf("&") != -1)  CPO2Type = "ID"
            if(formula['CPO2'].indexOf("#") != -1)  CPO2Type = "VAR"
            if(formula['CPO2'].indexOf("!") != -1)  CPO2Type = "ALIAS"
            if(formula['CPO2'].indexOf("[") != -1)  CPO2Type = "CONST"
            if(formula['CPO2'].indexOf("?") != -1)  CPO2Type = "REF"

            let val1, val2
            var operators = {
                '+': function(a, b) { return a + b },
                '-': function(a, b) { return a - b },
                '/': function(a, b) { return a / b },
                '*': function(a, b) { return a * b },
                'IGUAL': function(a, b) { 
                    b = 0
                    return a + b
                }
            };

            //get Val1 CPO
            
            if(CPOType == "ID") {
                let idO = formula['CPO'].split("&")[1]
                let answer = this.getAnswerValues(parseInt(idO))
                let questionType1 = this.getQuestions(parseInt(idO))
               /*  console.log(answer)
                console.log(questionType1) */
                if(questionType1 != undefined){
                    if(questionType1['TIPO_1'] == 'abierto numero'){
                        if(answer != undefined) {
                            if(answer['dato_text'] != null && answer['dato_text'] != undefined && answer['dato_text'] != '' ){
                                val1 = parseFloat(answer['dato_text'])
                            }
                            else{
                                val1 = 0
                            }
                        }
                    }
                    else if(questionType1['TIPO_1'] == 'calculado'){
                        if(answer != undefined) {
                            if(answer['dato_calc1'] != null && answer['dato_calc1'] != undefined && answer['dato_calc1'] != '' ){
                                val1 = parseFloat(answer['dato_calc1'])
                            }
                            else{
                                val1 = 0
                            }
                        }
                    }
                }
            }
            else if(CPOType == "VAR") {
                let varO = this.variables.filter(e=>{return e['NOMBRE'] == formula['CPO']})[0]
                if(varO != undefined) {
                    val1 = varO['VALOR']
                }
                else{
                   val1 = varO['VALOR']
                }   
            }
            else if(CPOType == "ALIAS") {
                let formulaX = this.getAliasFormula(formula['CPO'])
                if(formulaX != undefined)
                    val1 = this.getCalculated(formulaX)
            }
            else if(CPOType == "CONST") {
                let idO = formula['CPO'].split("[")[1]
                let idO3 = idO.split("]")[0]
                val1 = parseFloat(idO3.replace(",","."))
            }
            else if(CPOType == "REF"){
                let idO = formula['CPO'].split("?")[1]
                let valu = this.getRefValue(idO)
                if (valu != undefined){
                    val1 = parseFloat(valu['DATA'])
                }
            }

            //get Val2 CPO2

            if(CPO2Type == "ID") {
                let idO2 = formula['CPO2'].split("&")[1]
                let answer = this.getAnswerValues(parseInt(idO2))
                let questionType1 = this.getQuestions(parseInt(idO2))
                /* console.log(answer)
                console.log(questionType1) */
                if(questionType1 != undefined){
                    if(questionType1['TIPO_1'] == 'abierto numero'){
                        if(answer != undefined) {
                            if(answer['dato_text'] != null && answer['dato_text'] != undefined && answer['dato_text'] != '' ){
                                val2 = parseFloat(answer['dato_text'])
                            }
                            else{
                                val2 = 0
                            }
                        }
                    }
                    else if(questionType1['TIPO_1'] == 'calculado'){
                        if(answer != undefined) {
                            if(answer['dato_calc1'] != null && answer['dato_calc1'] != undefined && answer['dato_calc1'] != '' ){
                                val2 = parseFloat(answer['dato_calc1'])
                            }
                            else{
                                val2 = 0
                            }
                        }
                    }
                }
            }
            else if(CPO2Type == "VAR") {
                //console.log(formula['CPO2'])
                //console.log(this.variables)
                let varO2 = this.variables.filter(e=>{return e['NOMBRE'] == formula['CPO2']})[0]
                //console.log(varO2)
                if(varO2 != undefined) {
                    val2 = varO2['VALOR']
                }
                else{
                   val2 = varO2['VALOR']
                }
            }
            else if(CPO2Type == "ALIAS") {
                let formulaX = this.getAliasFormula(formula['CPO2'])
                if(formulaX != undefined)
                    val2 = this.getCalculated(formulaX)
            }
            else if(CPO2Type == "CONST") {
                let idO2 = formula['CPO2'].split("[")[1]
                let idO23 = idO2.split("]")[0]
                val2 = parseFloat(idO23.replace(",","."))
            }
            else if(CPO2Type == "REF"){
                let idO2 = formula['CPO2'].split("?")[1]
                let valu = this.getRefValue(idO2)
                //console.log(valu)
                if (valu != undefined){
                    val2 = parseFloat(valu['DATA'])
                }
                
            }
            //console.log(this.questions[i]['COD_PREGUNTA'])
            if( formula.tipo == this.constants_calculated.compose){
                /* console.log('______________________________________________________________________')
                console.log('CPD: '+formula['CPD'])
                console.log(val1 + formula['OP'] + val2 + "=" + operators[formula['OP']](val1,val2))
                console.log('CPO: '+formula['CPO']+' - '+CPOType)
                console.log('CPO2: '+formula['CPO2']+' - '+CPO2Type)
                console.log('ALIAS: '+formula['alias']) */
            }
            console.log(JSON.stringify(formula))
            console.log(formula['OP'])
            return operators[formula['OP']](val1,val2)

        },
    }
}
</script>

<style lang="sass" scoped>
.card-board
    display: inline-grid
    justify-content: space-evenly
    align-items: center
    position: relative
    .help
        cursor: pointer
        position: absolute
        top: 5px
        right: 5px
    .note
        text-align: center
.card-board-a
    margin: 10px
    padding: 10px
    box-shadow: 0 1px 4px rgba(0 ,123 ,255 ,0.9)
    border-radius: 3px
    position: relative
    width: 900px
.card-board-b
    margin: 10px
    padding: 10px
    box-shadow: 0 1px 4px rgba(0 ,123 ,255 ,0.9)
    border-radius: 3px
    position: relative
    max-width: 400px
.card-board-c
    margin: 10px
    padding: 10px
    box-shadow: 0 1px 4px rgba(0 ,123 ,255 ,0.9)
    border-radius: 3px
    position: relative
    width: 900px
.board
    .column-1
        display: grid
        grid-template-columns: 100%
        align-items: center
        justify-items: center
        .title
            text-align: center
        .icon
            font-size: 2rem
    .column-2
        display: grid
        grid-template-columns: 30% 20% 20% 30%
        align-items: center
        justify-items: center
        .title
            text-align: center
        .icon
            font-size: 1.5rem
    .column-3
        display: flex
        flex-wrap: wrap
        align-items: center
        justify-content: center
        .div
            flex: 1 1 30%
            height: 100px
</style>