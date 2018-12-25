// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './main.css'
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    treeImg:require('./assets/tree2.png'),
    playMusic:require('./assets/tree2.png'),
    pauseMusic:require('./assets/tree2.png')
  },
  methods:{
    play(){

    }

  }
  // components: { App },
  // template: '<App/>'
})
