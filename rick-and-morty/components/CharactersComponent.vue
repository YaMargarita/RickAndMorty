<template>
  <v-layout row>
    <v-col
      v-for="character in showCharacters"
      :key="character.id"
      cols="6"
      md="3"
      justify-self="start"
    >
      <v-card
      >
        <v-img
          :src="character.image"
        ></v-img>
        <v-layout row justify-center align-center class="px-3">
          <v-col cols="6">
            <p class="text-truncate mb-1 mt-2">{{ character.name }}</p>
            <p class="mb-0">{{ character.species }}</p>
          </v-col>
          <v-col cols="6" align-self="center" class="d-flex align-center justify-end">
            <p class="mb-0">{{ character.status }}</p>
            <div
              style="width: 10px; height: 10px"
              class="ml-2 rounded-circle d-inline-block"
              :class="{green : character.status === 'Alive', red : character.status === 'Dead', grey : character.status === 'unknown'}"
            ></div>
          </v-col>
        </v-layout>
      </v-card>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  name: 'CharactersComponent',
  props: ['showCharacters']
}
</script>

<style scoped>

</style>
