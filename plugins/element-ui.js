import Vue from 'vue'
import { Message, Notification } from 'element-ui'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/notification.css'

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification