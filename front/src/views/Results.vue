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
                        <div class="lv c3">
                            {{$t('graphics.points.bajo')}}
                        </div>
                        <div class="lv c2">
                            {{$t('graphics.points.medio')}}
                        </div>
                        <div class="lv c1">
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
        <div class="boards">
            <point-board v-for="(board, i) in boards" :key="i" :board="board" />
        </div>
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
            value: 0
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
    .c1
        background-color: #00af50  
    .c2
        background-color: #8ac1c8
    .c3
        background-color: #bebebe
</style>