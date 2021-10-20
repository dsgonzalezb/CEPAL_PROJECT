<template>
    <div class="home content-c scroll1">
        <h2>
            {{$t('home.title')}}
        </h2>
        <br>
        <div v-html="$t('home.message')"></div>
    </div>
</template>

<script>
export default {
    name:'Home',
}
</script>

<style lang="sass" scoped>
.home
    h2
        text-align: center
        font-weight: bold
</style>