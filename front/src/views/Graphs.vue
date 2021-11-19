<template>
    <div >
        <question :section="6" :key="6" />

        <router-view :key="$route.fullPath"/>
        
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
        }
    },
}
</script>

<style lang="sass" scoped>

</style>