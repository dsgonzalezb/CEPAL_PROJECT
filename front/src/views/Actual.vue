<template>
    <div>
         <board :board="1"/>
    </div>
</template>

<script>
import Board from '../components/boards/Board.vue'
export default {
    name:'Actual',
    components: {
        'board' : Board
    },
}
</script>

<style lang="sass" scoped>

</style>