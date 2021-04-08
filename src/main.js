// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import $ from 'jquery'
// import vueresource from 'vue-resource'
// import store from './store'

Vue.config.productionTip = false

let app = new Vue({

  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  beforeCreate(){
    console.log("创建前：");
    document.querySelector('body').setAttribute('style', 'height:100%;width:100%;margin:0px 0px 0px 0px')
  },
  created(){
    console.log("创建完成：");
  },
  beforeMount(){
    console.log("挂载前：");
  },
  mounted(){
    console.log("挂载完成：");
  },
  beforeUpdate(){
    console.log('=即将更新渲染=');
  },
  updated(){
    console.log('==更新成功==');
  }
})

