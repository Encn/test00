import 'babel-polyfill';
import axios from 'axios';
import echarts from 'echarts';
import { DatePicker } from 'element-ui';
import '../../assets/sass/overlap.scss';
import '../../assets/sass/public.scss';
import '../../assets/sass/reset.scss';
import 'element-ui/lib/theme-default/date-picker.css';
import 'element-ui/lib/theme-default/icon.css';
export default{
  install(Vue) {
    Vue.prototype.axios = axios;
    Vue.prototype.echarts = echarts;
    Vue.component(DatePicker.name, DatePicker);

    // 时间对象
    var dateObj = {
      getCplMonth() {
        let month = this.getMonth() + 1;
        return month < 10 ? `0${month}` : month;
      },
      getCplDate() {
        let date = this.getDate();
        return date < 10 ? `0${date}` : date;
      },
      getYMD(split) {
        split = split || '-';
        return `${this.getFullYear()}${split}${this.getCplMonth()}${split}${this.getCplDate()}`;
      },
      getYM(split) {
        split = split || '-';
        return `${this.getFullYear()}${split}${this.getCplMonth()}`;
      }
    };
    Object.assign(Date.prototype, dateObj);
  }
};
