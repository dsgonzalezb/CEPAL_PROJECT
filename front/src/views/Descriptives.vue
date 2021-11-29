<template>
    <div class="descript" key="territory">
        <div class="side">
            <div class="tag" :class="{'active': $route.name == 'Des1'}" @click="$router.push({name:'Des1'})"><i class="fas fa-chart-line"></i> {{$t('descriptive.name')}}</div>
            <div class="tag" :class="{'active': $route.name == 'SPDA'}" @click="$router.push({name:'SPDA'})" v-b-tooltip.hover :title="$t('spda.full_name')"><i class="fas fa-poll-h"></i> {{$t('spda.name')}}</div>
            <div class="tag" :class="{'active': $route.name == 'Manager'}" @click="$router.push({name:'Manager'})" v-b-tooltip.hover :title="$t('manager.full_name')"><i class="fas fa-cog"></i> {{$t('manager.name')}}</div>
            <div class="tag" :class="{'active': $route.name == 'REP'}" @click="$router.push({name:'REP'})" v-b-tooltip.hover :title="$t('rep.full_name')"><i class="fas fa-project-diagram"></i> {{$t('rep.name')}}</div>
            <div class="tag" :class="{'active': $route.name == 'OtherProfiles'}" @click="$router.push({name:'OtherProfiles'})" v-b-tooltip.hover :title="$t('other_profiles.full_name')"><i class="fas fa-infinity"></i> {{$t('other_profiles.name')}}</div>
            <div class="tag" :class="{'active': $route.name == 'ResultsIndex', 'disabled' : !completed}" @click="completed ? $router.push({name:'ResultsIndex'}): ''" v-b-tooltip.hover :title="$t('graphics.name')"><i class="fas fa-chart-pie"></i> {{$t('graphics.name')}}</div>
            <div v-if="$route.name == 'ResultsIndex' ||  $route.name == 'Results' || $route.name == 'Actual' || $route.name == 'Sankey' || $route.name == 'Proyect'" class="subtag" :class="{'active': $route.name == 'Results'}" @click="$router.push({name:'Results'})"><i class="fas fa-list-ol"></i> {{$t('graphics.results')}}</div>
            <div v-if="$route.name == 'ResultsIndex' ||  $route.name == 'Results' || $route.name == 'Actual' || $route.name == 'Sankey' || $route.name == 'Proyect'" class="subtag" :class="{'active': $route.name == 'Actual'}" @click="$router.push({name:'Actual'})"><i class="far fa-chart-bar"></i> {{$t('graphics.actual')}}</div>
            <div v-if="$route.name == 'ResultsIndex' ||  $route.name == 'Results' || $route.name == 'Actual' || $route.name == 'Sankey' || $route.name == 'Proyect'" class="subtag" :class="{'active': $route.name == 'Sankey'}" @click="$router.push({name:'Sankey'})"><i class="fas fa-signal"></i> {{$t('graphics.sankey')}}</div>
            <div v-if="$route.name == 'ResultsIndex' ||  $route.name == 'Results' || $route.name == 'Actual' || $route.name == 'Sankey' || $route.name == 'Proyect'" class="subtag" :class="{'active': $route.name == 'Proyect'}" @click="$router.push({name:'Proyect'})"><i class="fas fa-chart-area"></i> {{$t('graphics.proyect')}}</div>
            <div class="tag" :class="{'active': $route.name == 'Excel', 'disabled' : !completed}" @click="$router.push({name:'Excel'})" v-b-tooltip.hover :title="$t('excel.name')"><i class="far fa-file-excel"></i> {{$t('excel.name')}}</div>
        </div>
        <div class="content-c scroll1">
            <router-view/>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Descriptives',
    data(){
        return{
            completed: false,
            year: null,
            idDes: null,
        }
    },
    watch:{
        territory : function(){
            this.year =  localStorage.getItem('year');
            this.idDes =  localStorage.getItem('id_territorio');
            this.getValid()
        }
    },
    computed:{
        territory(){
            return this.$store.getters.territory;
        }
    },

    async mounted(){
        this.year =  localStorage.getItem('year');
        this.idDes =  localStorage.getItem('id_territorio');
        this.getValid()
    },
    methods:{
        async getValid(){
            this.completed = false
            try{
                var val2 = await window.eel.get_answered_questions(this.year, this.idDes)(val2)
                if(val2 != undefined){
                    //console.log(val2)
                    this.completed = val2
                }
            }
            catch(error){
                console.log(error)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.content-c
    margin-left: 0 !important 
.descript
    display: grid
    grid-template-columns: 15% 85%
.side
    margin-top: 10px
    padding-left: 15px
    .tag
        cursor: pointer
        margin-top: 15px
        padding: 10px
        border: 1px solid #007bff
        border-right: 1px solid transparent
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
        border-top-left-radius: 5px
        border-bottom-left-radius: 5px
        &:hover
            background-color: #007bff
            color: #fff
    .subtag
        cursor: pointer
        margin-top: 15px
        margin-left: 20px
        padding: 10px
        border: 1px solid #007bff
        border-right: 1px solid transparent
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
        border-top-left-radius: 5px
        border-bottom-left-radius: 5px
        &:hover
            background-color: #007bff
            color: #fff
    .active
        background-color: #007bff
        color: #fff
    .disabled
        cursor: not-allowed
</style>