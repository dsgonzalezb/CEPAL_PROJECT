<template>
    <div class="figure-card">
        <span class="help" v-show="figure.help!= 'NA'" v-b-tooltip.hover :title="figure.help" ><i class="fas fa-question-circle"></i></span>
        <div class="icon" v-if="figure.icon != 'NA'">
            <i :class="figure.icon"></i>
        </div>
        <progress-ebar v-if="figure.bar != 'NA'" orientation="H" size="S" :bar="figure.bar" />
        <div class="figure-text" v-if="figure.data1 != 'NA'"  :style="'box-shadow: 0 1px 4px '+figure.color+'; border-color: '+figure.color+'; background-color:'+figure.color+'55'">
            <div class="data-in">
                <div class="n-data" v-b-tooltip.hover :title="figure.data1">
                    {{ Intl.NumberFormat().format( figure.data1)}}
                </div>
                <div class="n-unit">
                    <b>{{figure.unit1}}</b>
                </div>
            </div>
            <!-- <b-input-group :append="figure.unit1">
                <b-form-input v-model="figure.data1" readonly >
            </b-input-group> -->
            <div class="note" v-if="figure.etiq1 != 'NA'">
                {{figure.etiq1}}
            </div>
        </div>
        <div class="figure-text" v-if="figure.data2 != 'NA'"  :style="'box-shadow: 0 1px 4px '+figure.color+'; border-color: '+figure.color+'; background-color:'+figure.color+'55'">
            <div class="data-in">
                <div class="n-data"  v-b-tooltip.hover :title="figure.data2">
                    {{Intl.NumberFormat().format(figure.data2)}}
                </div>
                <div class="n-unit">
                    <b>{{figure.unit2}}</b>
                </div>
            </div>
            <!-- <b-input-group :append="figure.unit2" >
                <b-form-input v-model="figure.data2" readonly >
            </b-input-group> -->
            <div class="note" v-if="figure.etiq2 != 'NA'">
                {{figure.etiq2}}
            </div>
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
                    color: '#0000ff',
                    bar: 50,
                    help: 'NA',
                    etiq1: 'NA',
                    etiq2: 'NA',
                }
            }
        }
    },
}
</script>

<style lang="sass" scoped>
.figure-card
    margin: 15px
    width: 250px
    text-align: center
    position: relative
    .data-in

        display: grid
        grid-template-columns: 70% 30%
        align-items: center
        justify-items: center
        .n-data
            padding: 5px 0
            width: 100%
            font-size: 90%
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
        .n-unit
            font-size: 65%
    .help
        cursor: pointer
        position: absolute
        top: 5px
        right: 5px
    .note
        font-size: 65%
    .icon
        font-size: 2rem
    .figure-text
        border: 1px solid #ccc
        border-radius: 3px
</style>