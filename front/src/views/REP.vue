<template>
    <div>
        <h2><b>{{$t('rep.full_name')}}</b></h2>
        <div class="wizard">
            <div class="bt1"  v-for="(sect, i) in subsects" :key="i" >
                <div class="bt" :class="{'active': wizard==sect['PAGINA'] }" v-b-tooltip.hover :title="sect['TITULO']" @click="wizard = sect['PAGINA']">
                    {{ sect['PAGINA'] }}
                </div>
                <div v-if="subsects.length != i+1">
                    <svg height="50" width="100">
                        <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                    </svg>    
                </div>
            </div>
        </div>
        
        <hr>

        <question :section="4" :wizard="wizard" :key="wizard" />
    </div>

</template>

<script>
import Question from '../components/Question.vue'
export default {
    name:'REP',
    components: {
        'question' : Question
    },
    data(){
        return{
            wizard: 1,
            subsects: []
        }
    },
    async mounted(){
        this.$store.dispatch('setLoading')
        try {
            var val = await window.eel.getSubsections(4)(val)
            this.subsects = JSON.parse(val)
            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.isLoad=true
            this.$store.dispatch('clearLoading')
        }
    }
}
</script>

<style lang="sass" scoped>
h2
    text-align: center
.wizard
    width: 1500px
    height: 50px
    margin: 0 auto 15px auto
    display: flex
    align-content: center
    justify-content: center
    div
        overflow: hidden
        display: grid
        align-items: center
        justify-items: center
        color: #007bff
    .bt1
        display: grid
        grid-template-columns: 50px 100px
        align-items: center
        justify-items: center
        height: 50px
        width: 150px
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
        background-color: #007bff !important
        color: #fff !important
</style>