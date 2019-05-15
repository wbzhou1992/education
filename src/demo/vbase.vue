
<template>
 <div>
    <ul>
      <li>{{'里面的值：'+ value}}</li> 
      <button @click="fn2">里面改变外面</button>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: { // 必须要使用value
　　　　　default: '',
　　　　},
    },

    methods: {
      fn2 () {
        this.$emit('input', this.value+2) // 这儿必须用input 发送数据，发送的数据会被父级v-model=“test”接受到，再被value=test传回来。
      }
    }
  }
  </script>