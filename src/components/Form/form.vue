<template>
<div class="t-form">
    <!--vertical horizontal inline-->
    <a-form id="components-form-demo-normal-login" :form="form" class="u-form-list" @submit="handleSubmit" :layout="layout">
        <slot name="form"></slot>
    </a-form>
</div>
</template>

<script>
import {
    BooleanNumber
} from '@/util/utils'
export default {
    name: 'tForm',
    props: ['formLayout', 'footerBtn'],
    data() {
        return {
            layout: this.formLayout || 'inline'
        }
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, {
            name: "normal_login",
        });
    },
    computed: {},
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                console.log("values", values);
                let parms = BooleanNumber(values);
                if (!err) {
                    if (this.footerBtn) {
                        this.$emit("change", parms);
                    }
                }
            });
        },
    },
}
</script>

<style>

</style>
