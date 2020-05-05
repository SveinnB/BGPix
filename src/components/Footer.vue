<template>
  <v-container fluid class="">
    <v-row class="" justify="center">
      <a href="mailto:bgauti@gmail.com" target="_blank">
        <v-icon class="mx-3" size="30" :color="iconColor">
          mdi-email
        </v-icon>
      </a>
      
      <a href="https://www.messenger.com/t/BrynjarGauti" target="_blank">
        <v-icon class="mx-3" size="30" :color="iconColor">
          mdi-facebook-messenger
        </v-icon>
      </a>

      <a href="https://www.instagram.com/brynjargauti" target="_blank">
        <v-icon class="mx-3" size="30" :color="iconColor">
          mdi-instagram
        </v-icon>
      </a>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    iconColor: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>

