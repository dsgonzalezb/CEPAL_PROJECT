<template>
    <div >
        <question :section="6" :key="6" />

        <router-view :key="$route.fullPath" v-if="completed"/>
        
    </div>
</template>

<script>
import QuestionConsolidated from '../components/QuestionConsolidated.vue'
export default {
    name:'Graphs',
    components: {
        'question' : QuestionConsolidated
    },
    data(){
        return{
            completed: false,
            year: null,
            idDes: null,
        }
    },
    async mounted(){
        console.log('Here')
        this.year =  localStorage.getItem('year');
        this.idDes =  localStorage.getItem('id_territorio');
        try{
            var val2 = await window.eel.get_consolidated_answers(this.year, this.idDes)(val2)
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
</script>

<style lang="sass" scoped>

</style>