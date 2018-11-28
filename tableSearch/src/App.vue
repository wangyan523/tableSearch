<template>
  <div id="app">
    <div @click="btnClick" class="btn">按钮</div>
    <PopupTable
      :isShowPopupTable="isShowPopupTable"
    />
  </div>
</template>

<script>
import PopupTable from './components/popup-table'
export default {
  name: 'App',
  components: {
    PopupTable
  },
  data() {
    return {
      isShowPopupTable: false
    }
  },
  methods: {
    btnClick() {
      this.isShowPopupTable = true
    }
  }
}
</script>

<style lang="less">

</style>
