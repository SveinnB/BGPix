<template>
  <v-container class="ma-0 pa-0 fill d-flex flex-column" fluid>

    <div class="content">
      <NavBarBig :flokkar="flokkarCover"   class="hidden-sm-and-down" />
      <NavBarSmall :flokkar="flokkarCover" class="hidden-md-and-up" />
      <router-view />
    </div>
    
    <Footer class="footer"/>

  </v-container>
</template>

<script>
import NavBarBig from '../components/NavBarBig'
import NavBarSmall from '../components/NavBarSmall'
import Footer from '../components/Footer'

export default {
  name: 'FlokkurParent',
  components: {
    NavBarBig, NavBarSmall, Footer
  },
  props: {
    flokkar: Array
  },
  data: () => ({
  }),
  computed: {
    flokkarCover: function(){
      const coverItem = {
        id: 'forsida',
        name: 'Forsíða',
        to: '/'
      };
      return [coverItem].concat(this.flokkar);
    }
  },
}
</script>

<style scoped>
.fill{
  height: 100%;
  width: 100%;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>

