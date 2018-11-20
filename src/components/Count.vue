<template>
  <div>
    <h2>{{msg}}</h2><hr>
    <h3>{{count}}</h3>
    <p>
      <button @click="add(100)">+</button>
      <!-- 触发事件的第一个参数时函数名，后面的参数是传递的参数 -->
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <!-- 触发事件的第一个参数时函数名，后面的参数是传递的参数 -->
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import {mapState , mapGetters , mapMutations , mapActions} from 'vuex'
export default {
  data(){
    return {
      msg: 'hello world'
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods:{
    ...mapMutations(['add' , 'reduce']),
    ...mapActions(['addAction' , 'reduceAction']),
  },
  store,
}
</script>

