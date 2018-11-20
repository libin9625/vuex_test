import Vue from 'vue';
import Vuex from 'vuex';//数据仓库

Vue.use(Vuex);

const state = {//状态
  count : 1,
}

const getters = {
  count: state => state.count
}

const mutations = {//改变状态对象同步
  add(state , num){//第一个参数state默认，第二个是传递的参数
    state.count += num;
  },
  reduce(state){
    state.count --;
  },
}

const actions = {//改变状态对象异步
  addAction(context){
    context.commit('add' , 10);
    setTimeout(() => {
      context.commit('reduce')
    },5000);
    console.log('我比reduce先执行了')
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
