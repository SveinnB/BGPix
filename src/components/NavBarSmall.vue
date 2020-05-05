<template>
  <v-container fluid class="ma-0 pa-0 overflow-hidden"
  v-scroll="onScroll">
    
    <v-row class="mx-0 my-3" justify="space-between" align="center">
      
      <a href="/">
          <v-img
            alt="Brynjar Gauti Photography Logo"
            class="ml-6"
            contain
            :src="require('../assets/BG-black-low-res.png')"
            max-width="200"
          />
        </a>

        <v-btn icon @click="dialog = !dialog" color="black" x-large class="mr-3">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        
    </v-row>

    <div v-if="offsetTop > 90" class="fixed">
      <v-btn class="mx-2" fab dark large color="primary" @click="GoUp">
        <v-icon
        size="40">
          mdi-chevron-up
        </v-icon>
      </v-btn>
    </div>

    <v-dialog v-model="dialog" max-width="500">
      <v-list>
        <v-list-item
          v-for="item in flokkar"
          :key="'small_' + item.id"
          :to="item.to"
          @click="dialog = false"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-dialog>


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
    dialog: false,
  }),
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

