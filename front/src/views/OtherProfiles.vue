<template>
    <div>
        <div class="wizard">
            <div class="bt" :class="{'active': wizard==1 }" @click="wizard = 1" v-b-tooltip.hover :title="$t('spda.sp1')">1</div>
        </div> 
        <hr>
        <question :section="5" :wizard="wizard" :key="wizard" />
    </div>

</template>

<script>
import Question from '../components/Question.vue'
export default {
    name:'OtherProfiles',
    components: {
        'question' : Question
    },
    data(){
        return{
            wizard: 1,
        }
    }
}
</script>

<style lang="sass" scoped>
.wizard
    width: 1350px
    height: 50px
    margin: 0 auto 15px auto
    display: grid
    align-items: center
    justify-items: center
    grid-template-columns: 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px
    div 
        overflow: hidden
        display: grid
        align-items: center
        justify-items: center
        color: #007bff
    .bt
        cursor: pointer
        height: 50px
        width: 50px
        background-color: #fff
        color: #007bff
        border: 1px solid #007bff
        border-radius: 50px
        &:hover
            background-color: #007bff
            color: #fff
    .active
        background-color: #007bff
        color: #fff
</style>