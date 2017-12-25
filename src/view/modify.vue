<template>
  <div class="adminRP">
    <div class="breadMenu">
      <router-link to="../vue" class="homeNav">账号管理 > </router-link>
      <router-link to="" class="recoNav">修改密码</router-link>
    </div>
    <ul class="RP">
      <li>
        <label for="oldPassword">原&ensp;密&ensp;码 : &ensp;</label>
        <input type="text" name="oldPassword" v-model="oldPwd"placeholder="请输入原密码" v-validate="'required'" :class=" {'input':true, 'is-danger': errors.has('oldPassword')} " />
        <p class="hint"> {{ errors.first('oldPassword') }} </p>
      </li>
      <li>
        <label for="newPassword">新&ensp;密&ensp;码 : &ensp;</label>
        <input type="text" name="newPassword" v-model="newPwd" placeholder="请输入新密码" v-validate="'required|password'" :class=" {'input':true, 'is-danger': errors.has('newPassword')} " />
        <p class="hint"> {{ errors.first('newPassword') }} </p>
      </li>
      <li>
        <label for="surePassword">确认密码 : &ensp;</label>
        <input type="text" name="surePassword" v-model="surePwd" placeholder="请再次输入新密码" v-validate="'required|confirmPassword:'+ this.newPwd" :class="{'input': true, 'is-danger': errors.has('surePassword') }"/>
        <p class="hint"> {{ errors.first('surePassword') }} </p>
      </li>
      <li>
        <button @click="save">保存</button>
        <button @click="goBack">取消</button>
      </li>
    </ul>
    <img class="bottom" src="../assets/bottom.png">
  </div>
</template>

<script type="text/javascript">
import API from './API'
export default {
  name: 'modify',
  data () {
    return {
      userId: '',
      newPwd: '',
      oldPwd: '',
      surePwd: ''
    }
  },
  methods: {
    save () {
      this.$validator.validateAll().then((res) => {            // 表单校验
        if (res) {
          API.postPassword({
            userId: localStorage.getItem('userId'),
            newPassWord: this.surePwd,
            oldPassWord: this.oldPwd
          }).then((res) => {
            console.log(res)
            this.$router.push('/userLogin')
          })
        }
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style type="text/css" scoped>
.adminRP{
  min-width: 1200px;
  height: 894px;
  padding: 0 25px;
  position: relative;
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
.bottom{
   width: 96%;
   height: 277px;
   position: absolute;
   bottom: 0;
}
.RP{
  width: 450px;
  height: 360px;
  margin: 50px auto;
}
.RP li{
  width: 450px;
  height: 30px;
  margin-top: 40px;
}
.RP li label{
  color: #999999;
}
.RP li input{
  width: 360px;
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  text-indent: 5px;
}
.RP li:last-child{
  margin-top: 40px;
  text-align: center;
}
.RP li:last-child button{
  width: 86px;
  height: 30px;
  color: #ffffff;
  background-color: #cccccc;
  border-radius: 3px;
  border: none;
  outline: none;
  margin-left: 74px;
  cursor: pointer;
}
.RP li:last-child button:first-child{
  background-color: #0088f6;
}
.hint{
  margin-left: 82px;
  font-size: 14px;
  line-height: 18px;
  color: #ff0000;
}
</style>