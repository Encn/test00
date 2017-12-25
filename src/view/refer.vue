<template>
  <div class="refer">
    <div class="referCont">
      <div class="referButton">
        <router-link to="" class="span on">查询</router-link>
        <router-link to="../vue/Added" class="span">新增</router-link>
        <!-- <router-link to="" class="span">导出</router-link> -->
      </div>
      <ol class="fillIn">
        <li>

          <el-form ref="form" label-width="80px" style="color:#999999;">
            <el-form-item label="填写日期 : " style="display:inline-block;color:#999999;">
                <el-date-picker
                        v-model="filters.column.create_start_date"
                        type="date"
                        :picker-options="pickerBeginDateBefore"
                        format="yyyy-MM-dd"
                        placeholder="开始日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="至" label-width="25px" style="display:inline-block;color:#999999;">
                <el-date-picker
                        v-model="filters.column.create_end_date"
                        type="date"
                        format="yyyy-MM-dd"
                        :picker-options="pickerBeginDateAfter"
                        placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
          </el-form>

        </li>
        <li>
          <label for="project">项目 : </label>
           <drop-down-menu :list="projectList" :value="projSelted" @input="changeProj" ></drop-down-menu>
        </li>
        <li v-if="AuthorId=='2'">
          <label for="department">部门 : </label>
          <drop-down-menu :list="deparList" :value="deparSelted" @input="changeDepar"></drop-down-menu>
          </select>
        </li>
        <li  v-if="AuthorId !=='3'">
          <label for="names">姓名 : </label>
          <input type="text" name="names" v-model="name">
        </li>
        <li>
          <label for="keyword">关键字 : </label>
          <input type="text" name="keyword" v-model="content">
        </li>
        <li>
          <button @click="search">搜 索</button>
          <el-button class="button" type="warning" @click="checkDel" :disabled="multipleSelection.length == 0">删 除</el-button>
        </li>
      </ol>

      <el-table
        ref="multipleTable"
        :data="items"
        tooltip-effect="dark"
        style="width: 100%;text-align:center;"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          label="填写日期"
          align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称"
          align="center">
          <template slot-scope="scope">{{ scope.row.projectName }}</template>
        </el-table-column>
        <el-table-column
          prop="times"
          label="项目时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="content"
          label="工作内容"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope" class="iconMargin">
              <i class="iconfont icon-chakanxiangqing" title="查看" @click="handleLook(scope.$index, scope.row)"></i>
              <i class="iconfont icon-shanchu" title="删除" @click="handleDel(scope.$index, scope.row)" v-if="AuthorId =='3'"></i>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="dataDel" v-show="alertClosed">
      <div class="sureDel">
        <div class="titleDel">
          <p>确认删除</p>
          <i class="iconfont icon-icon-test" @click="close"></i>
        </div>
        <h3>确定要把所选日报进行删除吗？</h3>
        <p>
          <button :data-type="deleteType" ref="deleteRef" @click="sureDel">确定</button>
          <button @click="close">取消</button>
        </p>
      </div>
      <div class="opacityDel"></div>
    </div>
	</div>
</template>

