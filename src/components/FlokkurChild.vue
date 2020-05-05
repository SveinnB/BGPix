<template>
  <v-container v-if="document" :key="$route.params.uid">
    <v-row>
      <prismic-rich-text class="px-3" :field="document.data.texti"/>
    </v-row>
    <v-row>
      <Gallery class="px-3" :nafn="document.data.nafn" :myndir="document.data.myndir" ></Gallery>
    </v-row>
  </v-container>
</template>

<script>
import Gallery from '../components/Gallery';

export default {
  name: 'FlokkurChild',
  components: {
    Gallery
  },
  data: () => ({
    document: null,
  }),
  async created(){
    await this.SetFlokkurByUID(this.$route.params.uid);
  },
  async updated(){
    if(this.document){
      if(this.$route.params.uid !== this.document.uid){
        await this.SetFlokkurByUID(this.$route.params.uid);
      }
    }
    else{
      await this.SetFlokkurByUID(this.$route.params.uid);
    }
  },
  methods:{
    async SetFlokkurByUID(uid){
      this.document = await this.$prismic.client.getByUID('flokkur', uid);
      if(this.document === undefined){
        return this.$router.push('/NotFound');
      }
    },
  }
}
</script>

<style scoped>

</style>