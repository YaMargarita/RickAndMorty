<template>
  <div>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div
        class="pa-4 rounded-circle grey lighten-1"
      ></div>
    </v-app-bar>
    <v-navigation-drawer
      class='mt-15'
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in getLinks"
          :key="i"
          :to="link.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-footer
        class="d-flex justify-space-around"
        height="60"
        app
      >
        <v-tooltip bottom v-for="(link, i) in getNetworks" :key="i">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="social-icon">{{ link.icon }}</v-icon>
          </template>
          <span>{{ link.title }}</span>
        </v-tooltip>
      </v-footer>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavbarMenu',
  computed: {
    ...mapGetters([
      'getLinks',
      'getNetworks'
    ])
  },
  data () {
    return {
      title: 'Rick and Morty',
      drawer: false
    }
  }
}
</script>

<style>
.social-icon{
  cursor: pointer
}
</style>
