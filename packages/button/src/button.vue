<template>
    <button
            class='xu-button'
            :class="[`icon-${iconPosition}`, type ? 'xu-button--' + type : '', disabled ? 'xu-button--disabled': '']"
            @click="$emit('click')"
            :disabled="disabled">
        <xu-icon class='icon' v-if='icon && !loading' :name='icon'></xu-icon>
        <xu-icon class='loading icon' v-if='loading' name='loading'></xu-icon>
        <div class='xu-button-content'>
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import XuIcon from '../../icon/src/icon.vue'

    export default {
        name: 'XuButton',
        props: {
            type: {
                type: String,
                defalut: 'success',
                validator(value) {
                    if (value) {
                        const types = ['primary', 'success', 'info', 'warning', 'danger']
                        if(!types.includes(value)) throw new Error('type is not exist')
                    }
                    return value
                }
            },
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right')
                }
            },
        },
        components: {
            XuIcon
        }
    }
</script>
