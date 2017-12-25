<template>
  <div class="login">
    <div class="box">
      <p class="toggle">
        <router-link to="/" class="register">注册</router-link>
        <router-link to="userLogin"  class="user">用户登录</router-link>
      </p>
      <div class="loginBor">
        <div class="loginPosi">
          <input v-model="userEmail" name="userEmail" type="email" placeholder="请输入邮箱" v-validate="'required|userEmail'" :class=" {'input':true, 'is-danger': errors.has('userEmail')} " />
          <p class="hint"> {{ errors.first('userEmail') }} </p>
        </div>

        <div class="loginPosi">
          <input v-model="password" name="password" type="password" placeholder="请输入密码" v-validate="'required|password'" :class=" {'input':true, 'is-danger': errors.has('password')} " />
          <p class="hint"> {{ errors.first('password') }} </p>
        </div>

        <div class="loginPosi">
          <input v-model="userName" name="userName" type="text" placeholder="请输入姓名" v-validate="'required|userName'" :class=" {'input':true, 'is-danger': errors.has('userName')} " />
          <p class="hint"> {{ errors.first('userName') }} </p>
        </div>

        <div class="loginPosi">
          <input v-model="telephone" name="telephone" type="text" placeholder="请输入手机号" v-validate="'required|telephone'" :class=" {'input':true, 'is-danger': errors.has('telephone')} " />
          <p class="hint"> {{ errors.first('telephone') }} </p>
        </div>

        <button type="submit" class="regBtn" @click="register">注册</button>

      </div>
    </div>
  </div>
</template>

<script>
import API from './API'
export default {
  name: 'login',
  data () {
    return {
      userEmail: '',
      password: '',
      userName: '',
      telephone: ''
    }
  },
  methods: {
    register () {
      this.$validator.validateAll().then((res) => {             // 提交前表单验证
        if (res) {
          API.postRegister({
            userId: this.userEmail,
            passWord: this.password,
            userName: this.userName,
            sex: '1',
            department: 1,
            proLevel: 1,
            phone: this.telephone,
            email: this.userEmail,
            status: '1'        // 0 无效 1有效
          }).then((res) => {
            console.log(res)
            if (res.data.code === '1') {
              this.$router.push('/userLogin')
            }
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  min-width: 1200px;
  height: 974px;
  background: url('../assets/login.jpg');
  background-size: 100% 100%;
  position: relative;
}
.box{
  width: 387px;
  height: 500px;   /* 576px */
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
  color: #368ae3;
  left: 45px;
}
.toggle .user{
  font-size: 24px;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 40px;
  color: #999999;
  right: 45px;
}
.loginBor .loginPosi{
  width: 301px;
  height: 62px;
  margin: 0 45px 2px 41px;
}
.loginPosi>input,.loginPosi>select{
  width: 301px;
  height: 42px;
  background-color: #ffffff;
  border-radius: 6px;
  border: solid 1px #cccccc;
  font-size: 16px;
  color: #757575;
  line-height: 42px;
  outline: none;
}
.loginPosi>input{
  text-indent: 5px;
}
.loginPosi .hint{
  margin-left: 12px;
  font-size: 14px;
  line-height: 18px;
  color: #ff0000;
}
.regBtn{
  width: 299px;
  height: 43px;
  margin: 35px 44px;   /* 15px */
  font-size: 20px;
  color: #ffffff;
  background-image: linear-gradient(0deg,rgba(3, 0, 0, 0.13) 0%,rgba(255, 255, 255, 0.13) 100%),
  linear-gradient(#0088f6,#0088f6);
  background-blend-mode: overlay,normal;
  border: solid 2px #5696f5;
  border-radius: 6px;
  cursor: pointer;
}
.regBtn:focus{
  outline: none;
}
</style>