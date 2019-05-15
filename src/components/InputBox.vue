 <template>
  <div class="box-cont">
        <div class="box">
          <span class="text">{{label}}</span>
          <input 
          :disabled="disabled"
          :validate="validate"
          v-on="inputListeners"
          v-bind="$attrs">
          <slot></slot>
        </div>
        <div v-show="errorShow" class="err-box">
          <i class="err-icon"></i>
          <span class="err">{{errorMsg}}</span>
        </div>
      </div>
</template>

<script>
  export default {
    props: {
        value: {
            default: ''
        },
        label:{
            type:String
        },
        validate: {
            type: Function
        },
        errorMsg: {
            type: String
        },
        errorShow: {
            type: Boolean
        },
        disabled: {
            type:Boolean
        }
    },
    computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          },
          blur: function (event) {
            vm.$emit('blur', event.target.value)
          }
        }
      )
    }
  },
    methods: {
      // get (num) {
      //   this.initvalue = num
      // }
    }
  }
</script>