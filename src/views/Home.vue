<template>
  <v-container class="cover_container" fluid fill-height
    :style="`background-image: url(${forsidaData ? forsidaData.forsidumynd.url : ''})`">
 
     <!--  <div class="d-flex flex-column justify-space-between"> -->

<!--         <div class="d-flex justify-end">
          <v-btn icon @click="dialog = !dialog" color="black" x-large class="ma-3">
            <v-icon :color="color">mdi-menu</v-icon>
          </v-btn>
        </div>

        <div class="d-flex justify-center">
            <v-img
              :src="color === 'white' ? require('../assets/BG-white-low-res.png') : require('../assets/BG-black-low-res.png') "
              :max-height="150"
              class=""
              alt="Brynjar Gauti Photography Logo"
              contain />
        </div> -->

        <v-row class="" justify="end">
          <v-btn icon @click="dialog = !dialog" x-large class="mx-4">
            <v-icon :color="color" size="60">mdi-menu</v-icon>
          </v-btn>
        </v-row>


        <v-row class="">
          <v-img
              :src="color === 'white' ? require('../assets/BG-white-low-res.png') : require('../assets/BG-black-low-res.png') "

              :height="200"
              class=""
              alt="Brynjar Gauti Photography Logo"
              contain />
        </v-row>

        <v-row align="center">
          <Footer :iconColor="color"/>
        </v-row>



    <!-- </div> -->

    <v-dialog v-model="dialog" max-width="500">
      <v-list>
        <v-list-item
          v-for="item in flokkar"
          :key="'cover_' + item.id"
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
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {
    Footer
  },
  props: {
    flokkar: Array
  },
  data: () => ({
    dialog: false,
    forsidaData: null,
    color: 'white'
  }),
  async created() {
    const doc = await this.$prismic.client.getSingle('forsida');
    this.forsidaData = doc.data;
  },
}
</script>

<style scoped>
.cover_container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: white;
}

.fill {
  height: 100%;
  width: 100%;
}
</style>