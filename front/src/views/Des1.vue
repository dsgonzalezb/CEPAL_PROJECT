<template>
    <div>
        <b-button class="data-s" variant="outline-primary" v-b-modal.popS> <i class="fas fa-table"></i> {{$t('descriptive.see_data')}}</b-button>
        <div class="dis-c" >
            <h3><i class="fas fa-user-friends"></i> {{$t('descriptive.des1')}}</h3> 
            <div class="graphs" v-if="descriptive.labels != undefined" :key="wizard">
                <div>
                    <div class="label">{{$t('descriptive.populationSeries')}}</div>
                    <chartjs-line :labels="labels" :datasets="datasets" :bind="true"></chartjs-line>
                </div>
                <div>
                    <div class="label">{{$t('descriptive.populationDensity')}}</div>
                    <chartjs-line :labels="labels" :datasets="dDatasets"  :bind="true"></chartjs-line>
                </div>
            </div>
        </div>

        <div class="dis-c" >
            <hr />
            <h3><i class="fas fa-coins"></i> {{$t('descriptive.des2')}}</h3>
            <div class="graphs" v-if="descriptive.labels != undefined" :key="wizard">
                <div>
                    <div class="label">{{$t('descriptive.bussinessDesnsity')}}</div>
                    <chartjs-line :labels="labels" :datasets="bDatasets" :bind="true"></chartjs-line>
                </div>
                <div>
                    <div class="label">{{$t('descriptive.agregateValue')}}</div>
                    <chartjs-line :labels="vLabesl" :datasets="vDatasets"  :bind="true"></chartjs-line>
                </div>
                 <div>
                    <div class="label">{{$t('descriptive.economy')}}</div>
                    <div class="big-number">
                        {{economy}}
                    </div>
                </div>
                <div>
                    <div class="label">{{$t('descriptive.money')}}</div>
                    <chartjs-line :labels="labels" :datasets="iDatasets"  :bind="true"></chartjs-line>
                </div>
            </div>
        </div>

        <div class="dis-c" >
            <hr />
            <h3><i class="fas fa-recycle"></i> {{$t('descriptive.des3')}}</h3>
            <div class="graphs" v-if="descriptive.labels != undefined" :key="wizard">
                <div>
                    <div class="label">{{$t('descriptive.eca')}}</div>
                    <chartjs-line :labels="labels" :datasets="eDatasets" :bind="true"></chartjs-line>
                </div>
                <div>
                    <div class="label">{{$t('descriptive.pgris')}}</div>
                    <chartjs-doughnut :labels="pLabels" :data="pgDatasets" :bind="true" :option="dougRoundOption"></chartjs-doughnut>
                </div>
                <div>
                    <div class="label">{{$t('descriptive.res')}}</div>
                    <chartjs-line :labels="labels" :datasets="resDatasets" :bind="true"></chartjs-line>
                </div>
            </div>
        </div>
        
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
            iDatasets: [],
            eDatasets: [],
            cDatasets: [],
            resDatasets: [],
            pLabels: [],
            pgDatasets: [],
            economy: '',
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
            dougRoundOption :{
                responsive: true,
                title: {
                    display: true,
                    position: "top",
                    fontSize: 18,
                    text: ''
                },
                maintainAspectRatio : true,
                cutoutPercentage:50,
                legend: {
                        position: 'left',
                        labels: {
                            boxWidth: 20,
                            padding: 20,
                        }
                },
                plugins: {
                    labels: {
                        render: 'percentage',
                        fontSize: 14,
                        fontStyle: 'bold',
                        fontColor: 'black',
                        precision: 2
                    }
                }
            },
        }
    },
    beforeCreate: function() {
        console.log('Des 1 '+this.$loading)
    },
    async mounted(){
        if(this.$route.params.id != null){
            this.idDes = this.$route.params.id
            localStorage.setItem('id_territorio', this.idDes);
            this.$store.dispatch('setLoading')
            try{
                var val = await window.eel.find_descriptive(this.idDes)(val)
                this.descriptive = JSON.parse(val)
                this.labels = this.descriptive.labels
                this.vLabesl = this.descriptive.vLabesl
                this.datasets = this.descriptive.datasets
                this.dDatasets = this.descriptive.dDatasets
                this.bDatasets = this.descriptive.bDatasets
                this.vDatasets = this.descriptive.vDatasets
                this.iDatasets = this.descriptive.iDatasets
                this.eDatasets = this.descriptive.eDatasets
                this.economy = this.descriptive.economy
                this.pLabels = this.descriptive.pLabels
                this.pgDatasets = this.descriptive.pgDatasets
                this.resDatasets = this.descriptive.resDatasets

                for (let index = 0; index <  this.descriptive.datatableS.length; index++) {
                    this.editP.push(false);
                }
                this.$store.dispatch('clearLoading')
            }
            catch{
                this.$store.dispatch('clearLoading')
            }
        }
        else{
            try{
                this.idDes =  localStorage.getItem('id_territorio');
                this.$store.dispatch('setLoading')
                var val2 = await window.eel.find_descriptive(this.idDes)(val2)
                this.descriptive = JSON.parse(val2)
                this.labels = this.descriptive.labels
                this.vLabesl = this.descriptive.vLabesl
                this.datasets = this.descriptive.datasets
                this.dDatasets = this.descriptive.dDatasets
                this.bDatasets = this.descriptive.bDatasets
                this.vDatasets = this.descriptive.vDatasets
                this.iDatasets = this.descriptive.iDatasets
                this.eDatasets = this.descriptive.eDatasets
                this.economy = this.descriptive.economy
                this.pLabels = this.descriptive.pLabels
                this.pgDatasets = this.descriptive.pgDatasets
                this.resDatasets = this.descriptive.resDatasets

                for (let index = 0; index <  this.descriptive.datatableS.length; index++) {
                    this.editP.push(false);
                }
                this.$store.dispatch('clearLoading')
            }
            catch{
                this.$store.dispatch('clearLoading')
            }
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
    padding: 20px
    gap: 50px
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
.big-number
    min-height: 250px
    display: grid
    align-items: center
    justify-items: center
    text-align: center
    font-size: 2rem
    font-weight: bold

.data-s
    position: absolute
    top: 0
    right: 0
</style>