<template>
    <div class="settings content-c">
        <div class="controls">
            <div class="control">
                <b-form-checkbox switch>Punto A</b-form-checkbox>
                <b-form-group
                    label="Variable 1:"
                    label-for="nested-country"
                    label-cols-sm="3"
                    label-align-sm="center"
                >
                    <b-form-input id="nested-country" type="number"></b-form-input>
                </b-form-group>
            </div>
            <div class="control">
                <b-form-checkbox switch>Punto B</b-form-checkbox>
                <b-form-group
                    label="Variable 1:"
                    label-for="nested-country"
                    label-cols-sm="3"
                    label-align-sm="center"
                >
                    <b-form-input id="nested-country" type="number"></b-form-input>
                </b-form-group>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.settings
    .controls
        width: 80%
        margin: 0 auto
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 20px
        .control
            border: 1px solid #007bff
            padding: 10px
</style>