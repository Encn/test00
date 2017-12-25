<template>
  <div class="adminRP">
    <div class="breadMenu">
      <router-link to="../vue/checkMail" class="mailHide">1.邮箱验证</router-link>
      <router-link to="../vue/resetPassword" class="mailShow">2.重置密码</router-link>
    </div>
    <ul class="RP">
      <li>
        重置密码
      </li>
      <li>
        <label for="password">重置密码 : &ensp;</label>
        <input v-model="password" name="password" type="password" placeholder="请输入密码" v-validate="'required|password'" :class=" {'input':true, 'is-danger': errors.has('password')} " />
        <span class="checkPassword"> {{ errors.first('password') }} </span>
      </li>
      <li>
        <label for="confirmPassword">确认密码 : &ensp;</label>
        <input v-model="confirmPassword" type="password" name="confirmPassword" placeholder="请再次输入密码" v-validate="'required|confirmed:password'" :class=" {'input':true, 'is-danger': errors.has('confirmPassword')} " >
        <span class="checkPassword"> {{ errors.first('confirmPassword') }} </span>
      </li>
      <li>
        <button @click="savePassword">保存</button>
      </li>
    </ul>
    <img class="bottom" src="../assets/bottom.png">
    <div class="dataDel" v-show="alertClosed">
      <div class="sureDel">
        <div class="titleDel">
          <p>重置成功</p>
          <i class="iconfont icon-icon-test" @click="close"></i>
        </div>
        <h3>密码已修改成功！</h3>
        <p>
          <button>
            <router-link to="../userLogin">确定</router-link>
          </button>
        </p>
      </div>
      <div class="opacityDel"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'resetPassword',
    data () {
      return {
        alertClosed: false
      }
    },
    methods: {
      close () {
        this.alertClosed = !this.alertClosed
      },
      savePassword () {
        // this.alertClosed = !this.alertClosed

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
  width: 500px;
  height: 200px;
  margin: 50px auto;
}
.RP li{
  width: 500px;
  height: 30px;
  margin-top: 30px;
}
.RP li label{
  color: #999999;
}
.RP li input{
  width: 345px;
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
}

.checkPassword{
  display: block;
  color: #ff0000;
  text-indent: 90px;
  line-height: 22px;
}

.dataDel{
  position: fixed;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
}
.sureDel{
  width: 360px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -180px;
  margin-top: -200px;
  z-index: 999;
}
.titleDel{
  width: 100%;
  height: 25px;
  border-bottom: 2px solid #0088f6;
}
.titleDel>p{
  display: inline-block;
  font-size: 12px;
  color: #0088f6;
  line-height: 24px;
  text-indent: 10px;
}
.titleDel>i{
  margin: 5px 5px 0 0;
  float: right;
  cursor: default;
}
.titleDel>i:hover{
  color: #0088f6;
}
.sureDel>h3{
  width: 100%;
  height: 120px;
  line-height: 120px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  color: #666666;
}
.sureDel>p{
  width: 100%;
  height: 22px;
  text-align: center;
}
.sureDel>p>button{
  width: 55px;
  height: 22px;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  color: #ffffff;
  background-color: #cccccc;
}
.sureDel>p>button:first-child{
  background-color: #0088f6;
  /*margin-right: 35px;*/
}
.sureDel>p>button:first-child:hover{
  background-color: #017ee4;
}
.opacityDel{
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  opacity: 0.5;
  /*filter:Alpha(opacity=50);*/
}
</style>