<template>
	<div class="banner">
      <img class="logo" src="../assets/logo.png" />
      <ul class="label">
        <li>
          <head-img :sex="sex" :resize="reStyle"></head-img>
        </li>
        <li @click="show">
          <span v-model="userName">{{ this.userName }}</span>&nbsp;&nbsp;&nbsp;
          <img src="../assets/user1.png" height="5" width="8" alt="">
        </li>
        <li>
          <span><router-link to="../userLogin">退出</router-link></span>
        </li>
        <li>
          <span><router-link to="">帮助</router-link></span>
        </li>
        <div class="userBanner" v-show="showOn" v-on:mouseleave="hide">
          <div class="userData">
            <div class="userDataImg">
              <head-img :sex="sex"></head-img>
            </div>
            <div class="userDataTxt">
              <span>{{ userName }}</span>
              <span>{{ departmentName }}</span>
            </div>
          </div>
          <div class="userManage">
            <router-link to="" class="span">用户管理</router-link>
            <router-link to="../vue/modify" class="span">修改密码</router-link>
          </div>
        </div>
      </ul>
    </div>
</template>
<script type="text/javascript">
import API from '../view/API'
import headImg from './headImg'
export default {
  name: 'commonHeader',
  data () {
    return {
      userId: '',
      deparId: '',
      userName: localStorage.getItem('userName'),
      departmentName: '',
      sex: '',    // 头像
      showOn: false,    // 个人信息弹出
      reStyle: true     //
    }
  },
  methods: {
    show () {
      this.showOn = !this.showOn
    },
    hide () {
      this.showOn = !this.showOn
    },
    user () {
      this.userId = localStorage.getItem('userId')
      this.userName = localStorage.getItem('userName')
      this.deparId = localStorage.getItem('deparId')
      this.sex = localStorage.getItem('sex')
    },
    depar () {
      API.findDepartmentById({
        id: this.deparId
      }).then((res) => {
        if (res.data.code === '1') {
          this.departmentName = res.data.data.departmentName
        }
      })
    }
  },
  components: {
    headImg
  },
  mounted () {
    this.user()
    this.depar()
  }
}
</script>
<style type="text/css">
.banner{
  width: 100%;
  height: 80px;
  background: url('../assets/header.jpg') no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.banner .logo{
  width: 138px;
  height: 52px;
  margin: 13px 0 0 25px;
}
.label{
  position: absolute;
  right: 40px;
  top: 22px;
}
.label li{
  float: left;
  width: 60px;
  height: 20px;
  border-right: 1px solid #ffffff;
  text-align: center;
  vertical-align: top;
}
.label li:first-child{
  width: 23px;
  border: none;
  position: relative;
}
.label li .head{
  position: absolute;
  top: -2px;
  right: 0px;
}
.label li:nth-child(2){
  width: 100px;
}
.label li:nth-child(2) img{
  vertical-align: middle;
}
.label li span{
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
}

.userBanner{
  width: 242px;
  height: 129px;
  background: url('../assets/userBanner.png') no-repeat;
  position: absolute;
  right: 98px;
  top: 18px;
  z-index: 99;
  box-shadow: 0 0 5px #0066cc;
}
.userData{
  width: 226px;
  height: 92px;
  margin: 0 8px;
  border-bottom: 1px solid #cccccc;
  position: relative;
}
.userDataImg{
  display: inline-block;
  width: 60px;
  height: 60px;
  margin: 21px 0 0 7px;
  border: 1px solid #ccc;
}

/*.userDataImg svg{
  width: 60px;
  height: 60px;
}*/
.userDataTxt{
  display: inline-block;
  position: absolute;
  top: 28px;
  left: 80px;
}
.userDataTxt>span{
  width: 100px;
  height: 14px;
  display: block;
  font-size: 12px;
  color: #333333;
  margin-bottom: 10px;
}
.userManage{
  width: 226px;
  height: 36px;
  margin: 0 8px;
}
.userManage>.span{
  display: inline-block;
  width: 110px;
  height: 14px;
  font-size: 12px;
  color: #999999;
  text-align: center;
  margin-top: 10px;
  vertical-align: top;
  cursor: pointer;
}
.userManage>.span:hover{
  color: #0088f6;
}
.userManage>.span:first-child{
  border-right: 1px solid #e5e5e5;
}
</style>