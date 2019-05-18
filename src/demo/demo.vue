 <template>
  <div>
    <aa class="abc" v-model="initvalue"></aa>  
      {{'外面的值：' + initvalue}} 
    <div class="example"></div>
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
<style lang="css">
/*CSS*/
.example {
  width: 400px;
  height: 400px;
  transition: ease-in .3s;
  background: linear-gradient(0, #108b96 2px, #108b96 2px) no-repeat, 
              linear-gradient(-90deg, #108b96 2px, #108b96 2px) no-repeat, 
              linear-gradient(-180deg, #108b96 2px, #108b96 2px) no-repeat, 
              linear-gradient(-270deg, #108b96 2px, #108b96 2px) no-repeat;
  background-size: 0 2px, 2px 0, 0 2px, 2px 0;
  background-position: left top, right top, right bottom, left bottom;
}
.example:hover {
  background-size: 100% 2px,  2px 100%, 100% 2px, 2px 100%;
}


</style>
