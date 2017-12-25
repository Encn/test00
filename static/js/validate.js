import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from './zh_CN'

Validator.addLocale(zhCN)            // 配置中文

const config = {
	errorBagName: 'errors',
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true,
  events: 'input',
  inject: true
}


Vue.use(VeeValidate, config)

const dictionary = {
	zh_CN: {
		messages: {
			confirmed: () => '两次输入密码不一致',
			email: () => '请输入正确的邮箱格式',
			required: ( field ) => "请输入" + field
		},
		attributes: {
			userEmail: '邮箱',
			password: '密码',
			userName: '姓名',
			telephone: '手机号',
			oldPassword: '原密码',
			newPassword: '新密码',
			surePassword: '密码'
		}
	}
}

Validator.updateDictionary(dictionary)

Validator.extend( 'telephone', {
	messages: {
		zh_CN:field => field + '必须是11位数字',
	},
	validate: value => {
		return value.length == 11 && /^1[34578]\d{9}$/.test(value)
	}
})


// 姓名
Validator.extend('userName', {
	messages: {
		zh_CN: field => field + '必须是中文汉字',
	},
	validate: value => {
		return /^[\u4e00-\u9fa5]+$/.test(value)
	}
})

// 密码
Validator.extend('password', {
	messages: {
		zh_CN: field => field + '必须是8-16位非纯数字',
	},
	validate: value => {
		return /^(?![0-9]*$)[a-zA-Z0-9_]{8,16}$/.test(value)
	}
})

// 用户名/邮箱
Validator.extend('userEmail', {
  messages: {
    zh_CN:field => '请输入正确格式的邮箱',
  },
  validate: value => {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  }
})

// 验证码


// 确认密码
Validator.extend('confirmPassword', {
	messages: {
		zh_CN:field => '两次输入密码不一致',
	},
	validate: (value, val2) => {
		return value == val2
	}
})


