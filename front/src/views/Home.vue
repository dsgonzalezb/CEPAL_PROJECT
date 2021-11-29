<template>
    <div class="home content-c scroll1">
        <div>
            <h2>
                {{$t('home.title')}}
            </h2>
            <br>
            <div v-html="$t('home.message')"></div>
        </div>
        <div>
            <h2>
                Recomendaciones generales.
            </h2>
            <br>
            <div>
                Recuerde antes de hacer uso de esta herramienta que:
                <ul>
                    <li>Se recomienda realizar el levantamiento unificado de la información requerida por cada punto de una sección previamente a su diligenciamiento para hacer más ágil este proceso. Como ayuda el usuario puede consultar en los títulos de cada sección textos que le indican las entidades que pueden ayudar a proveer información de los puntos contenidos en cada sección consultada.</li>
                    <li>Todos los puntos habilitados para su diligenciamiento en los formularios son obligatorios, en caso de no contar con el dato o que esté aún no se recolecta al interior del municipio ingrese cero “0” para los campos numéricos o “NA” para los campos de texto.</li>
                    <li>Los campos numéricos utilizan formato inglés,  por lo cual para señalar un decimal debe utilizar el punto “.” como decimal; ejemplo “0.5”, en caso de utilizar coma “,” este lo tomará como el separador de miles y los cálculos realizados por la herramienta pueden ser afectados.</li>
                    <li>El sistema realizará validaciones de completitud de información cuando el usuario dé la opción “Guardar y confirmar datos”, en caso de que un dato falte, el sistema le indicará el código del punto que falta por diligenciar para que el usuario proceda a completar el diligenciamiento del mismo.</li>
                    <li>El sistema adicional a las validaciones de completitud, también tiene puntos de validación (Campos calculados que deben arrojar el mismo valor total ingresado por el usuario), por lo cual ante una inconsistencia entre estos, el sistema alertará al usuario  al dar clic en la opción “Guardar y confirmar datos”, indicando los código de los puntos que el usuario debe validar para cumplir dichas reglas.</li>
                    <li>Los resultados finales sólo estarán habilitados para el año que se encuentra registrando solo si el usuario ya diligenció todos puntos incluidos en los diferentes formularios de la herramienta tras haber dado en cada sección la opción “Guardar y confirmar datos”.</li>
                    <li>La información consignada en esta herramienta no se considera oficial, solamente la información reportada a los entes encargados por medio de los formatos de salida de esta herramienta y dicha información podrá ser verificada por la entidad que promueva su diligenciamiento.</li>
                </ul>


            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Home',
}
</script>

<style lang="sass" scoped>
.home
    display: grid 
    grid-template-columns: 60% 39%
    gap: 15px

    h2
        text-align: center
        font-weight: bold
</style>