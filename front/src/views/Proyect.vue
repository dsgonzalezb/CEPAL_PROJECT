<template>
    <div>
        <div class="title">
            <h2><b>{{$t('graphics.proyects.title')}}</b></h2>
        </div>
        <br>
        <div class="contain-pro">
            <question :section="7" v-model="answer_shared" class="ques"/>
            <div></div>
            <board :board="4" :proy="true" :alt_ans="answer_shared"/>
        </div>
        
    </div>
</template>

<script>
import Board from '../components/boards/Board.vue'
import QuestionProyect from '../components/QuestionProyect.vue'
export default {
    name:'Proyect',
    components: {
        'board' : Board,
        'question': QuestionProyect
    },
    data(){
        return{
            year: 2021,
            idDes: null,
            answer_shared: []
        }
    }
}
</script>

<style lang="sass" scoped>
h2 , h3
    text-align: center
.contain-pro
    display: grid
    grid-template-columns: 30% 69%
    gap: 15px
    position: relative
.ques
    max-height: 550px
    width: 25%
    position: fixed
    overflow-y: auto
</style>