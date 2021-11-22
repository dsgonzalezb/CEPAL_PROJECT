<template>
  <div class="container">
    <div class="wrap">
      <div id="chart"></div>
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

            var formatNumber = d3.format(",.0f"),
                format = function(d) { return formatNumber(d) + " TWh"; },
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
              let valueCal =  this.getCalculated(this.links[i]['ID_FORMULA'])
              lin.push({
                "source" : this.links[i]['NODO_O'],
                "target" : this.links[i]['NODOD'],
                "value": isNaN(valueCal) ? 1 : valueCal
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

            node.append("rect")
                .attr("height", function(d) { return d.dy; })
                .attr("width", sankey.nodeWidth())
                .style("fill", function(d) { return d.color = color(d.name.replace(/ .*/, "")); })
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

<style scoped>


</style>