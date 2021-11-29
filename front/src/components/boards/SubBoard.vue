<template>
    <div class="sub-board" :class="{'proy': proy}">
        <div class="menu" v-show="!proy">
            <div class="btn btn-sm" 
            :class="{'btn-primary': selectedSubIndex == menu['ID_SECCION'], 'btn-outline-primary': selectedSubIndex != menu['ID_SECCION']}" 
            v-for="(menu,i) in subIndex" :key="i" 
            @click="loadBoards (menu['ID_SECCION'])"
            style="margin-bottom: 10px; width: 100%">
                <span v-if="menu['NOMBRE'] != 'NA'">{{menu['NOMBRE']}}</span>
                <span v-if="menu['NOMBRE'] == 'NA'">TABLERO</span>
            </div>
        </div>
        <div class="cards-b" v-if="selectedSubIndex != null && boards.length > 0" :key="selectedSubIndex">
            <card-board 
            v-for="(board,i) in boards" 
            :key="i" 
            :type="board['TIPO']" 
            :title1="board['TITULO1']" 
            :icon1="board['ICONO1']"
            :title2="board['TITULO2']"
            :icon2="board['ICONO2']"
            :title3="board['TITULO3']"
            :icon3="board['ICONO3']"
            :bart1="board['BARRA1T']"
            :bar1="board['BARRA1']"
            :bart2="board['BARRA2T']"
            :bar2="board['BARRA2']"
            :color1="board['COLOR_BARRA1']"
            :color2="board['COLOR_BARRA2']"
            :id_board="board['ID_TABLERO']"
            :help="board['AYUDA']"
            :note="board['NOTA']"
            :alt_ans="alt_ans"
            />
        </div>
        
    </div>
</template>

<script>
import CardBoard from './CardBoard.vue'
export default {
    components: {
        'card-board' : CardBoard
    },
    props:{
        sub_ind:{
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
            subIndex: [],
            selectedSubIndex: null,
            boards: [],
        }
    },
    watch:{
        sub_ind: function(){
            this.reloadAll()
        }
    },
    async mounted(){
        this.$store.dispatch('setLoading')
        try{
            var val5 = await window.eel.getSubIndexBoard(this.sub_ind)(val5)
            this.subIndex = JSON.parse(val5)
            this.loadBoards(this.subIndex[0]['ID_SECCION'])
            this.$store.dispatch('clearLoading')
        } catch (error) {
            console.log(error)
            this.$store.dispatch('clearLoading')
        }
    },
    methods :{
        async reloadAll(){
            this.boards = []
            this.$store.dispatch('setLoading')
            try{
                var val5 = await window.eel.getSubIndexBoard(this.sub_ind)(val5)
                this.subIndex = JSON.parse(val5)
                this.loadBoards(this.subIndex[0]['ID_SECCION'])
                this.$store.dispatch('clearLoading')
            } catch (error) {
                console.log(error)
                this.$store.dispatch('clearLoading')
            }
        },
        async loadBoards (index){
            this.selectedSubIndex = index
            try{
                var val5 = await window.eel.getTotalBoards(this.selectedSubIndex)(val5)
                this.boards = JSON.parse(val5)
                this.$store.dispatch('clearLoading')
            } catch (error) {
                console.log(error)
                this.$store.dispatch('clearLoading')
            }

        }

    }
}
</script>

<style lang="sass" scoped>
.sub-board
    display: grid
    grid-template-columns: 200px auto
    gap: 10px
    margin-top: 15px
.cards-b
    overflow-x: auto
    white-space: nowrap
.proy
    grid-template-columns: 100%
</style>