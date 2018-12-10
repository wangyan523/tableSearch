<template>
  <div>
    <input v-focus type="text" placeholder="请输入">
    <div :class="c" class="demo" v-if="isShow">
      <span v-for="item in sz">{{item}}</span>
    </div>
  </div>
</template>

<script>
var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>'


const ncname = '[a-zA-Z][\\w\\-\\.]*';
const singleAttrIdentifier = /([^\s"'<>/=]+)/;
const singleAttrAssign = /(?:=)/;
const singleAttrValues = [
  /"([^"]*)"+/.source,
  /"([^']*)'+/.source,
  /"([^\s"'=<>`]+)/.source,
]
const attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
const startTagOpen = new RegExp('<' + qnameCapture)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>')
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/
export default {
  name: 'Directives',
  directives: {
    focus: {
      //指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  data() {
    return {
      'attrsMap': {
        ':class': 'cccc',
        'class': 'demo',
        'v-if': 'isShow'
      },
      /*解析得到的:class*/
      'classBinding': 'c',
      /*标签属性v-if*/
      'if': 'isShow',
      // v-if的条件
      'ifConditions': [
        {
          'exp': 'isShow'
        }
      ],
      // 标签属性class
      'staticClass': 'demo',
      // 标签的tag
      'tag': 'div',
      // 子标签数组
      'children': [
        {
          'attrsMap': {
            'v-for': 'item in sz'
          },
          // for循环的参数
          'alias': 'item',
          // for循环的对象
          'for': 'sz',
          // for循环是否已经被处理的标记位
          'forProcessed': true,
          'tag': 'span',
          'children': [
            {
              // 表达式，_s是一个转字符串的函数
              'expression': '_s(item)',
              'text': '{{item}}'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>


