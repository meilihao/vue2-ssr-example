// server-entry.js
import Vue from 'vue'
import App from './App.vue'
const app = new Vue(App)

// the default export should be a function
// which will receive the context of the render call
// context由require('vue-server-renderer')创建的renderer传入
export default function(context) {
  return new Promise((resolve, reject) => {
    resolve(app)
  })
}
