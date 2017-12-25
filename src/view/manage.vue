<template>
  <div class="adminRP">
    <div class="breadMenu">
      <router-link to="../vue" class="homeNav">账号管理 > </router-link>
      <router-link to="" class="recoNav">用户管理</router-link>
    </div>
    <ul class="RP">
      <li>
        <label for="userName4">用&ensp;户&ensp;名 : &ensp;</label>
        <input type="text" name="userName4">
      </li>
      <li>
        <label for="name4">姓&ensp;&ensp;&ensp;&ensp;名 : &ensp;</label>
        <input type="text" name="name4">
      </li>
      <li>
        <label for="department4">部&ensp;&ensp;&ensp;&ensp;门 : &ensp;</label>
        <input type="text" name="department4">
      </li>
      <li>
        <label for="mail">邮&ensp;&ensp;&ensp;&ensp;箱 : &ensp;</label>
        <input type="text" name="mail">
      </li>
      <li>
        <label for="phoneNumber">联系方式 : &ensp;</label>
        <input type="text" name="phoneNumber">
      </li>
      <li>
        <button>保存</button>
        <button @click="goBack">取消</button>
      </li>
    </ul>
    <img class="bottom" src="../assets/bottom.png">
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'adminResetPassword',
    data () {
      return {

      }
    },
    methods: {
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
  margin-top: 20px;
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
</style>