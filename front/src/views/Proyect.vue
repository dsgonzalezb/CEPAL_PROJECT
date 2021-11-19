<template>
    <div>
         <board :board="4"/>
    </div>
</template>

<script>
import Board from '../components/boards/Board.vue'
export default {
    name:'Proyect',
    components: {
        'board' : Board
    },
}
</script>

<style lang="sass" scoped>

</style>