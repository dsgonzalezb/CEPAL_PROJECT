<template>
    <div>
        <h2><b>{{$t('rep.full_name')}}</b></h2>
        <div class="wizard">
            <div class="bt" :class="{'active': wizard==1 }" @click="wizard = 1" v-b-tooltip.hover :title="$t('spda.sp1')">1</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==2 }" @click="wizard = 2" v-b-tooltip.hover :title="$t('spda.sp2')">2</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==3 }" @click="wizard = 3" v-b-tooltip.hover :title="$t('spda.sp3')">3</div>
             <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==4 }" @click="wizard = 4" v-b-tooltip.hover :title="$t('spda.sp4')">4</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==5 }" @click="wizard = 5" v-b-tooltip.hover :title="$t('spda.sp4')">5</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==6 }" @click="wizard = 6" v-b-tooltip.hover :title="$t('spda.sp4')">6</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==7 }" @click="wizard = 7" v-b-tooltip.hover :title="$t('spda.sp4')">7</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==8 }" @click="wizard = 8" v-b-tooltip.hover :title="$t('spda.sp4')">8</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==9 }" @click="wizard = 9" v-b-tooltip.hover :title="$t('spda.sp4')">9</div>
            <div>
                <svg height="50" width="100">
                    <line x1="0" y1="25" x2="100" y2="25" style="stroke:#007bff;stroke-width:2" />
                </svg>    
            </div>
            <div class="bt" :class="{'active': wizard==10 }" @click="wizard = 10" v-b-tooltip.hover :title="$t('spda.sp4')">10</div>
        </div>
        
        <hr>

        <question :section="4" :wizard="wizard" :key="wizard" />
    </div>

</template>

<script>
import Question from '../components/Question.vue'
export default {
    name:'REP',
    components: {
        'question' : Question
    },
    data(){
        return{
            wizard: 1,
        }
    }
}
</script>

<style lang="sass" scoped>
h2
    text-align: center
.wizard
    width: 1500px
    height: 50px
    margin: 0 auto 15px auto
    display: grid
    align-items: center
    justify-items: center
    grid-template-columns: 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50px 100px 50pc
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
</style>