<template>
    <div>
        <div style="text-align: center">
            <b-button variant="outline-warning" @click="$refs['excel'].show()"><i class="far fa-file-excel"></i> Exportar Datos a Excel</b-button>
        </div>

        <b-modal ref="excel" id="excelModal" size="sm" hide-footer :title="'Sección en espera'">
            Sección en espera de la implementación piloto con los municipios
        </b-modal>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>