<template>
  <div id="app">
    <!-- <Button @click="btnClick" type="primary">按钮</Button>
    <PopupTable :isShowPopupTable="isShowPopupTable" @moduleCloseClick="moduleCloseClick" />
    <i-button :size="'large'" @on-click="bHandleClick"> -->
      <!-- <i-icon slot="icon" @on-click="bHandleClick">🌹</i-icon> -->
    <!-- </i-button>
    <com-a ref="coma" @click.native="handleComAClick"></com-a> -->
    <render-func></render-func>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  import RenderFunc from './view/renderFun.vue'
  import PopupTable from "./components/popup-table";
  import {
    Button
  } from "iview";
  import IButton from "./components/i-button";
  import ComA from "./components/a";
  import mixins_name from "./mixins/name.js";
  import mixin_emmiter from "./mixins/emitter.js";
  let mixin = {
    data() {
      return {
        isData: "yes"
      };
    }
  };
  export default {
    name: "App",
    components: {
      PopupTable,
      IButton,
      ComA,
      RenderFunc
    },
    provide() {
      return {
        app: this
      };
    },
    // mixins: [mixins_name],
    // mixins: [mixin],
    mixins: [mixin_emmiter],
    data() {
      return {
        isShowPopupTable: false,
        name: "wyyyyyy"
      };
    },
    methods: {
      btnClick() {
        this.isShowPopupTable = true;
        console.log(this.isShowPopupTable);
      },
      moduleCloseClick() {
        this.isShowPopupTable = false;
      },
      bHandleClick(event) {
        this.$router.push("/form");
        console.log(event);
      },
      handleComAClick() {
        this.broadcast("componentb", "com-click", "hello,comb");
      }
    },
    mounted() {
      let coma = this.$refs.coma;
      // console.log(coma, coma.title);
      // coma.sayHello()
      this.$on("app-click", msg => {
        console.log(msg);
      });
    }
  };
</script>

<style lang="less">
.foo {
  padding: 5px;
  margin: 5px;
  font-size: 5px;
}
</style>
