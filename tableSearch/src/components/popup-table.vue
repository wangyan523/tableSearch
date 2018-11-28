<template>
  <div class="module">
    <Modal 
      v-model="isShowPopupTable"
      :mask="false"
      :closable="false"
      :footer-hide="true"
      :transfer="true"
      width="800"
    >
      <div class="module_header">
        <h6>{{module_title}}</h6>
        <span class="close" @click="moduleClick"><Icon class="closeIcon" type="md-close" /></span>
      </div>
      <div class="module_search">
        <ul>
          <li class="module_li">
            <span>{{model_name_one}}</span>
            <Select 
              v-model="option1" 
              @on-change="moduleDataChange" 
              filterable 
              class="module_search_inp"
            >
                <Option v-for="item in model_list_one" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </li>
          <li class="module_li">
            <span>{{model_name_two}}</span>
            <Select 
              v-model="option2" 
              filterable 
              class="module_search_inp2"
              @on-change="moduleDataChange2" 
            >
                <Option v-for="item in model_list_two" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </li>
          <li class="module_li">
            <Button @click="popSearchClick" class="module_btn" type="primary" icon="ios-search"></Button>
          </li>
          <li class="module_li">
            <Button @click="popDelClick" class="module_btn" type="primary">清除</Button>
          </li>
        </ul>
      </div>
      <div class="module_table">
        <Table border :columns="moduleCoData" :data="moduleDaData"></Table>
      </div>
      <div class="module_page">
        <Page 
          :total="total" 
          :current="current"
          :page-size="pageSize"
          show-total 
          show-sizer
          @on-change="modulePageChange"
          @on-page-size-change="modulePageSizeChange"
        />
      </div>
      <div class="module_close" @click="moduleClick">
        <Button type="primary">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'PopupTable',
  props: {
    total: {
      default: 10
    }, //总条数
    current: {
      default: 1
    },
    pageSize: {
      default: 10
    },
    isShowPopupTable: {
      default: false
    }, //控制弹框显示/隐藏
    moduleCoData: {
      default() {
        return [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ]
      }
    }, //弹框表格标题栏
    moduleDaData: {
      default() {
        return [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          }
        ]
      }
    }, //弹框表格数据
    module_title: {
      default: '表格弹框'
    }, //弹框的标题
    model_op_one: {}, //弹框的下拉列表1
    model_op_two: {}, //弹框的下拉列表2
    model_name_one: {
      default: '下拉1：'
    }, //弹框的下拉列表1名称
    model_name_two: {
      default: '下拉2：'
    }, //弹框的下拉列表2名称
    model_list_one: {
      default() {
        return [
          {
            value: 'New York',
            label: 'New York'
          },
        ]
      }
    }, //弹框的下拉列表1内容
    model_list_two: {
      default() {
        return [
          {
            value: 'New York',
            label: 'New York'
          },
        ]
      }
    } //弹框的下拉列表2内容
  },
  data() {
    return {
      option1: '',
      option2: ''
    }
  },
  methods: {
    moduleClick() {
      this.$emit('moduleCloseClick') //关闭弹窗的事件
    },
    popDelClick() { //清除下拉数据
      this.option1 = ''
      this.option2 = ''
      this.$emit('moduleClearClick')
    },
    popSearchClick() {
      this.$emit('moduleSearchClick') //搜索按钮的事件
    },
    moduleDataChange(value) {
      this.option1 = value
      this.$emit('moduleSelectChange', value) //下拉框1选择的事件
    },
    moduleDataChange2(value) {
      this.option2 = value
      this.$emit('moduleSelectChangeTwo', value) //下拉框2选择的事件
    },
    modulePageChange(page) {
      this.$emit('modulePageChangeClick', page)
    },
    modulePageSizeChange(pageSize) {      
      this.$emit('modulePageSizeChangeClick', pageSize)
    }
  },
}
</script>

<style lang="less" scoped>
ul{
  li{
    list-style: none;
  }
}
.module_header{
  display: flex;
  justify-content: space-between;
  h6{
    font-size: 14px;
    line-height: 30px;
  }
  .closeIcon{
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    cursor: pointer;
  }
}
.module_search{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  ul{
    display: flex;
    .module_li{
      margin-left: 10px;
    }
    li{
      display: flex;
      .module_search_inp, .module_search_inp2{
        width: 154px;
        height: 32px;
      }
      .module_search_inp2{
        width: 100px;
      }
      .module_btn{
        padding: 0 10px;
      }
      span{
        line-height: 32px;
      }
    }
  }
}
.module_table{
  margin-top: 20px;
}
.module_page{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.module_close{
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
}
</style>

