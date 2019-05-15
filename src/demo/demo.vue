 <template>
  <div>
    <aa class="abc" v-model="initvalue"></aa>  
      {{'外面的值：' + initvalue}} 
  </div>
</template>

<script>
import aa from './vbase.vue'
  export default {
    data () {
      return {
        initvalue: '1212'
      }
    },
    methods: {
      // get (num) {
      //   this.initvalue = num
      // }
    },
    components:{
      aa
    }
  }
</script>