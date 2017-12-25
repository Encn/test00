<template>
  <div class="userLogin">
    <div class="userBox">
      <p class="toggle">
        <router-link to="userLogin"  class="user">用户登录</router-link>
      </p>
      <div class="userBor">

        <input v-model="userId" name="userId" type="email" placeholder="请输入邮箱/用户名" v-validate="'required'" :class=" {'input':true, 'is-danger': errors.has('userId')} " />
        <p class="hint"> {{ errors.first('userId') }} </p>

        <input v-model="password" name="password" type="password" placeholder="请输入密码" v-validate="'required'" :class=" {'input':true, 'is-danger': errors.has('password')} " />
        <p class="hints"> {{ errors.first('password') }} </p>

        <router-link class="forgetPwd" to="../vue/checkMail">忘记密码?</router-link>

        <button type="submit" class="loginBtn" @click="login" >登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import API from './API'
export default {
  name: 'userLogin',
  data () {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$validator.validateAll().then((res) => {
        if (res) {
          API.postLogin({
            userId: this.userId,
            passWord: this.password
          }).then((res) => {
            console.log(res.data)
            if (res.data.code === '1') {
              localStorage.clear()
              var initpassword = '123456'
              localStorage.setItem('id', res.data.id)
              localStorage.setItem('userId', res.data.userId)     // 存值
              localStorage.setItem('userName', res.data.userName)
              localStorage.setItem('sex', res.data.sex)
              localStorage.setItem('deparId', res.data.deparId)
              localStorage.setItem('proLevel', res.data.proLevel)
              if (this.password === initpassword) {
                this.$router.push('/vue/modify')
              } else {
                this.$router.push('/vue')
              }
            }
            console.log(this.$router)
          }).catch((err) => {
            console.log(err)
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userLogin{
  min-width: 1200px;
  height: 974px;
  background: url('../assets/login.jpg');
  background-size: 100% 100%;
  position: relative;
}
.userBox{
  width: 387px;
  height: 433px;
  background-color: #ffffff;
  border-radius: 5px;
  position: absolute;
  right: 86px;
  top: 119px;
}
.toggle{
  height: 107px;
  position: relative;
}
.toggle .register{
  font-size: 24px;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 40px;
  color: #999999;
  left: 45px;
}
.toggle .user{
  font-size: 24px;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 40px;
  color: #368ae3;
  right: 45px;
}

.userBor input{
  width: 301px;
  height: 42px;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #cccccc;
  margin: 0 45px 2px 41px;
  font-size: 16px;
  text-indent: 5px;
  outline: none;
}
.userBor p{
  height: 20px;
  font-size: 14px;
  color: red;
  line-height: 20px;
  text-indent: 10px;
  margin: 0 0 20px 41px;
}
input.save{
  margin: 0 0 0 45px;
  width: 18px;
  height: 18px;
  background-color: #ffffff;
}
.save+label{
  font-size: 14px;
  vertical-align: top;
  color: #999999;
}
.userBor .forgetPwd{
  display: block;
  margin-left: 272px;
  margin-top: -10px;
  font-size: 14px;
  color: #0079f5;
}
.loginBtn{
  width: 299px;
  height: 43px;
  margin: 50px 44px 0;
  font-size: 20px;
  color: #ffffff;
  background-image: linear-gradient(0deg,rgba(3, 0, 0, 0.13) 0%,rgba(255, 255, 255, 0.13) 100%),
  linear-gradient(#0088f6,#0088f6);
  background-blend-mode: overlay,normal;
  border: solid 2px #5696f5;
  border-radius: 6px;
  cursor: pointer;
}
.loginBtn:focus{
  outline: none;
}
</style>
