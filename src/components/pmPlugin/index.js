import 'babel-polyfill'
import axios from 'axios'

export default{
  install (Vue) {
    Vue.prototype.axios = axios

    // 时间对象
    var dateObj = {
      getCplMonth () {
        let month = this.getMonth() + 1
        return month < 10 ? `0${month}` : month
      },
      getCplDate () {
        let date = this.getDate()
        return date < 10 ? `0${date}` : date
      },
      getYMD (split) {
        split = split || '-'
        return `${this.getFullYear()}${split}${this.getCplMonth()}${split}${this.getCplDate()}`
      },
      getYM (split) {
        split = split || '-'
        return `${this.getFullYear()}${split}${this.getCplMonth()}`
      }
    }
    Object.assign(Date.prototype, dateObj)
  }
}
