export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getName() {
      this.name = 'wyyyyyyaaaa'
    }
  },
  mounted () {
    this.getName()
    console.log(this.name)
  }
}