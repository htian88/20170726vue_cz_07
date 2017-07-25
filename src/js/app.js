import Vue from 'vue'
// import AppContainer from '../containers/AppContainer.vue'
import AppContainer from '../example/Component.vue'


const app = new Vue({
    render: h => h(AppContainer),
}).$mount('#app')


// new Vue({
//     el:'#app',
//     render: h => h(App)
// })