<template>
  <v-container fluid class="character">
    <h2 class="display-1 mb-5">Characters</h2>
    <v-container fluid class="grey darken-4 mb-5">
      <InputComponent @findCharacter="findCharacter"/>
    </v-container>
    <v-container fluid>
      <CharactersComponent :showCharacters="showCharacters"/>
    </v-container>
    <div class="white--text text-center mt-10 mb-0">
      <p v-if="showCharacters">No more characters here.</p>
      <p v-else>No characters found.</p>
    </div>
  </v-container>
</template>

<script>
import InputComponent from '../components/InputComponent'
import CharactersComponent from '../components/CharactersComponent'
export default {
  name: 'characters',
  components: {
    InputComponent,
    CharactersComponent
  },
  data () {
    return {
      showCharacters: [],
      name: '',
      selectStatus: '',
      selectGender: '',
      pageNumber: 1,
      maxPage: 5,
      allCharacters: []
    }
  },
  methods: {
    async getCharacters () {
      if (this.maxPage > this.pageNumber && !this.name && !this.selectGender && !this.selectStatus) {
        const characters = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${this.pageNumber}`
        ).then(res => res.json())
        this.maxPage = characters.info.pages
        characters.results.forEach((item) => {
          this.allCharacters.push(item)
        })
        this.showCharacters = this.allCharacters
      }
    },
    async findCharacter (params) {
      this.name = params.name
      this.selectStatus = params.status
      this.selectGender = params.gender
      const url = `https://rickandmortyapi.com/api/character/?name=${this.name}&status=${this.selectStatus || ''}&gender=${this.selectGender || ''}`
      const characters = await fetch(url).then(res => res.json())
      this.showCharacters = characters.results
    }
  },
  async fetch () {
    await this.getCharacters()
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom
      if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
        if (this.maxPage > this.pageNumber && !this.name && !this.selectGender && !this.selectStatus) {
          this.pageNumber++
        }
        this.getCharacters()
      }
    })
  }
}
</script>
