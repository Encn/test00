<template>
	<div class="added">
    <div class="addedCont">
      <div class="addedButton">
        <router-link to="/vue" class="span">查询</router-link>
        <router-link to="/vue/Added" class="span on">新增</router-link>
      </div>
      <div class="addedInput">
        <p>
          <label for="date">填写日期 : </label>
          <el-date-picker v-model="date" name="date" type="date" placeholder="选择日期"></el-date-picker>
        </p>

        <ul class="addList">
          <li>
            <label for="projectName">项目名称 : </label>
            <drop-down-menu :list="projectList" :value="selted" @input="changeProj"></drop-down-menu>
          </li>
          <li>
            <label for="projectTime">项目时间 : </label>
            <input type="text" name="projectTime" v-model="projectTime">
          </li>
          <li>
            <label for="content">工作内容 : </label>
            <textarea name="content" v-model="workContent"></textarea>
          </li>
        </ul>
        <p>
          <button @click="save">保存</button>
          <button @click="goBack">取消</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import dropDownMenu from '../components/dropdownmenu.vue'
import API from './API'
export default {
  name: 'Added',
  data () {
    return {
      userId: '',
      date: '',
      projectName: '',
      projectTime: '',
      workContent: '',
      type: 'small',
      selted: [
      ],
      projectList: [],
      departId: ''
    }
  },
  methods: {
    getUserInfor () {
      this.userId = localStorage.getItem('userId')
      console.log(this.userId)
    },
    save () {
      var _reportDate = this.date
      if (_reportDate !== '') {
        _reportDate = new Date(_reportDate).getYMD('-')
      }
      console.log(_reportDate)
      API.postAdd({
        userId: this.userId,
        // type: '1',
        reportDate: _reportDate,
        content: this.workContent,
        workTime: this.projectTime,
        projectId: this.projectId,
        status: '1'
      }).then((res) => {
        console.log(res)
        this.$router.push('/vue')
      }).catch((err) => {
        console.log(err)
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    getProjList () {
      API.postProject({}).then((res) => {
        console.log(res)
        var _data = res.data
        if (_data.data) {
          _data.data.forEach((item) => {
            item.id = item.id
            item.name = item.projectName
          })
        }
        this.projectList = _data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    changeProj (projVal) {
      this.selted = projVal            // 初始默认值
      this.projectId = projVal[0].id
    }
  },
  components: {
    dropDownMenu
  },
  mounted () {
    this.getUserInfor()
    this.getProjList()
  }
}
</script>

<style type="text/css" scoped>
.addedCont{
  min-width: 1200px;
  height: 894px;
  padding-left: 25px;
  padding-right: 25px;
}
.addedButton{
  width: 100%;
}
.addedButton>.span{
  width: 76px;
  height: 30px;
  font-size: 14px;
  color: #0088f6;
  background-color: #ffffff;
  display: inline-block;
  border: 1px solid #0088f6;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  margin: 20px 33px 7px 0px;
  box-sizing: border-box;
  cursor: pointer;
}
.on{
  color: #ffffff !important;
  background: #0088f6 !important;
}
.addedButton>.span:hover{
  color: #ffffff !important;
  background: #0088f6 !important;
}
.addedInput p{
  width: 100%;
  height: 45px;
  line-height: 55px;
  padding-left: 10px;
}
.addedInput p:first-child{
  height: 55px;
}
.addedInput p:first-child label{
  color: #999999;
  display: inline-block;
  margin-top: 10px;
}
.addedInput p:last-child{
  border: none;
  margin-top: 30px;
  text-align: center;
}
.addedInput p button{
  width: 86px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 14px;
  color: #ffffff;
  background-color: #cccccc;
  cursor: pointer;
}
.addedInput p button:first-child{
  background-color: #0088f6;
  margin-right: 165px;
}
.addedInput p button:first-child:hover{
  background-color: #017ee4;
}
.addedInput p button:last-child:hover{
  background-color: #bbbbbb;
}

.addList {
  margin-top: 10px;
}
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
.addMore{
  line-height: 55px;
  text-align: center;
  cursor: pointer;
}
.addMore:hover{
  color: #0088f6;
}
</style>