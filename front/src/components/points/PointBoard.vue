<template>
    <div class="board-p">
        <div class="title">
            {{board.name}}
        </div>
        <br>
        <div class="subtitle">
            <div class="group">
                <div>
                    {{$t('graphics.points.theme')}}
                </div>
                <div class="points">
                    <div>
                        {{$t('graphics.points.result')}}
                    </div>
                    <div>
                        {{$t('graphics.points.point')}}
                    </div>
                </div>
            </div>
            <div>
                {{$t('graphics.points.mini_bar')}}
            </div>
            
        </div>
        <br>
        <div class="container-p">
            <div class="groups-p">
                <point-group v-for="(group, i) in board.subsec" :key="i" :group="group" />
            </div>
            <progress-ebar :bar="bar_value" :showT="false" />
        </div>
    </div>
</template>

<script>
import ProgressBar from '../boards/ProgressBar.vue'
import PointGroup from './PointGroup.vue'
export default {
    components: {
        'progress-ebar': ProgressBar,
        'point-group' : PointGroup
    },
    props:{
        board:{
            type: Object,
            default: () =>{ return {
                    name: '',
                    subsec:[]
                }
            }
        }
    },
    data(){
        return{
            bar_value: 0
        }
    },
    mounted(){
        let sumMax = 0, sum = 0
        /* console.log('______________') */
        for (let i = 0; i < this.board.subsec.length; i++) {
            let sumSubMax = 0, sumSub = 0
            for (let j = 0; j < this.board.subsec[i].data.length; j++) {
                sumSubMax += this.board.subsec[i].data[j].max_points
                sumSub += this.board.subsec[i].data[j].points
            }
           
            /* console.log('Indice '+ i)
            console.log('sumSub '+ sumSub)
            console.log('sumSubMax '+ sumSubMax) */
            if(sumSub == 0 &&  this.board.subsec[i].data[0].optional == false) sumMax += 0
            else sumMax += sumSubMax

            sum += sumSub
        
        }
        /* console.log('sum '+ sum)
        console.log('sumMax '+ sumMax) */
        let calc_value = (sum/sumMax)/4

        this.bar_value = calc_value * 100 / 0.25
    }
    
}
</script>

<style lang="sass" scoped>
.board-p
    padding: 15px
    margin: 10px
    padding: 10px
    box-shadow: 0 1px 4px rgba(0 ,123 ,255 ,0.9)
    border-radius: 3px
    position: relative
    max-width: 45%
    display: inline-grid
.container-p
    display: grid
    grid-template-columns: 85% 14%
    gap: 5px
.title
    font-weight: bold
    text-align: center
.subtitle
    display: grid
    grid-template-columns: 85% 14%
    gap: 15px
    align-items: center
    text-align: center
    font-size: 80%
    font-weight: bold
    .group
        display: grid
        grid-template-columns: 45% 40% 14%
        gap: 15px
        align-items: center
        .points
            display: grid
            grid-template-columns: 50% 49%
            gap: 5px
            align-items: center
</style>