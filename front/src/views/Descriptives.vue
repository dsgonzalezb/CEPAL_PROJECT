<template>
    <div class="descript">
        <div class="side">
            <div class="tag" :class="{'active': $route.name == 'Des1'}">{{$t('descriptive.name')}}</div>
        </div>
        <div class="content-c scroll1">
            <router-view/>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.content-c
    margin-left: 0 !important 
.descript
    display: grid
    grid-template-columns: 15% 85%
.side
    margin-top: 10px
    padding-left: 15px
    .tag
        cursor: pointer
        margin-top: 15px
        padding: 10px
        border: 1px solid #007bff
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px
        border-top-left-radius: 5px
        border-bottom-left-radius: 5px   
    .active
        background-color: #007bff
        color: #fff
</style>