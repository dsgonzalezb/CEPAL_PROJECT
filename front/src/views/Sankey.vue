<template>
  <div>
    <div class="title">
        <h2><b>{{$t('graphics.sankeys.title')}}</b></h2>
    </div>
    <br>
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
    <div class="contain-pro">
        <div class="list">
            <div v-for="(node,i) in nodes" :key="i" class="item">
                <div class="icon" :style="'background-color: '+ listColors[i]"></div> <div>{{node['ETIQUETA']}}  - {{node['Leyenda']}} </div>
                <br>
                <br>
            </div>
        </div>
        <div class="wrap">
            <div id="chart"></div>
        </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      nodes:[],
      links:[],
      year: null,
      idDes: null,
      formulaAlias:[],
      ansd: [],
      ques: [],
      figures: [],
      variables: [],
      references: [],
      constants_calculated: {
          table: 'REG_TAB',
          sum: 'SUMATORIA',
          simple: 'CALC_SIMPLE',
          compose: 'CALC_COMPUESTO',
          equal:  'IGUAL'
      },
      loaded: false,
      listColors: [],
      load: false
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
    this.loadSakey()   
  },
  methods: {
    async loadSakey(){
      this.$store.dispatch('setLoading')
      try{
        var val = await window.eel.getSankeyNodes()(val)
        this.nodes = JSON.parse(val)

        setTimeout( async ()=>{ 
          try{
            var val2 = await window.eel.getSankeyLinks()(val2)
            this.links = JSON.parse(val2)

            var margin = {top: 1, right: 1, bottom: 6, left: 1},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

            var formatNumber = d3.format(",.2f"),
                format = function(d) { return formatNumber(d) + " Ton/año"; },
                color = d3.scale.category20();

            var svg = d3.select("#chart").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var sankey = d3.sankey()
                .nodeWidth(15)
                .nodePadding(10)
                .size([width, height]);

            var path = sankey.link();

            let nod = []
            let lin = []

            for (let i = 0; i < this.nodes.length; i++) {
              nod.push({
                "name" : this.nodes[i]['ETIQUETA']
              })
              
            }

            for (let i = 0; i < this.links.length; i++) {
              let valueCal =  this.getCalculated(this.formulaAlias.filter(e => { return e.id_cal == this.links[i]['ID_FORMULA'] } )[0])
              lin.push({
                "source" : this.links[i]['NODO_O'],
                "target" : this.links[i]['NODOD'],
                "value": isNaN(valueCal) ? 0  : valueCal == 0 ? 1 : valueCal
              })
              
            }

            var my_sankey = {"nodes": nod,
            "links" : lin};
            console.log(my_sankey)
            sankey
                .nodes(my_sankey.nodes)
                .links(my_sankey.links)
                .layout(32);

            var link = svg.append("g").selectAll(".link")
                .data(my_sankey.links)
              .enter().append("path")
                .attr("class", "link")
                .attr("d", path)
                .style("stroke-width", function(d) { return Math.max(1, d.dy); })
                .sort(function(a, b) { return b.dy - a.dy; });

            link.append("title")
                .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

            var node = svg.append("g").selectAll(".node")
                .data(my_sankey.nodes)
              .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
              .call(d3.behavior.drag()
                .origin(function(d) { return d; })
                .on("dragstart", function() { this.parentNode.appendChild(this); })
                .on("drag", dragmove));
            var self = this
            node.append("rect")
                .attr("height", function(d) { return d.dy; })
                .attr("width", sankey.nodeWidth())
                .style("fill", function(d) {
                    self.listColors.push(color(d.name.replace(/ .*/, "")))
                    return d.color = color(d.name.replace(/ .*/, "")); 
                })
                .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
              .append("title")
                .text(function(d) { return d.name + "\n" + format(d.value); });
            
            node.append("text")
                .attr("x", -6)
                .attr("y", function(d) { return d.dy / 2; })
                .attr("dy", ".35em")
                .attr("text-anchor", "end")
                .attr("transform", null)
                .text(function(d) { return d.name; })
              .filter(function(d) { return d.x < width / 2; })
                .attr("x", 6 + sankey.nodeWidth())
                .attr("text-anchor", "start");

            function dragmove(d) {
              d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
              sankey.relayout();
              link.attr("d", path);
            }



            this.load = true

          }
          catch(error){
              console.log(error)
              console.log('in index')
          }
        }, 500);
        this.$store.dispatch('clearLoading')
      }
      catch(error){
          console.log(error)
          console.log('in index ')
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
            return e.id_cal == parseInt(alias.split("!")[1])
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
                console.log(JSON.stringify(formula) )
                for (let i = 0; i < idOList.length; i++) {
                    let idO = idOList[i].split("&")[1]
                    let answer = this.getAnswerValues(parseInt(idO))
                    
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
        if(formula.tipo == this.constants_calculated.sum){
                let idOList = formula['CPO'].split(";")
                let values =[]
                
                for (let i = 0; i < idOList.length; i++) {
                    var CPOTypeSum = "NA"
                    if(idOList[i].indexOf("&") != -1)  CPOTypeSum = "ID"
                    if(idOList[i].indexOf("!") != -1)  CPOTypeSum = "ALIAS"
                    if(CPOTypeSum == "ID") {
                        let idO = idOList[i].split("&")[1]
                        let answer = this.getAnswerValues(parseInt(idO))
                        parseFloat('____________________SUM')
                        if(answer != undefined) {
                            if(answer['dato_text'] != null && answer['dato_text'] != undefined && answer['dato_text'] != '' ){
                                console.log(parseFloat(answer['dato_text']))
                                values.push(parseFloat(answer['dato_text']))
                            }
                            else if( answer['dato_calc1'] != null && answer['dato_calc1'] != undefined && answer['dato_calc1'] != ''){
                                values.push(parseFloat(answer['dato_calc1']))
                            }
                            else{
                                values.push(0)
                            }
                        }
                    }
                    else if(CPOTypeSum == "ALIAS") {
                        let formulaX = this.getAliasFormula(idOList[i])
                        if(formulaX != undefined)
                            values.push(this.getCalculated(formulaX))
                    }
                    
                }
                let sum = 0
                for (let i = 0; i < values.length; i++) {
                    sum += values[i]
                    
                }
                console.log(sum)
                return sum
            }

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
        console.log('______________________________________________________________________')
        console.log('CPD: '+formula['CPD'])
        console.log(val1 + formula['OP'] + val2 + "=" + operators[formula['OP']](val1,val2))
        console.log('CPO: '+formula['CPO']+' - '+CPOType)
        console.log('CPO2: '+formula['CPO2']+' - '+CPO2Type)
        console.log('ALIAS: '+formula['alias'])
        console.log(JSON.stringify(formula))
        console.log(formula['OP'])
        return operators[formula['OP']](val1,val2)

    },
  }
}
</script>

<style lang="sass" scoped>
h2 , h3
    text-align: center
.contain-pro
    display: grid
    grid-template-columns: 20% 79%
    gap: 15px
.list
    padding: 5px
    max-height: 550px
    overflow-y: auto
    .item
        display: grid
        grid-template-columns: 10% 89%
        gap: 5px
        font-size: 80%
        align-items: center
.icon
    border-radius: 3px
    width: 100%
    height: 100%
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