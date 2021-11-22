<template>
    <div class="group-pa">
        <div class="group-p">
            <div class="name">
                {{group.name}}
            </div>
            <div class="data">
                <div class="points" v-for="(point,i) in group.data" :key="i">
                    <div>
                        {{point.code}}
                    </div>
                    <div>
                        {{point.points}}
                    </div>
                </div>

            </div>
            <progress-ebar :size="'SM'" :bar="bar_value" :showT="false" />
        </div>
        <hr>
        
    </div>
</template>

<script>
import ProgressBar from '../boards/ProgressBar.vue'
export default {
    components: {
        'progress-ebar': ProgressBar
    },
    props:{
        group:{
            type: Object,
            default: () =>{ return {
                    name: '',
                    data:[]
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
        let sumSubMax = 0, sumSub = 0
        for (let j = 0; j < this.group.data.length; j++) {
            sumSubMax += this.group.data[j].max_points
            sumSub += this.group.data[j].points
        }

        this.bar_value = sumSub * 100 / sumSubMax
    }
}
</script>

<style lang="sass" scoped>
.group-pa
    margin-bottom: 5px
.group-p
    display: grid
    grid-template-columns: 45% 40% 14%
    gap: 15px
    
    .name
        font-size: 90%
    .data
        font-size: 80%
        .points
            display: grid
            grid-template-columns: 50% 49%
            gap: 5px
            align-items: center


</style>