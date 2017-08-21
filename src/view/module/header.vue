<template>
  <div class="header">
    <div class="info">
      <h1 class="log"><img src="../../assets/images/log.png" alt=""></h1>
      <div class="menu">
        <div class="type">
          <span @click="changeType(0)" :class="{on: type === 0}">全部</span>
          <span @click="changeType(1)" :class="{on: type === 1}">PC端</span>
          <span @click="changeType(2)" :class="{on: type === 2}">M端</span>
          <span @click="changeType(3)" :class="{on: type === 3}">APP端</span>
        </div>
        <div class="selected" @mouseenter="showList" @mouseleave="hideList(300)">
          <span>产品竞争关系</span>
          <i class="iconfont icon-xiala">&#xe7e2;</i>
        </div>
        <a href="javascript:;" class="help">帮助中心</a>
        <div class="user">
          <div class="usename">
            <span>小强哥</span>
            <i class="iconfont icon-xiala">&#xe7e2;</i>
          </div>
          <div class="handle">
            <a href="javascript:;">账号设置</a>
            <a href="javascript:;">退出</a>
          </div>
        </div>
      </div>
    </div>
    <div class="floatmenu" @mouseenter="showList" @mouseleave="hideList(1)"  v-show="showNavList">
      <div class="mark"></div>
      <ul class="menulist">
        <li>
          <h3><i class="iconfont">&#xe604;</i><span>传播监测</span></h3>
          <a href="javascript:;">传播影响力排名</a>
          <a href="javascript:;">消费者内容偏好</a>
          <a href="javascript:;">消费者互动评价</a>
        </li>
        <li>
          <h3><i class="iconfont">&#xe602;</i><span>产品营销</span></h3>
          <a href="javascript:;">营销漏斗</a>
          <a href="javascript:;">品牌忠诚度</a>
          <a href="javascript:;">销售预测</a>
        </li>
        <li>
          <h3><i class="iconfont">&#xe605;</i><span>市场竞争</span></h3>
          <a href="javascript:;">行业发展趋势</a>
          <a href="javascript:;">品牌市场格局</a>
          <a href="javascript:;" class="on">产品竞争关系</a>
          <a href="javascript:;">区域竞争差异</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      timer: null, // 鼠标离开
      showNavList: 0,  // 显示下拉导航
      type: 0 // 终端类型
    };
  },
  methods: {
    showList() {
      clearTimeout(this.timer);
      this.showNavList = 1;
    },
    hideList(time) {
      this.timer = setTimeout(() => {
        this.showNavList = 0;
      }, time || 300);
    },
    changeType(type) {
      this.type !== type && (this.type = type);
    }
  }
};
</script>

<style lang="scss">
  .icon-xiala {
    position: absolute;
    right: 14px;
    top: 10px;
    height: 16px;
    line-height: 16px;
    color: #b6c7d6;
    font-size: 14px;
    cursor: pointer;
  }
  .mbn {
    margin-bottom: 0!important;
  }
  .header {
    position: relative;
    min-width: 1024px;
    z-index: 9;
    .info {
      height: 60px;
      background: #1f598e;
      padding: 0 40px;
    }
    .log {
      float: left;
      margin-top: 17px;
    }
    .menu {
      float: right;
      margin-top: 14px;
      color: #8baac6;
    }
    .type {
      float: left;
      font-size: 0;
      border: 1px solid #4476a3;
      border-radius: 2px;
      border-right: none;
      span {
        display: inline-block;
        width: 54px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-right: 1px solid #4476a3;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          color: #f2f2f2;
        }
      }
      .on {
        color: #f2f2f2;
        background: #174671;
      }
    }
    .selected {
      position: relative;
      float: left;
      margin-left: 15px;
      height: 32px;
      width: 200px;
      padding-left: 15px;
      padding-right: 45px;
      border: 1px solid #4476a3;
      border-radius: 2px;
      line-height: 32px;
      color: #f2f2f2;
      cursor: pointer;
      background: #174671;
      &:hover {
        border-color: #eee;
      }
    }
    .help {
      float: left;
      margin-left: 15px;
      height: 34px;
      line-height: 34px;
      &:hover {
        color: #f2f2f2;
      }
    }
    .user {
      position: relative;
      float: left;
      margin-left: 15px;
      cursor: pointer;
      span {
        display: inline-block;
        line-height: 34px;
      }
      .icon-xiala {
        right: 0;
      }
      &:hover .handle {
        display: block;
      }
    }
    .usename {
      height: 46px;
      padding-right: 20px;
      &:hover .icon-xiala, &:hover span {
        color: #fff;
      }
    }
    .handle {
      display: none;
      position: absolute;
      right: 0;
      top: 45px;
      width: 90px;
      border-top: 1px solid #1f598e;
      text-align: center;
      a {
        display: block;
        color: #666;
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        height: 34px;
        line-height: 34px;
        &:hover {
          background: #174671;
          color: #fff;
          border-color: #174671;
        }
      }
    }
    .floatmenu {
      position: absolute;
      left: 0;
      top: 60px;
      width: 100%;
      height: 210px;
      z-index: 10;
    }
    .mark {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 210px;
      background: #000;
      opacity: 0.85;
      filter: alpha(opacity=85);
      z-index: 11;
    }
    .menulist {
      position: absolute;
      right: 0;
      top: 0;
      padding-right: 200px;
      padding-top: 30px;
      z-index: 8;
      color: #ccc;
      z-index: 12;
      li {
        float: left;
        margin-left: 95px;
      }
      h3 {
        margin-bottom: 15px;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
      }
      .iconfont {
        position: relative;
        top: 2px;
        font-weight: 500;
        font-size: 24px;
        margin-right: 5px;
        color: #fff;
      }
      a {
        display: block;
        color: #ececec;
        line-height: 30px;
        height: 30px;
        &:hover {
          color: #1f598e;
        }
      }
      .on {
        color: #1f598e;
        cursor: text;
        font-weight: bold;
      }
    }
  }
</style>
