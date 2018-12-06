<template>
  <div id="app">
    <div @click="btnClick" class="btn">按钮</div>
    <PopupTable
      :isShowPopupTable="isShowPopupTable"
      @moduleCloseClick="moduleCloseClick"
    />
  </div>
</template>

<script>
import PopupTable from './components/popup-table'
import Directives from '../'
let mixin  = {
  data () {
    return {
      isData: 'yes'
    }
  }
}
export default {
  name: 'App',
  components: {
    PopupTable
  },
  // mixins: [mixin],
  data() {
    return {
      isShowPopupTable: false
    }
  },
  methods: {
    btnClick() {
      this.isShowPopupTable = true
    },
    moduleCloseClick() {
      this.isShowPopupTable = false
    }
  }
}
</script>

<style lang="less">

</style>
