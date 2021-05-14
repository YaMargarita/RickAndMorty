<template>
  <v-app dark>
    <v-content>
      <NavbarMenu/>
        <div class="ma-4">
          <nuxt />
        </div>
    </v-content>
  </v-app>
</template>

<script>
import NavbarMenu from '../components/NavbarMenu'
export default {
  components: {
    NavbarMenu
  }
}
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #303030;
}
::-webkit-scrollbar-thumb {
  background: #666666;
  height: 70px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
  height: 70px;
}
</style>
