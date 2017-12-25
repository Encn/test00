<template>
  <div>
     <head-img :sex="sex" :resize="reStyle"></head-img>
     <head-img :sex="sex"></head-img>
     <add-more></add-more>
     <drop-down-menu :list="aa" :value="selted" @input="change"></drop-down-menu>{{departId}}
  </div>
</template>

<script type="text/javascript">
  import headImg from '../components/headImg'
  import dropDownMenu from '../components/dropdownmenu.vue'
  import addMore from '../components/addMore.vue'
  export default {
    name: 'tpl',
    data () {
      return {
        sex: '',
        reStyle: true,     // true=更改头像样式
        initVal: '部门1',
        type: 'small',
        selted: [
        ],
        aa: [
          {
            id: 1,
            name: '部门1'
          },
          {
            id: 2,
            name: '部门2'
          }
        ],
        departId: ''
      }
    },
    components: {
      headImg,
      addMore,
      dropDownMenu
    },
    methods: {
      change (val) {
        this.selted = val
        this.departId = val[0].id
      }
    }
  }
</script>

<style type="text/css" scoped>

</style>