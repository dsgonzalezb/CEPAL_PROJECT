<template>
    <div class="settings content-c scroll1">
        <div v-html="$t('settings.alert')"></div>
        <div style="text-align: center;">
            <b-button variant="outline-primary" v-if="!isShow" @click="$refs['validate'].show()">{{$t('settings.select')}}</b-button>
        </div>
        <br>
        <div v-if="isShow">
            <v-select :options="listTables" v-model="selectedTable" :placeholder="$t('settings.oldF')" :clearable="false"/>
            <br>
            <br>
            <div class="field-m">
                <b-input type="text" v-model="folder" readonly></b-input>
                <b-button variant="outline-primary" @click="getFolder">{{$t('settings.file')}}</b-button>
            </div>
            <br>
            <br>
            <b-button variant="outline-primary" @click="saveFile" :disabled="folder== '' || selectedTable == ''">{{$t('settings.update')}}</b-button>
        </div>
        <b-modal ref="validate" id="validate" size="md" :ok-only="true" @ok="validatePass()" :title="$t('descriptive.valid_data')">
            {{$t('settings.pass')}}
            <b-input type="password" v-model="pass"></b-input>
        </b-modal>
    </div>
</template>

<script>
export default {
    name:'Settings',
    data(){
        return{
            isShow: false,
            pass: '',
            clave:'zb$AYqcgEo^c', //, '123'
            listTables:[
                'descriptiva',
                'formula',
                'pregunta',
                'puntos',
                'respuesta',
                'tabla',
                'territorio',
                'variables',
                'subseccion',
                'referencia',
                'indice_tableros',
                'tableros_seccion',
                'tablero',
                'cifra',
                'sankey_nodos',
                'sankey_links'
            ],
            selectedTable: '',
            folder: ''
        }
    },
    methods:{
        validatePass(){
            if(this.pass == this.clave){
                this.isShow = true
                this.pass = ''
            }
            else{
                this.pass = ''
                this.makeToast('warning', this.$t('settings.fail_pass'))
            }
        },
        getFolder() {
            var self =  this
            window.eel.getFolder()(r => {
                self.folder = r
            });
        },
        async saveFile(){
            this.$store.dispatch('setLoading')
            try{
                var val2 = await window.eel.save_file(this.folder, this.selectedTable)(val2)
                this.makeToast('success', this.$t('settings.updated'))
                this.isShow = false
                this.selectedTable = ''
                this.folder = ''
                this.$store.dispatch('clearLoading')
            }
            catch(error){
                this.$store.dispatch('clearLoading')
                console.log('Error: '+ error)
            }
        },
        makeToast(variant = null, message) {
            this.$bvToast.toast( message, {
                title: message,
                variant: variant,
                solid: true,
                autoHideDelay: 2000,
                toaster: 'b-toaster-bottom-right'
            })
        },
    }
}
</script>

<style lang="sass" scoped>
.settings
    min-height: 500px
    .controls
        width: 80%
        margin: 0 auto
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 20px
        .control
            border: 1px solid #007bff
            padding: 10px
    .field-m
        display: grid
        align-items: center
        grid-template-columns: 3fr 2fr
</style>