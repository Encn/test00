<template>
  <div class="recompose">
    <div class="breadMenu">
      <router-link to="../vue" class="homeNav">首页 > </router-link>
      <router-link to="../vue/recompose" class="recoNav">日报修改</router-link>
    </div>
    <ul class="addedInput">
        <li>
          <label for="date">填写日期 : </label>
          <el-date-picker v-model="date" name="date" type="date" border:none placeholder="选择日期"></el-date-picker>
        </li>
        <li>
          <label for="projectName">项目名称 : </label>
          <drop-down-menu :list="projectList" :value="selted" @input="changeProj" v-model="projectName"></drop-down-menu>
        </li>
        <li>
          <label for="projectTime">项目时间 : </label>
          <input type="text" name="projectTime" v-model="projectTime" />
        </li>
        <li>
          <label for="content">工作内容 : </label>
          <textarea name="content" v-model="workContent"></textarea>
        </li>
        <li>
          <button @click="save">保存</button>
          <button @click="goBack">取消</button>
        </li>
      </ul>
  </div>
</template>

<script type="text/javascript">
import API from './API'
import dropDownMenu from '../components/dropdownmenu.vue'
export default {
  name: 'recompose',
  data () {
    return {
      date: '',
      projectName: '',
      projectId: '',
      projectTime: '',
      workContent: '',
      reportID: '',
      selted: [],
      projectList: []
    }
  },
  methods: {
    toLook () {
      console.log(this.reportID)
      API.postLook({
        id: this.reportID,
        reportDate: this.date,
        content: this.workContent,
        workTime: this.projectTime,
        projectId: this.projectName
      }).then((res) => {
        console.log(res)
        var _data = res.data.data
        console.log(res.data.status.code)
        if (res.data.status.code === '1') {
          this.date = _data.reportDate
          this.projectId = _data.projectId
          this.projectTime = _data.workTime
          this.workContent = _data.content
          this.reportID = _data.id
          this.getProjectName(_data.projectId)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getProjectName (id) {
      // ajax , 默认选项第一个
      API.findProjectInfoById({
        id: id
      }).then((res) => {
        if (res.data.code === '1') {
          this.projectName = res.data.data.projectName
          var obj = {}
          obj.id = this.projectId
          obj.name = this.projectName
          this.selted.push(obj)
          console.log(this.selted)
        }
      })
    },
    save () {
      API.postRecompose({
        id: this.reportID,
        reportDate: this.date,
        content: this.workContent,
        workTime: this.projectTime,
        projectId: this.projectId
      }).then((res) => {
        console.log(res)
        alert('已保存!')
        this.$router.push('/vue')
      }).catch((err) => {
        console.log(err)
      })
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
    changeProj (val) {
      this.selted = val
      this.projectId = val[0].id
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.getProjList()
    this.reportID = this.$route.query.reportID
    this.toLook()
  },
  components: {
    dropDownMenu
  }
}
</script>
<style type="text/css" scoped>
.recompose{
  min-width: 1200px;
  height: 894px;
  padding: 0 25px;
}
.breadMenu{
  width: 100%;
  height: 36px;
  line-height: 50px;
}
.homeNav{
  font-size: 14px;
  color: #0088f6;
}
.recoNav{
  font-size: 14px;
  color: #999999;
}

.addedInput li{
  width: 100%;
  height: 45px;
  line-height: 55px;
  border-bottom: 1px solid #cccccc;
}
.addedInput li:nth-child(4){
  width: 100%;
  height: 310px;
  border: none;
}
.addedInput li label{
  font-size: 14px;
  color: #999999;
}
.addedInput li input{
  width: 94%;
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
.addedInput li textarea{
  width: 100%;
  height: 250px;
  outline: none;
  line-height: 24px;
  padding-left: 5px;
  padding-top: 5px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.addedInput li:last-child{
  border: none;
  margin-top: 30px;
  text-align: center;
}
.addedInput li button{
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #ffffff;
  background-color: #cccccc;
  cursor: pointer;
}
.addedInput li button:first-child{
  background-color: #0088f6;
  margin-right: 165px;
}
.addedInput li button:first-child:hover{
  background-color: #017ee4;
}
.addedInput li button:last-child:hover{
  background-color: #bbbbbb;
}
</style>