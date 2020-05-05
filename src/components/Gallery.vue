<template>
  <v-container class="">

    <v-row justify="center" class="pt-4">
      
      <v-img v-for="(item, index) in myndir" :key="'gallery_' + item.mynd.url"
        :src="item.mynd.url"
        :alt="item.mynd.alt"
        class="mx-2 mb-4"
        :height="200"
        :max-width="300"
        @click="OpenDialog(index + 1)">
      </v-img>

    </v-row>
    
    <div :class="{hidden: !dialog}" class="dialog">
      <v-container class="d-flex flex-column justify-space-around" fluid style="height: 100%; width: 100%">
      
      <v-row class="ma-0 mb-5" justify="space-between" align="center" style="max-height: 100px">
        <v-img
            alt="Brynjar Gauti Photography Logo"
            class=""
            contain
            :src="require('../assets/BG-white-low-res.png')"
            max-width="100"
          />
        <v-btn @click="dialog = false" text x-large color="white">Loka</v-btn>
      </v-row>

      <div class="swiper-container" style="height: 90%; width: 100%">
        <div class="swiper-wrapper" style="height: 100%">
            <div v-for="item in myndir" :key="'mynd_' + item.mynd.url"
              class="swiper-slide" style="height: 95%">

              <v-container class="ma-0 pa-0" fluid fill-height>

                <v-row class="ma-0" justify="center" :style="$vuetify.breakpoint.xs ? 'height: 60%' : 'height: 80%'">
                  <img
                    :data-src="item.mynd.url"
                    :alt="item.mynd.alt"
                    class="swiper-lazy mynd">
                  <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </v-row>

                <v-row class="ma-0" justify="center" :style="$vuetify.breakpoint.xs ? 'height: 40%' : 'height: 20%'">
                  <v-col class="pa-0" style="max-width: 900px">
                    <prismic-rich-text class="mt-3 white--text" :field="item.lysing"/>
                  </v-col>
                </v-row>
              </v-container>
              
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
        <!-- Navigation -->
        <div class="swiper-button-next swiper-button-white hidden-sm-and-down"></div>
        <div class="swiper-button-prev swiper-button-white hidden-sm-and-down"></div>
      </div>

      </v-container>
    </div>
      
  </v-container>
</template>

<script>
import Swiper from 'swiper/js/swiper.esm.bundle';
import 'swiper/css/swiper.min.css'

export default {
  name: 'Gallery',
  props: {
    nafn: String,
    myndir: Array,
  },
  data: () => ({
    dialog: false,
    swiper: null,
  }),
  watch: {
    dialog: function(val){
      if(!val){
        this.CloseDialog();
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
    
    window.addEventListener("keydown", this.KeyDown);

    this.swiper= new Swiper('.swiper-container', {
      loop: true,
      lazy: true,
      observer: true,
      observeParents: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.KeyDown);
    this.dialog = false;
  },
  methods: {
    KeyDown(event) {
      if (this.dialog) {
        if (event.key === 'Escape') {
          this.dialog = false;
        }
      }
    },
    OpenDialog(index){
      this.dialog = true;
      this.swiper.activeIndex = index;
      this.swiper.pagination.update();
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    },
    CloseDialog(){
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    },
    GetRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  }
};
</script>

<style>

.dialog{
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
}

.hidden{
  display: none;
}

.swiper-slide {
  font-size: 18px;
  background: #000;
}

.mynd{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  object-fit: contain;
}

.swiper-pagination-bullet{
  background-color: white;
}

.gallery_image{
  object-fit: scale-down;
  background-color: royalblue;
  max-width: 300px;
  max-height: 300px;
  margin: 5px;
}

</style>