export const state = () => ({
  links: [
    {
      icon: 'mdi-account-multiple',
      title: 'Characters',
      to: '/characters'
    },
    {
      icon: 'mdi-map-marker-multiple',
      title: 'Locations',
      to: '/location'
    },
    {
      icon: 'mdi-filmstrip-box-multiple',
      title: 'Episodes',
      to: '/episodes'
    }
  ],
  socialNetworks: [
    {
      title: 'facebook',
      icon: 'mdi-facebook'
    },
    {
      title: 'instagram',
      icon: 'mdi-instagram '
    },
    {
      title: 'reddit',
      icon: 'mdi-reddit'
    }
  ]
})

export const getters = {
  getLinks: (state) => {
    return state.links
  },
  getNetworks: (state) => {
    return state.socialNetworks
  }
}
