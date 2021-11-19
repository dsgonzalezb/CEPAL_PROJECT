<template>
    <div class="figure-card">
        <div class="icon" v-if="figure.icon != 'NA'">
            <i :class="figure.icon"></i>
        </div>
        <progress-ebar v-if="figure.bar != 'NA'" orientation="H" size="S" :bar="figure.bar" />
        <div class="figure-text" v-if="figure.data1 != 'NA'"  :style="'box-shadow: 0 1px 4px '+figure.color+'; border-color: '+figure.color">
            <b-input-group :append="figure.unit1">
                <b-form-input v-model="figure.data1" readonly >
            </b-input-group>
        </div>
        <div class="figure-text" v-if="figure.data2 != 'NA'"  :style="'box-shadow: 0 1px 4px '+figure.color+'; border-color: '+figure.color">
            <b-input-group :append="figure.unit2" >
                <b-form-input v-model="figure.data2" readonly >
            </b-input-group>
        </div>
        <br v-if="note != 'NA'">
        <div class="note" v-if="figure.note != 'NA'">
            {{figure.note}}
        </div>
    </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'
export default {
    components: {
        'progress-ebar': ProgressBar
    },
    props:{
        figure:{
            type: Object,
            default: () =>{ return {
                    icon: 'fas fa-cog',
                    data1: 0,
                    data2: 0,
                    unit1: 'Unidad 1',
                    unit2: 'Unidad 2',
                    note:  'Nota',
                    color: 'rgba(0 ,123 ,255 , 1)',
                    bar: 50,
                }
            }
        }
    },
}
</script>

<style lang="sass" scoped>
.figure-card
    margin: 15px
    width: 170px
    text-align: center
    .icon
        font-size: 2rem
    .figure-text
        border: 1px solid #ccc
        border-radius: 3px
</style>