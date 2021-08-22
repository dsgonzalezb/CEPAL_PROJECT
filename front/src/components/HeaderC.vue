<template>
    <div>
        <div class="head-b">
            <div class="logos" @click="$router.push({name: 'Home'})">
                <img src="@/assets/cepal.png" alt="CEPAL">
                <img src="@/assets/dnp.jpg" alt="DNP">
            </div>
            <div class="buttons">
                <b-button variant="outline-primary" @click="$router.push({name: 'Home'})" v-if="$route.name != 'Home'"><i class="fas fa-arrow-circle-left"></i> {{$t('header.home')}}</b-button>
                <b-button variant="outline-primary" @click="$router.push({name: 'Settings'})"><i class="fas fa-cog"></i> {{$t('header.settings')}}</b-button>
            </div>
        </div>
        <div class="sub-head">
            <div class="searcher">
                <div class="input">
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
                <div class="sub-location" v-if="$route.name == 'Des1'">

                </div>
                <div class="sub-location" v-else>
                    {{$t('header.sub_loc')}}
                </div>
            </div>
            <div>
                <!-- TODO -->
            </div>
        </div>
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
            searchData: {}
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
        searcht : function(newValue, oldValue){
            newValue['ID_TERRITORIO'] != undefined ? this.goToDescriptive(): null
        },
    },
    methods:{
        findData(search){
            eel.find_territory(search)((val) => {
                this.data = JSON.parse(val)
            })
        },
        goToDescriptive(){
            this.$router.push({name:'DesIndex', params:{id: this.searcht['ID_TERRITORIO']}})
            this.searchData = this.searcht
            this.searcht = {}
            this.$refs['taSearch'].$data.inputValue = ""
            this.search = ''
        }
    }
}
</script>

<style lang="sass" scoped>
.head-b
    border-bottom: 1px solid #007bff
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
    height: 100px
    width: 100%
    overflow:  hidden
    display: grid
    grid-template-columns: 50% 50%
    .logos
        height: 100px
        display: flex
        align-items: center
        padding-left: 50px
        grid-auto-flow: column
        img
           height: 90%
           margin-right: 15px
    .buttons
        display: flex
        align-items: center
        justify-content: flex-end
        padding-right: 50px
        gap: 10px
.sub-head
    margin: 10px 10px
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 15px
    height: 150px
    .searcher
        border: 1px solid #007bff
        border-radius: 5px
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
        padding: 10px
        display: grid
        grid-template-rows: 55px 55px
        .input
            display: grid
            grid-template-columns: 1fr
            gap: 10px
            align-items: center
        .sub-location
            font-size: 1.5rem
            font-weight: bold
            display: grid
            align-items: center
            justify-items: center
            
</style>