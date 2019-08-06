<template>
  <button
    @click="$emit('click')"
    class="xu-button"
    :disabled="disabled"
    :class="[
    'xu-button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'xu-button--'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <span><slot></slot></span>
  </button>
</template>
<script>
  export default{
    name: 'XuButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
