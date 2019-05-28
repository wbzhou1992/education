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
        return Object.assign({},
          this.$listeners,
          {
            input: function (event) {
              vm.$emit('input', event.target.value)
            },
            blur: function (event) {
              vm.$emit('blur', event.target.value)
            }
          }
        )
      }
    }
  }
</script>