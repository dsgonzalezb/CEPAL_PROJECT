<template>
    <div>
        En Construcción
        <div style="width: 60%">
            <chartjs-line  :bind="true"></chartjs-line>
            <chartjs-doughnut  :bind="true" :option="dougRoundOption"></chartjs-doughnut>
            <chartjs-bar  :bind="true"></chartjs-bar>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
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
    }
}
</script>

<style lang="sass" scoped>

</style>