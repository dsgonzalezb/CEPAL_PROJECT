<template>
    <div class="progress-b">
        
        <div class="loadbar" :class="{'loadbar-s' : size == 'S'}" v-if="orientation == 'V'" :style="'box-shadow: 0 1px 4px '+color+'; border-color: '+color">
            <strong class="bar" :style="'height:'+bar+'%; background-color:'+color">{{bar}}%</strong>
        </div>

         <div class="loadbar2" :class="{'loadbar2-s' : size == 'S'}" v-if="orientation == 'H'" :style="'box-shadow: 0 1px 4px '+color+'; border-color: '+color">
            <strong class="bar2" :style="'width:'+bar+'%; background-color:'+color">{{bar}}%</strong>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        bar:{
            type: Number,
            default: 100
        },
        orientation:{
            type: String,
            default: 'V'
        },
        size:{
            type: String,
            default: 'M'
        },
        color:{
            type: String,
            default: 'rgba(0 ,123 ,255 , 1)'
        }
    },
}
</script>

<style lang="sass" scoped>
.progress-b
    width: 100%
    display: grid
    align-items: center
    justify-items: center
.loadbar
    margin: 15px
    width: 40px
    height: 100%
    min-height: 300px
    background-color: #fff
    border: 1px solid #ccc
    border-radius: 3px
    position: relative
.loadbar-s
    width: 20px
    font-size: 0.8rem
.bar
    padding: 5px
    width: 100%
    display: block       
    font-family: arial
    font-size: 12px
    background-color: #bb9319
    color: #fff    
    position: absolute
    bottom: 0
    transition: all 0.5s ease-out

.loadbar2
    margin: 5px 0
    width: 100%
    min-width: 170px
    height: 40px
    background-color: #fff
    border: 1px solid #ccc
    border-radius: 3px 
.loadbar2-s
    height: 20px
    font-size: 0.8rem
    .bar2
        line-height: 15px   
.bar2
    padding: 5px
    line-height: 40px     
    height: 100%
    display: block     
    font-family: arial
    font-size: 12px
    background-color: #bb9319       
    color: #fff
    transition: all 0.5s ease-out
</style>