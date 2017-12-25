<template>
  <div class="headImg" :class="{'sexStyle': resize == true}">
    <svg class="icon" aria-hidden="true" v-if="sex === '2'">
      <use xlink:href="#icon-nv"></use>
    </svg>
    <svg class="icon" aria-hidden="true" v-else="sex === '1'">
      <use xlink:href="#icon-nan1"></use>
    </svg>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'headImg',
    props: ['sex', 'resize'],
    data () {
      return {

      }
    }
  }
</script>

<style type="text/css" scoped>
.headImg{
  background-color: #ffffff;
  border-radius: 50%;
  margin-top: -2px;
}
svg{
  width: 60px;
  height: 60px;
  margin-top: -2px;
}
.sexStyle{
  width: 23px;
  height: 25px;
}
.sexStyle svg{
  width: 23px;
  height: 25px;
}
</style>