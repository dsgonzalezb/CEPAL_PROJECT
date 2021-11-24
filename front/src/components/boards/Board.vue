<template>
    <div class="board">
        <div class="index-board" :class="{'collap': selectedIndex != null }" >
            <div class="btn" :class="{'btn-primary': selectedIndex == ind['ID_INDICE'], 'btn-outline-primary': selectedIndex != ind['ID_INDICE'], 'btn-sm': selectedIndex != null}" v-for="(ind, i) in indexBoard" :key="i" @click="selectedIndex = ind['ID_INDICE']">
                {{ind['NOMBRE']}}
            </div>
        </div>
        <div v-if="selectedIndex != null">
            <sub-q  :sub_ind="selectedIndex" :proy="proy" :alt_ans="alt_ans"/>
        </div>
    </div>
</template>

<script>
import SubBoard from './SubBoard.vue'
export default {
    name:'Board',
    components: {
        'sub-q' : SubBoard
    },
    props:{
        board:{
            type: Number,
            default: 1
        },
        proy:{
            type: Boolean,
            default: false
        },
        alt_ans:{
            type: Array,
            default: function(){ return [] }
        }
    },
    data(){
        return{
            indexBoard: [],
            selectedIndex: null,
        }
    },
    async mounted(){
        this.$store.dispatch('setLoading')
        try{
            var val5 = await window.eel.getIndexBoard(this.board)(val5)
            this.indexBoard = JSON.parse(val5)
            if(this.indexBoard.length == 1 || this.proy ) this.selectedIndex = this.indexBoard[0]['ID_INDICE']
            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.$store.dispatch('clearLoading')
        }
    }
}
</script>

<style lang="sass" scoped>
.board
    margin-top: 15px
.index-board
    display: flex
    flex-direction: column
    gap: 15px
    align-items: center
    justify-content: center
    .btn
        width: 80%

.collap
    display: flex
    flex-direction: row
    gap: 5px
    align-items: center
    justify-content: center
    .btn
        width: auto 
</style>