function foo2() {
  fn1();
}
function foo1 () {
  fn1();
}

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getName() {
      this.name = 'wyyyyyy'
    }
  },
  mounted() {
    this.getName()
    console.log(this.name)
  }
}



foo2()
function fn1() {
  this.name === 'wyyyyyy' ? true : false;
  console.log(this.name);
}

