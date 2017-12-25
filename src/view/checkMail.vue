<template>
  <div class="adminRP">
    <div class="breadMenu">
      <router-link to="../vue/checkMail" class="mailShow">1.邮箱验证</router-link>
      <router-link to="" class="mailHide">2.重置密码</router-link>
    </div>
    <ul class="RP">
      <li>
        邮箱验证
      </li>
      <li>
        <label for="userEmail">邮&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;箱 : &ensp;</label>
        <input v-model="userEmail" name="userEmail" type="email" placeholder="请输入邮箱获取验证码" v-validate="'required|userEmail'" :class=" {'input':true, 'is-danger': errors.has('userEmail')} " />
        <span class="send" @click="send">发送</span>
        <span class="checkSend"> {{ errors.first('userEmail') }} </span>
      </li>
      <li>
        <label for="verify">输入验证码 : &ensp;</label>
        <input type="text" name="verify" v-model="verifitionCode" />
        <!-- <span class="checkSend"> ! 验证码不正确</span> -->
      </li>
      <li>
        <button @click="verifyNext">下一步</button>
      </li>
    </ul>
    <img class="bottom" src="../assets/bottom.png">
  </div>
</template>

<script type="text/javascript">
import API from './API'
export default {
  name: 'checkMail',
  data () {
    return {
      userEmail: '',
      verifitionCode: ''
    }
  },
  methods: {
    send () {
      this.$validator.validateAll().then((res) => {             // 提交前表单验证
        if (res) {
          API.postCheckMail({
            receiveMailAccount: this.userEmail
          }).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err)
          })
        }
      })
    },
    verifyNext () {
      this.$validator.validateAll().then((res) => {             // 提交前表单验证
        if (res) {
          API.postVerify({
            email: this.userEmail,
            randomCode: this.verifitionCode
          }).then((res) => {
            console.log(res)
            if (res.data.code === '1') {
              this.$router.push('/resetPassword')
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      })
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
  line-height: 26px;
  padding-top: 10px;
}
.mailShow{
  color: #0088f6;
  display: inline-block;
  width: 92px;
  border-bottom: 2px solid #0088f6;
}
.mailHide{
  color: #999999;
  display: inline-block;
  width: 92px;
  border-bottom: 2px solid #999999;
}
.bottom{
   width: 96%;
   height: 277px;
   position: absolute;
   bottom: 0;
}

.RP{
  width: 550px;
  height: 200px;
  margin: 50px auto;
}
.RP li{
  width: 550px;
  height: 30px;
  margin-top: 30px;
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
.RP li:first-child{
  text-align: center;
  font-size: 24px;
  color: #0088f6;
}
.RP li:last-child{
  margin-top: 40px;
  text-align: center;
}
.RP li:last-child button{
  width: 106px;
  height: 30px;
  color: #ffffff;
  background-color: #0088f6;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
}
.send{
  display: inline-block;
  width: 56px;
  height: 30px;
  color: #ffffff;
  background-color: #0088f6;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
}
.checkSend{
  display: block;
  text-indent: 100px;
  color: #ff0000;
  line-height: 22px;
}
</style>