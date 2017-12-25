<template lang="html">
  <div class="dropdown">
    <div class="dropdown-head" @click="handleClickShow">
      <span>{{value}}</span><i class="iconfont">&#xe609;</i>
    </div>
    <ul class="dropdown-list" v-show="showlist">
      <li v-for="item in list" :class="{'dropdown-list-item-active': item === value}" class="dropdown-list-item" @click="handleClickItem(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    value: String,
    list: Array
  },
  data () {
    return {
      showlist: false
    }
  },
  methods: {
    handleClickShow () {
      this.showlist = !this.showlist
    },
    handleClickItem (item) {
      this.$emit('input', item)
      this.showlist = false
    },
    handleClickOutSide () {
      this.showlist = false
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.dropdown{
  display: inline-block;
  box-sizing: border-box;
  color: #999;
  position: relative;
  cursor: pointer;
  .dropdown-head{
    height: 26px;
    line-height: 24px;
    text-align: center;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding-left: 10px;
    font-size: 12px;
    color: #999;
    .iconfont{
      position: relative;
      top: 2px;
    }
  }
  .dropdown-list{
    position: absolute;
    left: 0;
    top: 30px;
    z-index: 8;
    width: 100%;
    box-sizing: border-box;
    border-left: 1px solid #d2d2d2;
    border-right: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    background-color: #fff;
    .dropdown-list-item{
      height: 26px;
      line-height: 26px;
      padding-left: 10px;
      &:hover{
        background-color: #f4f4f4;
        color: #f67858;
      }
    }
    .dropdown-list-item-active{
      background-color: #f4f4f4;
      color: #f67858;
    }
  }
}
</style>