<script>
import API from './API'
import dropDownMenu from '../components/dropdownmenu.vue'
export default {
  name: 'refer',
  data () {
    return {
      Array: [],
      AuthorId: '',
      deleteType: '',         // 批量删除
      multipleSelection: [],
      projectName: '',
      department: '',
      content: '',
      name: '',
      currentPage4: 1,          // 当前页码
      deparList: [],
      projectList: [],
      items: [],
      selActive: false,
      alertClosed: false,
      total: null,
      currentDelId: '',
      filters: {                // 日期选择
        column: {
          create_start_date: '',
          create_end_date: ''
        }
      },
      pickerBeginDateBefore: {         // 设定区间
        disabledDate: (time) => {
          let beginDateVal = this.filters.column.create_end_date
          if (beginDateVal) {
            return time.getTime() > beginDateVal
          }
        }
      },
      pickerBeginDateAfter: {          // 设定区间
        disabledDate: (time) => {
          let beginDateVal = this.filters.column.create_start_date
          if (beginDateVal) {
            return time.getTime() < beginDateVal
          }
        }
      },
      type: 'small',
      deparSelted: [
      ],
      depar: [],
      deparId: '',
      projSelted: [
      ],
      proj: [],
      projectId: ''
    }
  },
  methods: {
    handleSelectionChange (val) {                     // 复选框
      console.log(val)
      this.multipleSelection = val
    },
    checkDel () {
      this.alertClosed = !this.alertClosed                   // 批量删除
      this.deleteType = 'deleteAll'
    },
    // 删除多个请求
    deleteAll () {
      var arr = []
      this.multipleSelection.map(item => {
        var obj = {}
        obj.id = item.id
        arr.push(obj)
      })
      console.log('in')
      console.log(arr)

      API.postDelete({
        data: arr,
        status: 0
      }).then((res) => {
        console.log(res)
        // 刷新
        if (res.data.code === '1') {
          this.alertClosed = !this.alertClosed
        }
        location.reload()
      })
    },
    // 单个删除请求
    deleteSingle () {
      API.postDelete({
        data: [
          {
            id: this.currentDelId
          }
        ],
        status: 0
      }).then((res) => {
        console.log(res)
        this.alertClosed = !this.alertClosed
        if (res.data.code === '1') {
          this.items.forEach((item, index) => {
            if (item.reportID === this.currentDelId) {
              this.items.splice(index, 1)
              this.total--
            }
          })
        }
      })
    },
    handleDel (index, row) {
      this.currentDelId = row.reportID                // 取当前行id
      console.log(row)
      this.alertClosed = !this.alertClosed
      this.deleteType = 'deleteSingle'
    },
    sureDel () {                                      // 确认删除
      var _type = this.$refs.deleteRef.getAttribute('data-type')
      if (_type === 'deleteAll') {
        console.log('1')
        this.deleteAll()
      } else {
        console.log('2')
        this.deleteSingle()
      }
    },
    close () {
      this.alertClosed = !this.alertClosed               // 关闭确认删除弹窗
    },

    handleLook (index, row) {            // 查看
      console.log(index)
      console.log(row)
      this.$router.push('/vue/look?reportID=' + row.reportID)
      console.log(this.$router)
    },

    handleCurrentChange (val) {                       // 分页
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
      this.search()
    },
    getUserInfor () {                                 // id 职级
      this.userId = localStorage.getItem('userId')
      this.AuthorId = localStorage.getItem('proLevel')
    },

    search () {
      var _start = this.filters.column.create_start_date
      if (_start !== '') {
        _start = new Date(_start).getYMD('-')
      }
      console.log(_start)
      var _end = this.filters.column.create_end_date
      if (_end !== '') {
        _end = new Date(_end).getYMD('-')
      }
      console.log(_end)
      // 搜索
      API.postRefer({
        userId: this.AuthorId === '3' ? this.userId : '',    // this.userId
        deparId: this.deparId,                               // 部门id
        projectId: this.projectId,                           // 项目id
        content: this.content,
        userName: this.name,
        startDate: _start,
        endDate: _end,
        pageNum: this.currentPage4,                          // 当前页码
        pageSize: '10'                                       // 显示条数
      }).then((res) => {
        console.log('res')
        console.log(res)
        var _data = res.data
        this.items = []
        if (_data.data) {
          _data.data.forEach((item) => {
            item.date = item.reportDate
            item.times = item.workTime
            item.content = item.content
            item.reportID = item.id
            item.currSel = false
          })
          // console.log(_data.data)
          this.items = _data.data
        }

        if (_data.totalRecord) {
          this.total = _data.totalRecord.totalRecord
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getProjList () {
      API.postProject({}).then((res) => {
        console.log(res)
        var _data = res.data
        if (_data.data) {
          _data.data.forEach((item) => {
            item.id = item.id
            item.name = item.projectName
          })
        }
        this.projectList = _data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    changeProj (projVal) {
      this.projSelted = projVal            // 初始默认值
      this.projectId = projVal[0].id
    },
    getDeparList () {
      if (this.AuthorId !== '2') {
        return
      }
      API.postDepartment({}).then((res) => {
        console.log(res)
        var _data = res.data
        if (_data.data) {
          _data.data.forEach((item) => {
            item.id = item.id
            item.name = item.departmentName
          })
        }
        this.deparList = _data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    changeDepar (deparVal) {
      this.deparSelted = deparVal
      this.deparId = deparVal[0].id
    }
  },
  components: {
    dropDownMenu
  },
  mounted () {
    this.getUserInfor()
    this.search()
    this.getProjList()
    this.getDeparList()
  }
}
</script>

<style scoped>
.cell i{
  display: inline-block;
  margin: 0 15px;
}
.cell i:first-child:hover{
  color: #0088f6;
}
.cell i:last-child:hover{
  color: #ff0000;
}

.referCont{
  min-width: 1200px;
  height: 894px;
  padding-left: 25px;
  padding-right: 25px;
}
.referButton{
  width: 100%;
}
.referButton>.span{
  width: 76px;
  height: 30px;
  font-size: 14px;
  color: #0088f6;
  background-color: #ffffff;
  display: inline-block;
  border: 1px solid #0088f6;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  margin: 20px 33px 20px 0px;
  box-sizing: border-box;
  cursor: pointer;
}
.on{
  color: #ffffff !important;
  background: #0088f6 !important;
}
.referButton>.span:hover{
  color: #ffffff !important;
  background: #0088f6 !important;
}
.fillIn{
  width: 100%;
  height: 36px;
}
.fillIn li{
  float: left;
  margin-left: 25px;
  font-size: 14px;
  color: #999999;
  height: 36px;
  line-height: 36px;
  margin-bottom: 10px;
}
.fillIn li label{
  color: #48576a;
}
.fillIn li:first-child{
  margin: 0px;
}
.fillIn li input,.fillIn li select{
  width: 160px !important;
  height: 36px !important;
  border: 1px solid #cccccc;
  border-radius: 3px;
  outline: none;
  text-indent: 5px;
  font-size: 14px;
  color: #333333;
  line-height: 36px;
  box-sizing: border-box;
}
.el-date-editor.el-input{
  width: 160px !important;
}
.el-form-item{
  margin-bottom: 0 !important;
}
.fillIn li:last-child button{
  width: 76px;
  height: 36px;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  line-height: 36px;
  margin-right: 36px;
  outline: none;
  cursor: pointer;
  background-color: #DDDDDD;
}
.button{
  padding: 0 !important;
}
.fillIn li:last-child button:hover{
  background-color: #cccccc;
}
.content{
  width: 100%;
  margin-top: 21px;
  table-layout:fixed;
  /*border: none;*/
}
.content thead tr{
  height: 30px;
  background-color: #dee3e4;
}
.content thead tr th{
  font-size: 14px;
  color: #666666;
  font-weight: normal;
  height: 30px;
  border-right: 1px solid #ffffff;
}
.content tbody tr{
  height: 46px;
  border-bottom: 1px dashed #c8cdce;
}
.content tbody tr td{
  text-align: center;
  font-size: 14px;
  color: #333333;
}
.content tbody tr td i.iconfont{
  color: #999999;
  font-size: 16px;
  display: inline-block;
  text-align: center
}
.icon-fuxuankuang{
  color: #0088f6;
}
.icon-fuxuan1{
  color: #0088f6;
}
.content tbody tr td:last-child>i:first-child{
  margin-right: 30px;
}
.content tbody tr td:last-child>i:last-child{
  margin-left: 30px;
}
.content tbody tr td:last-child>i.iconfont:hover{
  color: #0088f6;
}
.block{
  float: right;
  margin: 20px 100px 0 0;
  overflow: hidden;
}

.dataDel{
  position: fixed;
  left: 0;
  top: 0;
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
  cursor: pointer;
}
.sureDel>p>button:first-child{
  background-color: #0088f6;
  margin-right: 35px;
}
.sureDel>p>button:first-child:hover{
  background-color: #017ee4;
}
.sureDel>p>button:last-child:hover{
  background-color: #bbbbbb;
}
.opacityDel{
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  opacity: 0.5;
}
</style>