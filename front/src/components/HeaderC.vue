<template>
    <div>
        <div class="head-b">
            <div class="logos" @click="$router.push({name: 'Home'})">
                <img src="@/assets/cepal.png" alt="CEPAL">
                <img src="@/assets/dnp.jpg" alt="DNP">
                
                
            </div>
            <div class="log">
                <div class="title"><i class="fas fa-infinity"></i> <br> MC-GRM</div>
            </div>
            <div class="buttons">
                <b-button variant="outline-primary" size="lg" @click="$router.push({name: 'Home'})" v-if="$route.name != 'Home'"><i class="fas fa-arrow-circle-left"></i> {{$t('header.home')}}</b-button>
                <b-button variant="outline-primary" size="lg" @click="$router.push({name: 'Settings'})"><i class="fas fa-cog"></i> {{$t('header.settings')}}</b-button>
            </div>
        </div>
        <div class="sub-head">
            <div class="searcher">
                <div class="input-c">
                    <i class="fas fa-search"></i>
                    <vue-bootstrap-typeahead
                        id="geo"
                        :data="data"
                        v-model="search"
                        ref="taSearch"
                        class="grid-j"
                        :serializer="s => s['CODIGO'] + ' - ' + s['DIVI_POL'] + '/' + s['SUB_DIVI_POL']"
                        :placeholder="$t('header.search')"
                        :value="searcht"
                        @hit="searcht = $event"
                    ></vue-bootstrap-typeahead>
                    <!--<b-button variant="outline-primary"><i class="fas fa-search"></i> {{$t('header.start')}}</b-button>-->
                </div>
                <div class="sub-location" v-if="($route.name == 'Des1' || $route.name == 'SPDA' || $route.name == 'Manager' || $route.name == 'REP' || $route.name == 'OtherProfiles' || $route.name == 'Graphs' || $route.name == 'Results'  || $route.name == 'Actual' || $route.name == 'Sankey' || $route.name == 'Proyect' || $route.name == 'Excel' ) && searchData['CODIGO'] != undefined">
                    <span>{{searchData['CODIGO']}} - {{searchData['SUB_DIVI_POL']}} - {{searchData['DIVI_POL']}} - {{searchData['PAIS'].toUpperCase()}}</span> <span class="year-r"> AÑO {{year}}</span>
                </div>
                <div class="sub-location" v-else>
                    {{$t('header.sub_loc')}}
                </div>
            </div>
            
            <div class="category" v-if="descriptive.length>0 && ($route.name != 'Home' && $route.name != 'Settings')">
                <span v-if="descriptive[0]['CATEGORIA'] = 'C1-Alta'" v-b-modal.category>
                    Categoria: C1
                </span>
                <span v-else-if="descriptive[0]['CATEGORIA'] = 'C2-Media'" v-b-modal.category>
                    Categoria: C2
                </span>
                <span v-else-if="descriptive[0]['CATEGORIA'] = 'C3-Baja'" v-b-modal.category>
                    Categoria: C3
                </span>
                <span v-else>
                    Categoria: {{descriptive[0]['CATEGORIA']}}
                </span>
            </div>
        </div>

        <b-modal ref="yearS" id="yearSelection" size="sm" hide-footer :title="$t('header.yearS')">
            <div class="yearC">
                {{$t('header.year_loc')}} <br><br>
                <b-form-select v-model="year" :options="yearOpt"></b-form-select> <br><br>
                <b-button variant="outline-primary" @click="goToDescriptive"><i class="fas fa-check"></i> {{$t('header.select')}}</b-button>
            </div>
            
        </b-modal>

        <b-modal ref="category" id="category" size="m" hide-footer :title="''">
            <div  v-if="descriptive.length>0 ">
                <h2 v-if="descriptive[0]['CATEGORIA'] = 'C1-Alta'" v-b-modal.category>
                    Categoria: C1
                </h2>
                <h2 v-else-if="descriptive[0]['CATEGORIA'] = 'C2-Media'" v-b-modal.category>
                    Categoria: C2
                </h2>
                <h2 v-else-if="descriptive[0]['CATEGORIA'] = 'C3-Baja'" v-b-modal.category>
                    Categoria: C3
                </h2>
                <h2 v-else>
                    Categoria: {{descriptive[0]['CATEGORIA']}}
                </h2>
                <span v-if="descriptive[0]['CATEGORIA'] = 'C1-Alta'">
                    Municipios que incorporan en la gestión de sus residuos, infraestructura y practicas asociadas a la actividad de aprovechamiento en el marco de la prestación del servicio público de aseo, que en conjunto representan cerca del 96% de la base de recicladores de oficio a nivel nacional, lo que permite a partir de sus condiciones socioeconómicas, productivas y a las ventajas comparativas asociadas con dinámicas de aglomeración y regionalización, potencializar la incorporación de materiales a cadenas de valor, dinamizando el mercado local y regional; generando así oportunidades de nuevos encadenamientos productivos y la reducción de la cantidad de residuos dispuestos.
                </span>
                <span v-else-if="descriptive[0]['CATEGORIA'] = 'C2-Media'">
                    Municipios con bajos niveles de aprovechamiento de residuos en el marco de la prestación del servicio público de aseo, los cuales representan en su conjunto el 3,5% de la población recicladora reportada a nivel nacional, condición que restringe las oportunidades de incorporar materiales a cadenas de valor, a pesar de que algunos de los municipios de esta categoría cuentan con potencialidades socioeconómicas y productivas que les permitirían activar encadenamientos productivos asociados con la valorización de materiales.
                </span>
                <span v-else-if="descriptive[0]['CATEGORIA'] = 'C3-Baja'">
                    Municipios cuya gestión de los residuos se orienta principalmente a la disposición final y que por sus condiciones socioeconómicas y productivas cuentan con limitadas alternativas asociadas a la activación de mercados de materiales valorizados, donde las oportunidades en la circularidad de sus residuos se concentran en el fortalecimiento de procesos colaborativos y la implementación de micro y pequeños procesos de valorización.
                    
                </span>
                <span v-else>
                    
                    Estos retos presentados son acumulativos con el aumento de categoría, de tal manera que para que un municipio se ubique en la categoría alta adicional a los retos particulares señalados, ha implementado en parte o todo los retos de las categorías baja y media, lo mismo sucede con la categoría media en relación con la baja; a su vez los contenidos de esta imagen permite que los municipios ubicados en categorías inferiores cuenten con líneas de acción hacia el aumento de su nivel de circularidad.
                </span>

            </div>
            
        </b-modal>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    data(){
        return{
            search: '',
            data: [],
            searcht: {},
            searchData: {},
            year: 2020,
            descriptive: [],
            yearOpt: [
                {
                    value: 2020,
                    text: '2020'
                },
                {
                    value: 2021,
                    text: '2021'
                },
                {
                    value: 2022,
                    text: '2022'
                },
                {
                    value: 2023,
                    text: '2023'
                },
                {
                    value: 2024,
                    text: '2024'
                },
                {
                    value: 2025,
                    text: '2025'
                },
                {
                    value: 2026,
                    text: '2026'
                },
                {
                    value: 2027,
                    text: '2027'
                },
                {
                    value: 2028,
                    text: '2028'
                },
                {
                    value: 2029,
                    text: '2029'
                },
                {
                    value: 2030,
                    text: '2030'
                },
            ]
        }
    },
    watch: {
        search: _.debounce(function(search) { 
            if(search.length > 0){
               this.findData(search.toUpperCase() )
            }
            else{
                this.searcht = {}
            }
            this.$refs['taSearch'].$data.inputValue  = search.toUpperCase() 
        }, 500),
        searcht : function(newValue){
            newValue['ID_TERRITORIO'] != undefined ?  this.getCategory() : null
        },
    },
    methods:{
        findData(search){
            window.eel.find_territory(search)((val) => {
                this.data = JSON.parse(val)
            })
        },
        async getCategory(){
            this.$store.dispatch('setLoading')
            try{
                var val = await window.eel.getCategory(this.searcht['ID_TERRITORIO'])(val)
                this.descriptive = JSON.parse(val)

               
                this.$store.dispatch('clearLoading')
            }
            catch{
                this.$store.dispatch('clearLoading')
            }
            this.$refs['yearS'].show()
        },
        goToDescriptive(){
            this.$refs['yearS'].hide()
            localStorage.setItem('id_territorio', this.searcht['ID_TERRITORIO']);
            localStorage.setItem('year', this.year);
            localStorage.setItem('municipio', this.searcht['SUB_DIVI_POL']);
            localStorage.setItem('COD_DANE', this.searcht['CODIGO'])
            this.$store.dispatch('setTerritory', this.searcht['ID_TERRITORIO'])
            this.$router.push({name:'DesIndex'})
            this.searchData = this.searcht
            this.searcht = {}
            this.$refs['taSearch'].$data.inputValue = ""
            this.search = ''
        },

    }
}
</script>

