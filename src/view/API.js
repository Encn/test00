/**
 * 数据接口
 */
import axios from 'axios'
import 'babel-polyfill'

// // 添加请求拦截器
// axios.interceptors.request.use(function(config) {
//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   console.log(config);
//   if(config.method === 'post') {
//     console.log(config.data);
//       // config.data = qs.stringify( {
//       //     ...config.data
//       // })
//   }
//   // 在发送请求之前做些什么
//   return config;
// }, function(error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
// axios.interceptors.response.use(function(response) {
//   // 对响应数据做点什么
//   return response;
// }, function(error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

/**
 * [wrHost 请求接口]
 * @type {String}
 */
const wrHost = 'http://10.0.60.97:8080/workReport'  // '/api' //

/**
 * [structProPlan ProPlan数据默认结构]
 * @type {Object}
 */

// 定义类 API
class API {
  constructor () {
    // this.urlHost = '/api'
    this.createModel()
  }

  createModel () {
   /**
     * [postRegister 注册请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postRegister = (arg) => this.post(`${wrHost}/saveUser`, arg)

   /**
     * [postLogin 登录请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postLogin = (arg) => this.post(`${wrHost}/loginUser`, arg)

   /**
     * [postAdd 新增日报请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postAdd = (arg) => this.post(`${wrHost}/saveWorkReport`, arg)

   /**
     * [postRefer 查询日报请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postRefer = (arg) => this.post(`${wrHost}/findWorkReportInfoListPC`, arg)

  /**
     * [postKey 关键字查询请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postKey = (arg) => this.post(`${wrHost}/findWorkReportInfoContentPC`, arg)

  /**
     * [postProject 项目列表查询请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postProject = (arg) => this.post(`${wrHost}/findProjectInfoList`, arg)

  /**
     * [postDepartment 部门列表查询请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postDepartment = (arg) => this.post(`${wrHost}/findDepartmentList`, arg)

  /**
     * [postLook 查看日报请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postLook = (arg) => this.post(`${wrHost}/findWorkReport`, arg)

  /**
     * [findProjectInfoById 根据项目id查询项目信息]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.findProjectInfoById = (arg) => this.post(`${wrHost}/findProjectInfoById`, arg)

  /**
     * [findDepartmentById 根据部门id查询部门信息]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.findDepartmentById = (arg) => this.post(`${wrHost}/findDepartmentById`, arg)

  /**
     * [postRecompose 修改日报请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postRecompose = (arg) => this.post(`${wrHost}/updateWorkReport`, arg)

  /**
     * [postDelete 删除日报请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postDelete = (arg) => this.post(`${wrHost}/deleteWorkReport`, arg)

  /**
     * [postCheckMail 邮箱获取验证码请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postCheckMail = (arg) => this.post(`${wrHost}/sendEmail`, arg)

  /**
     * [postVerify 验证码请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postVerify = (arg) => this.post(`${wrHost}/checkRandomCode`, arg)

  /**
     * [postPassword 修改密码请求]
     * @param  {[type]} arg [description]
     * @return {[type]}     [description]
     */
    this.postPassword = (arg) => this.post(`${wrHost}/updatePassWord`, arg)
  }

  /**
   * get 请求方法
   * @param  url
   * @param  arg
   * @return {Promise}
   */
  get (url, arg) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: arg,
        withCredentials: true,
        timeout: 5000
      }).then((res) => {
        resolve(res)
      }, (err) => {
        reject(err)
      }).catch(() => {
        reject(new Error('get请求失败'))
      })
    })
  }
  /**
   * post 请求方法
   * @param  url
   * @param  arg
   * @return {Promise}
   */
  post (url, arg) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: 'data=' + JSON.stringify(arg),
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;chaset=utf-8'
        },
        timeout: 5000
      }).then((res) => {
        resolve(res)

        if (res.data.code === '0' || res.data.status && res.data.status.code === '0') {
          alert(res.data.msg || res.data.status.msg)
          // this.$alert(res.data.msg, '警告', {
          //   confirmButtonText: '确定',
          //   callback: action => {
          //     this.$message({
          //       type: 'info',
          //       message: `action: $ { action }`
          //     })
          //   }
          // })
        }
      }, (err) => {
        reject(err)
      }).catch(() => {
        reject(new Error('post请求失败'))
      })
    })
  }
}
export default new API()
