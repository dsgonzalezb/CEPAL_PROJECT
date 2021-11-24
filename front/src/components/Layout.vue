<template>
    <div class="layout">
        <header-c></header-c>
        <div class=".loader-c">
            <router-view/>
        </div>
        <div class="loader" v-if="isLoading" >
            <div class="infinity-loader">
              <div class="bg">
                <!--background circles-->
                <div class="left-bg"></div>
                <div class="right-bg"></div>
              </div>
              <div class="fg">
                <!--foreground circles-->
                <div class="top-left-rect">
                  <div></div>
                </div>
                <div class="bottom-right-rect">
                  <div></div>
                </div>
                <div class="top-right-rect">
                  <div></div>
                </div>
                <div class="bottom-left-rect">
                  <div></div>
                </div>
              </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import HeaderC from './HeaderC.vue'
export default {
    name:'Layout',
    components: {
        'header-c' : HeaderC
    },
    computed: {
        isLoading() {
            return this.$store.getters.isLoading > 0;
        },
    }
}
</script>

<style scoped>
.loader {
    position: absolute;
    top: 0;
    background: #3335;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    z-index: 1000;
}
.infinity-loader {
  position: fixed; /*We have to use it as we are using absolute positioning on its children and we will align it in the center of the page*/
  /*left: 50%;
  top: 50%;*/
  transform: rotateX(60deg);
  /*yes, we have to define width and height, otherwise transformation won't work*/
  width: 190px; /* 2 x width - border-width */
  height: 100px; /* width */
}

.infinity-loader .bg div,
.infinity-loader > .fg > div > div {
  width: 100px; /* width */
  height: 100px; /* width */
  border: 10px solid #aaa; /* border-width solid #aaa */
  box-sizing: border-box; /* so that its border won't increase its width*/
  border-radius: 50%; /* to make the div round*/
  position: absolute;
}

.infinity-loader .right-bg {
  transform: translate(100%, 0);
  left: -10px; /* -border-width */
}

.infinity-loader > .fg > div > div {
  border-color: #007bff #007bff transparent transparent;
  transform: rotate(135deg);
  animation: spin 1s linear infinite; /* spin time linear infinite */
  position: static; /*add this otherwise transformation in its parent won't work as expect*/
}

.infinity-loader > .fg > div {
  clip: rect(0, 100px, 50px, 0); /* 0, width, width/2, 0*/
  position: absolute; /* required for using clip: rect() */
}

.infinity-loader > .fg > .bottom-right-rect {
  left: -10px; /* -border-width */
  transform: translateX(100%) scale(1, -1);
}

.infinity-loader > .fg > .bottom-right-rect > div {
  animation-delay: 0.25s; /* time/4 */
}

.infinity-loader > .fg > .top-right-rect {
  left: -10px; /* -border-width */
  transform: translateX(100%) scale(-1, 1);
}

.infinity-loader > .fg > .top-right-rect > div {
  animation-delay: 0.5s; /* (2 x time)/4 */
}

.infinity-loader > .fg > .bottom-left-rect {
  transform: scale(-1);
}

.infinity-loader > .fg > .bottom-left-rect > div {
  animation-delay: 0.75s; /* (3 x time)/4 */
}

.infinity-loader > .fg {
  filter: drop-shadow(0 0 6px #007bff);
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(495deg);
  } /* (360 + 135)deg*/
}
</style>

<style lang="sass" scoped>
.layout 
    height: 100%
.body-c
    height: calc( 100% - 270px )
</style>