<style lang="sass" scoped>
.title
    font-weight: bold
    font-size: 1.5rem
    text-align: center
.head-b
    border-bottom: 1px solid #007bff
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
    height: 100px
    width: 100%
    overflow:  hidden
    display: grid
    grid-template-columns: 40% 30% 30%
    .log
        justify-self: center
        align-self: center
    .logos
        height: 100px
        display: flex
        align-items: center
        padding-left: 50px
        grid-auto-flow: column
        img
            cursor: pointer
            height: 90%
            margin-right: 15px
    .buttons
        display: flex
        align-items: center
        justify-content: flex-end
        padding-right: 50px
        gap: 10px
.sub-head
    margin: 5px 10px
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 15px
    height: 100px
    .category
        border: 1px solid #007bff
        border-radius: 5px
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
        padding: 10px
        display: grid
        grid-template-rows: 100%
        text-align: center
        align-items: center
        justify-items: center
        font-size: 2.2rem
        font-weight: bold
    .searcher
        border: 1px solid #007bff
        border-radius: 5px
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
        padding: 10px
        display: grid
        grid-template-rows: 40px 40px
        .input-c
            display: grid
            grid-template-columns: 1fr
            gap: 10px
            align-items: center
            i
                position: absolute
                padding: 10px !important
                z-index: 100
        .sub-location
            font-size: 1.3rem
            font-weight: bold
            display: grid
            align-items: center
            justify-items: center
            grid-auto-flow: column
.yearC
    text-align: center
.year-r
    padding: 3px
    background-color: #007bff
    color: #fff
    border-radius: 3px
</style>