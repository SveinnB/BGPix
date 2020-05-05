<template>
  <v-container fluid class="" style=""
    v-scroll="onScroll">
    
    <v-row class="ma-0 mt-3" justify="center">
          <v-img
            alt="Brynjar Gauti Photography Logo"
            contain
            class=""
            :src="require('../assets/BG-black-low-res.png')"
            height="200"
          />
    </v-row>

    <v-row class=" ma-0 lighten-2 mt-5" justify="center">
      <v-btn v-for="item in flokkar"
          :key="item.id"
          :to="item.to"
          class="mx-2"
          text
        >
          {{ item.name }}
        </v-btn>
    </v-row>

    <div v-if="offsetTop > 260" class="fixed">
      <v-btn class="mx-2" fab dark large color="primary" @click="GoUp">
        <v-icon
        size="40">
          mdi-chevron-up
        </v-icon>
      </v-btn>
    </div>

  </v-container>
</template>

<script>
export default {
  name: 'NavBarBig',
  props: {
    flokkar: Array
  },
  data: () => ({
    offsetTop: 0,
  }),
  created() {
  },
  methods: {
    onScroll () {
      this.offsetTop = window.pageYOffset;
    },
    GoUp(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
};
</script>



<style scoped>
.text_align_phone{
  text-align: left;
}

.padding_top_phone{
  padding-top: 0;
}

@media only screen and (max-width: 420px) {
  .text_align_phone{
    text-align: center;
  }
  .padding_top_phone{
    padding-top: 8px;
  }
}

div.fixed {
  position: fixed;
  /*top: 10px;*/
  right: 10px;
  bottom: 10px;
  z-index: 10;
}

</style>

