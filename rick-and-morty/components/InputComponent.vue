<template>
  <v-layout row justify-space-between align-center>
    <v-col
      cols="12"
      md="4">
      <v-text-field
        @input="findCharacter"
        label="Name"
        outlined
        v-model="name"
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="4">
      <v-select
        clearable
        @change="findCharacter"
        :items="status"
        label="Status"
        outlined
        v-model="selectStatus"
      ></v-select>
    </v-col>
    <v-col
      cols="12"
      md="4">
      <v-select
        clearable
        @change="findCharacter"
        :items="gender"
        label="Gender"
        outlined
        v-model="selectGender"
      ></v-select>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  name: 'InputComponent',
  data () {
    return {
      name: '',
      selectStatus: '',
      selectGender: '',
      status: [
        'Alive',
        'Dead',
        'Unknown'
      ],
      gender: [
        'Female',
        'Male',
        'Genderless',
        'Unknown'
      ]
    }
  },
  methods: {
    findCharacter () {
      this.$emit('findCharacter', {
        name: this.name,
        status: this.selectStatus,
        gender: this.selectGender
      })
    }
  }
}
</script>
