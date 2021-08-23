<template>
    <div>
        <div class="wizard">
            <div class="bt" :class="{'active': wizard==1 }" @click="wizard = 1">1</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==2 }" @click="wizard = 2">2</div>
            <div>
                <svg height="50" width="500">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==3 }" @click="wizard = 3">3</div>
        </div>
        <div class="dis-c" v-if="wizard == 1">
            <hr />
            <h3>{{$t('descriptive.des1')}}</h3>
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
        </div>
        
        <b-modal id="popS" size="xl" hide-footer :title="$t('descriptive.populationSeries')">
            
            <b-table striped hover :fields="fieldsPupulation" :items="descriptive.datatableS">
                <template 
                :slot="field.key" 
                v-for="(field , i) in editingFieldsP"
                slot-scope="{ item, value }"
                >
                    <span v-if="!item.editing" :key="i">
                        {{ value }}
                    </span>
                    <b-input v-else v-model="item.temp[field.key]" @keydown.enter.exact="doSave(item)" :key="i"></b-input>
                </template>
                <template slot="actions" slot-scope="{ item }">
                    {{item}}
                    <b-button @click="doEdit(item)" variant="outline-primary">
                        Edit    
                    </b-button>
                    <b-button v-if="item.editing" @click="doSave(item)" variant="outline-success">
                        Save
                    </b-button>
                    <b-button v-if="item.editing" @click="doCancel(item)" variant="outline-info">
                        Cancel
                    </b-button>
                </template>
            </b-table>
        </b-modal>

        <b-modal id="popD" size="xl" hide-footer :title="$t('descriptive.populationDensity')">
            <b-table striped hover :fields="fieldsDensity" :items="descriptive.datatableD">
                <template 
                :slot="field.key" 
                v-for="(field,i) in editingFieldsD"
                slot-scope="{ item, value }"
                
                >
                    <span v-if="!item.editing" :key="i">
                        {{ value }}
                    </span>
                    <b-input v-else v-model="item.temp[field.key]" @keydown.enter.exact="doSave(item)" :key="i"></b-input>
                </template>
                <template slot="actions" slot-scope="{ item }">
                    {{item}}
                    <b-button v-if="!item.editing" @click="doEdit(item)" variant="outline-primary">
                        Edit    
                    </b-button>
                    <b-button v-if="item.editing" @click="doSave(item)" variant="outline-success">
                        Save
                    </b-button>
                    <b-button v-if="item.editing" @click="doCancel(item)" variant="outline-info">
                        Cancel
                    </b-button>
                </template>

            </b-table>
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
            wizard: 1,
            fieldsPupulation:[
                {key: 'ID_DESCRIPTIVA', thClass: 'd-none', tdClass: 'd-none' },
                {key: 'POBLACION_TOTAL', sortable: true, editable: true},
                {key: 'POBLACION_CABECERA', sortable: true, editable: true},
                {key: 'POBLACION_RESTO', sortable: true, editable: true},
                {key: 'AÑO', sortable: true},
                { key: 'actions', class: 'text-center' }
            ],
            fieldsDensity:[
                {key: 'ID_DESCRIPTIVA', thClass: 'd-none', tdClass: 'd-none' },
                {key: 'POBLACION_TOTAL', sortable: true, editable: true},
                {key: 'DENSIDAD POBLACIONAL', sortable: true},
                {key: 'AÑO', sortable: true},
                { key: 'actions', class: 'text-center' }
            ]
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
    computed:{
        editingFieldsP() {
            return this.fieldsPupulation.filter(field => { return field.editable === true })
        },
        editingFieldsD() {
            return this.fieldsDensity.filter(field => { return field.editable === true })
        },
    },
    methods : {
        doEdit(item) {
            this.$set(item, 'temp', JSON.parse(JSON.stringify(item)))
            this.$set(item, 'editing', true)
        },
        doSave(item) {
            this.$set(item, 'editing', false)
            console.log(item)
        },
        doCancel(item) {
            this.$set(item, 'editing', false)
            this.$delete(item, 'temp')
        }
    }
}
</script>

<style lang="sass" scoped>
.dis-c
    h3
        text-align: center
.wizard
    width: 30%
    margin: 0 auto 15px auto
    display: grid
    grid-template-columns: 1fr 2fr 1fr 2fr 1fr
    div
        overflow: hidden
        display: grid
        align-items: center
        justify-items: center
        color: #007bff
    .bt
        cursor: pointer
        height: 50px
        width: 50px
        background-color: #fff
        color: #007bff
        border: 1px solid #007bff
        border-radius: 50px
        &:hover
            background-color: #007bff
            color: #fff
    .active
        background-color: #007bff
        color: #fff

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