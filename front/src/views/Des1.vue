<template>
    <div>
        <div class="graphs" v-if="descriptive.labels != undefined">
            <div>
                <div class="label">{{$t('descriptive.populationSeries')}}</div>
                <chartjs-line :labels="labels" :datasets="datasets"  :bind="true"></chartjs-line>
                <br>
                <br>
                <b-button variant="outline-primary" v-b-modal.popS> <i class="fas fa-cog"></i> {{$t('descriptive.see_data')}}</b-button>
            </div>
            <div>
                <div class="label">{{$t('descriptive.populationDensity')}}</div>
                <chartjs-line :labels="labels" :datasets="dDatasets"  :bind="true"></chartjs-line>
                <br>
                <br>
                <b-button variant="outline-primary" v-b-modal.popD> <i class="fas fa-cog"></i> {{$t('descriptive.see_data')}}</b-button>
            </div>
            
        </div>
        <b-modal id="popS" size="xl" hide-footer :title="$t('descriptive.populationSeries')">
            <b-table striped hover :items="descriptive.datatableS"></b-table>
        </b-modal>
        <b-modal id="popD" size="xl" hide-footer :title="$t('descriptive.populationDensity')">
            <b-table striped hover :items="descriptive.datatableD"></b-table>
        </b-modal>
    </div>
</template>

<script>
export default {
    data(){
        return{
            descriptive: {},
            labels: [],
            datasets: [],
            dDatasets: [],
        }
    },
    mounted(){
        if(this.$route.params.id != null){
            eel.find_descriptive(this.$route.params.id)((val) => {
                this.descriptive = JSON.parse(val)
                this.labels = this.descriptive.labels
                this.datasets = this.descriptive.datasets
                this.dDatasets = this.descriptive.dDatasets

            })
        }
        
    },
}
</script>

<style lang="sass" scoped>
.graphs
    display: grid
    grid-template-columns: 1fr 1fr
    padding: 10px
    gap: 10px
    text-align: center
.label
    font-size: 16pt
    font-weight: bold
</style>