<template>
    <div class="layout">
        <header-c></header-c>
        <div class="body-c">
            <router-view/>
        </div>
        
    </div>
</template>

<script>
import HeaderC from './HeaderC.vue'
export default {
    components: {
        'header-c' : HeaderC
    }
}
</script>

<style lang="sass" scoped>
.layout 
    height: 100%
.body-c
    height: calc( 100% - 300px )
    
</style>