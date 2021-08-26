<template>
    <div>
        <div class="wizard">
            <div class="bt" :class="{'active': wizard==1 }" @click="wizard = 1" v-b-tooltip.hover :title="$t('descriptive.des1')">1</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==2 }" @click="wizard = 2" v-b-tooltip.hover :title="$t('descriptive.des2')">2</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==3 }" @click="wizard = 3" v-b-tooltip.hover :title="$t('descriptive.des3')">3</div>
        </div>
        <div class="dis-c" v-if="wizard == 1">
            <hr />
            <h3>{{$t('descriptive.des1')}}</h3>
            <div class="graphs" v-if="descriptive.labels != undefined" :key="wizard">
                <div>
                    <div class="label">{{$t('descriptive.populationSeries')}}</div>
                    <chartjs-line :labels="labels" :datasets="datasets" :bind="true"></chartjs-line>
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

        <div class="dis-c" v-if="wizard == 2">
            <hr />
            <h3>{{$t('descriptive.des2')}}</h3>
            <div class="graphs" v-if="descriptive.labels != undefined" :key="wizard">
                <div>
                    <div class="label">{{$t('descriptive.bussinessDesnsity')}}</div>
                    <chartjs-line :labels="labels" :datasets="bDatasets" :bind="true"></chartjs-line>
                    <br>
                    <br>
                    <b-button variant="outline-primary" v-b-modal.popB> <i class="fas fa-cog"></i> {{$t('descriptive.see_data')}}</b-button>
                </div>
                <div>
                    <div class="label">{{$t('descriptive.agregateValue')}}</div>
                    <chartjs-line :labels="vLabesl" :datasets="vDatasets"  :bind="true"></chartjs-line>
                    <br>
                    <br>
                    <b-button variant="outline-primary" v-b-modal.popV> <i class="fas fa-cog"></i> {{$t('descriptive.see_data')}}</b-button>
                </div>
            </div>
        </div>
        
        <b-modal id="popB" size="xl" hide-footer :title="$t('descriptive.bussinessDesnsity')">

        </b-modal>

        <b-modal id="popV" size="xl" hide-footer :title="$t('descriptive.agregateValue')">

        </b-modal>

        <b-modal id="popS" size="xl" hide-footer :title="$t('descriptive.populationSeries')">
            <div class="table">
                <div class="table-header">
                    <div class="header__item">{{fieldsPupulation[0]}}</div>
                    <div class="header__item">{{fieldsPupulation[1]}}</div>
                    <div class="header__item">{{fieldsPupulation[2]}}</div>
                    <div class="header__item">{{fieldsPupulation[3]}}</div>
                    <div class="header__item">{{fieldsPupulation[4]}}</div>
                </div>
                <div class="table-content">	
                    <div class="table-row" v-for="(data, i) in descriptive.datatableS" :key="i+'-'+editP[i]">		
                        <div class="table-data" :key="editP[i]">
                            <span v-show="!editP[i]">
                                {{ data['POBLACION_TOTAL'] }} hab
                            </span>
                            <b-input v-show="editP[i]" v-model="tempPopulation.pTotal"></b-input>
                        </div>
                        <div class="table-data" :key="editP[i]">
                            <span v-show="!editP[i]" >
                                {{ data['POBLACION_CABECERA'] }} hab
                            </span>
                            <b-input v-show="editP[i]" v-model="tempPopulation.pCabecera"></b-input>
                        </div>
                        <div class="table-data" :key="editP[i]">
                            <span v-show="!editP[i]">
                                {{ data['POBLACION_RESTO'] }} hab
                            </span>
                            <b-input v-show="editP[i]" v-model="tempPopulation.pResto"></b-input>
                        </div>
                        <div class="table-data" :key="editP[i]">
                            <span v-show="!editP[i]">
                                {{ data['AÑO'] }}
                            </span>
                            <b-input v-show="editP[i]" v-model="tempPopulation.anio"></b-input>
                        </div>
                        <div class="table-data" :key="editP[i]">
                            <b-button v-if="!editP[i]" @click="editP[i]= true; doEditP(data,i)" variant="outline-primary">
                                {{$t('descriptive.edit')}}
                            </b-button>
                            <b-button v-if="editP[i]" @click="doSaveP(i)" variant="outline-success">
                                {{$t('descriptive.save')}}
                            </b-button>
                            <b-button v-if="editP[i]" @click="doCancelP(i); editP[i] = false" variant="outline-info">
                                {{$t('descriptive.cancel')}}
                            </b-button>
                        </div>
                    </div>
                </div>	
            </div>
        </b-modal>

        <b-modal id="popD" size="xl" hide-footer :title="$t('descriptive.populationDensity')">
           <div class="table">
                <div class="table-header">
                    <div class="header__item">{{fieldsDensity[0]}}</div>
                    <div class="header__item">{{fieldsDensity[1]}}</div>
                    <div class="header__item">{{fieldsDensity[2]}}</div>
                    <div class="header__item">{{fieldsDensity[3]}}</div>
                    <div class="header__item">{{fieldsDensity[4]}}</div>
                </div>
                <div class="table-content">	
                    <div class="table-row" v-for="(data, i) in descriptive.datatableD" :key="i+'-'+editD[i]">		
                        <div class="table-data" :key="editD[i]">
                            <span v-show="!editD[i]">
                                {{ data['POBLACION_TOTAL'] }} hab
                            </span>
                            <b-input v-show="editD[i]" v-model="tempDensity.pTotal"></b-input>
                        </div>
                        <div class="table-data">
                            <span>
                                {{ data['DENSIDAD POBLACIONAL'] }} hab/ha
                            </span>
                        </div>
                        <div class="table-data" :key="editD[i]">
                            <span v-show="!editD[i]">
                                {{ data['AREA'] }} ha
                            </span>
                            <b-input v-show="editD[i]" v-model="tempDensity.area"></b-input>
                        </div>
                        <div class="table-data" :key="editD[i]">
                            <span v-show="!editD[i]">
                                {{ data['AÑO'] }}
                            </span>
                            <b-input v-show="editD[i]" v-model="tempDensity.anio"></b-input>
                        </div>
                        <div class="table-data" :key="editD[i]">
                            <b-button v-if="!editD[i]" @click="editD[i]= true; doEditD(data,i)" variant="outline-primary">
                                {{$t('descriptive.edit')}}
                            </b-button>
                            <b-button v-if="editD[i]" @click="doSaveD(i)" variant="outline-success">
                                {{$t('descriptive.save')}}
                            </b-button>
                            <b-button v-if="editD[i]" @click="doCancelD(i); editD[i] = false" variant="outline-info">
                                {{$t('descriptive.cancel')}}
                            </b-button>
                        </div>
                    </div>
                </div>	
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name:'Des1',
    data(){
        return{
            eel: {},
            idDes: 0,
            descriptive: {},
            labels: [],
            datasets: [],
            dDatasets: [],
            bDatasets: [],
            vLabesl: [],
            vDatasets: [],
            wizard: 1,
            tempPopulation:{
                id: '',
                pTotal: '',
                pCabecera: '',
                pResto: '',
                anio: ''
            },
            editP: [],
            fieldsPupulation:[
                'POBLACION TOTAL', 
                'POBLACION CABECERA',
                'POBLACION RESTO', 
                'AÑO',
                'ACCIÓN'
            ],
            tempDensity: {
                id: '',
                pTotal: '',
                area: '',
                anio: ''
            },
            editD: [],
            fieldsDensity:[
                'POBLACION TOTAL',
                'DENSIDAD POBLACIONAL',
                "AREA (hectáreas)",
                'AÑO',
                'ACCIÓN'
            ]
        }
    },
    mounted(){
        if(this.$route.params.id != null){
            this.idDes = this.$route.params.id
            window.eel.find_descriptive(this.idDes)((val) => {
                this.descriptive = JSON.parse(val)
                this.labels = this.descriptive.labels
                this.vLabesl = this.descriptive.vLabesl
                this.datasets = this.descriptive.datasets
                this.dDatasets = this.descriptive.dDatasets
                this.bDatasets = this.descriptive.bDatasets
                this.vDatasets = this.descriptive.vDatasets

                for (let index = 0; index <  this.descriptive.datatableS.length; index++) {
                    this.editP.push(false);
                }
                for (let index = 0; index <  this.descriptive.datatableD.length; index++) {
                    this.editD.push(false);
                }

            })
        }
        
    },
    computed:{
    },
    methods : {
        makeToast(variant = null, message) {
            this.$bvToast.toast( message, {
                title: message,
                variant: variant,
                solid: true,
                autoHideDelay: 2000,
                toaster: 'b-toaster-bottom-right'
            })
        },
        reloadData(){
            this.descriptive = {}
            this.labels = {}
            this.datasets = {}
            this.dDatasets = {}
            window.eel.find_descriptive(this.idDes)((val) => {
                this.descriptive = JSON.parse(val)
                this.labels = this.descriptive.labels
                this.datasets = this.descriptive.datasets
                this.dDatasets = this.descriptive.dDatasets

                for (let index = 0; index <  this.descriptive.datatableS.length; index++) {
                    this.editP.push(false);
                }
                for (let index = 0; index <  this.descriptive.datatableD.length; index++) {
                    this.editD.push(false);
                }

            })
        },
        //POPULATION
        doEditP(item, i) {
            this.editP[i] = true 
            this.tempPopulation={
                id: item['ID_DESCRIPTIVA'],
                pTotal: item['POBLACION_TOTAL'],
                pCabecera: item['POBLACION_CABECERA'],
                pResto: item['POBLACION_RESTO'],
                anio: item['AÑO']
            }
        },
        doSaveP(i) {
            //this.editP[i] = false
            window.eel.save_population(this.tempPopulation)((val) => {
                if(val == 'true'){
                    this.makeToast('success', this.$t('descriptive.data_save'))
                    this.reloadData()
                }
            })
            this.doCancelP(i)
        },
        doCancelP(i) {
            this.editP[i] = false 
            this.tempPopulation={
                id: '',
                pTotal: '',
                pCabecera: '',
                pResto: '',
                anio: ''
            }
        },
        //DENSITY
        doEditD(item, i) {
            this.editD[i] = true 
            this.tempDensity={
                id: item['ID_DESCRIPTIVA'],
                pTotal: item['POBLACION_TOTAL'],
                area: item['AREA'],
                anio: item['AÑO']
            }
        },
        doSaveD(i) {
            //this.editP[i] = false
            window.eel.save_density(this.tempDensity)((val) => {
                if(val == 'true'){
                    this.makeToast('success', this.$t('descriptive.data_save'))
                    this.reloadData()
                }
            })
            this.doCancelD(i)
        },
        doCancelD(i) {
            this.editD[i] = false 
            this.tempDensity={
                id: '',
                pTotal: '',
                anio: ''
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.dis-c
    h3
        text-align: center
.wizard
    width: 350px
    height: 50px
    margin: 0 auto 15px auto
    display: grid
    align-items: center
    justify-items: center
    grid-template-columns: 50px 100px 50px 100px 50px
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

.table 
	width: 100%
	border: 1px solid #EEEEEE

.table-header 
	display: flex
	width: 100%
	background: #007bff
	padding: ((24px/2) * 1.5) 0

.table-row 
	display: flex
    gap: 15px
	width: 100%
	padding: ((24px/2) * 1.5) 0

	&:nth-of-type(odd)
		background: #EEEEEE

.table-data, .header__item 
	flex: 1 1 20%
	text-align: center

.form-control
    margin: 5px
    width: auto !important
.btn
    margin: 5px

.header__item
    color: #fff
    text-transform: uppercase

</style>