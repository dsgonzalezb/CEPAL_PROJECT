<template>
    <div>
        <div >
            <h2>
                Exportar Datos 
            </h2>
            <p>
                Ahora que ha completado el diligenciamiento de los formularios con la información de economía circular de su municipio, ya puede consultar y exportar la información consignada en esta herramienta por medio de un formato xlsx,  el cual podrá ser enviado por el encargado del municipio a la entidad que promueve el diligenciamiento de esta herramienta.
            </p>
            <p>
                Recuerde que debe adjuntar los soportes respectivos junto al archivo xlsx obtenido en esta herramienta.  Es de aclarar que esta información no se considera oficial hasta que sea validada y consolidada por el ente encargado de dicha tarea, en donde la información podrá ser verificada para su consolidación y uso oficial con los datos anexos suministrados por el remitente del correo.
            </p>
            <p>
                Exportar datos del municipio {{municipio}} - {{cod_dane}} del año {{year}}
            </p>
            <b-button style="text-align: center" variant="outline-success" @click="save"><i class="far fa-file-excel"></i> Exportar a Excel</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            year: null,
            cod_dane: null,
            idDes: null,
            municipio: '',
        }
    },
    mounted(){
        this.year =  localStorage.getItem('year');
        this.cod_dane = localStorage.getItem('COD_DANE');
        this.idDes =  localStorage.getItem('id_territorio');
        this.municipio =  localStorage.getItem('municipio')
    },
    methods:{
        async save(){
            this.$store.dispatch('setLoading')
            try{
                var val5 = await window.eel.exportExcel(this.idDes, this.year, this.cod_dane )(val5)
                this.$store.dispatch('clearLoading')
            } catch (error) {
                console.log(error)
                this.$store.dispatch('clearLoading')
            }
        }
    }
}
</script>

<style lang="sass" scoped>
h2
    text-align: center
</style>