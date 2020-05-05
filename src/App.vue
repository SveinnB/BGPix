<template>
  <v-app>
    <router-view :flokkar="flokkar" />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    flokkar: []
  }),
  async created(){
    await this.GetContent();
  },
  methods: {
    async GetContent(){
      // ná í alla flokka
      const res = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'flokkur')
      );
      res.results.map(x => {
        this.flokkar.push({
          id: x.uid,
          name: x.data.nafn,
          to: `/flokkur/${x.uid}`
        });
      });
    },
  }
}
</script>

<style scoped>

</style>