<template>
  <ul class="addList">
    <li>
      <label for="projectName">项目名称 : </label>
      <!-- <input type="text" name="projectName" v-model="projectName" @onblur="PJN"> -->
      <select name="projectName" v-model="projectName" @onblur="PJN"></select>
    </li>
    <li>
      <label for="projectTime">项目时间 : </label>
      <input type="text" name="projectTime" v-model="projectTime" @onblur="PJT">
    </li>
    <li>
      <label for="content">工作内容 : </label>
      <textarea name="content" v-model="workContent" @onblur="WCT"></textarea>
    </li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    name: 'addMore',
    data () {
      return {
        projectName: '',
        projectTime: '',
        workContent: ''
      }
    },
    methods: {
      PJN () {
        this.$emit('pjn', 'projectName')
      },
      PJT () {
        this.$emit('pjt', 'projectTime')
      },
      WCT () {
        this.$emit('wct', 'workContent')
      }
    }
  }
</script>

<style type="text/css" scoped>
.addList li{
  width: 100%;
  height: 45px;
  line-height: 55px;
  border-bottom: 1px solid #cccccc;
}
.addList li:nth-child(3){
  width: 100%;
  height: 310px;
  border: none;
  text-align: left;
}
.addList li label{
  font-size: 14px;
  color: #999999;
  padding-left: 10px;
}
.addList li select{
  width: 30%;
  height: 30px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333333;
  text-indent: 10px;
}
.addList li input{
  width: 90%;
  height: 30px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333333;
  text-indent: 10px;
}
.el-date-editor.el-input{
  width: 200px !important;
}
.addList li textarea{
  width: 100%;
  height: 250px;
  outline: none;
  line-height: 24px;
  padding-left: 5px;
  padding-top: 5px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}
</style>