<template>
<div class="t-form-list">
    <a-row :gutter="[16,8]">
        <a-col v-for="(item, index) in data || []" :key="index" :span="6">
            <a-form-item class="t-form-list-item" :label="label && item.label" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-input v-if="!['checked'].includes(item.type)" :placeholder="item.name" v-decorator="[
              item.name,
              {
                rules: item.rules,
                initialValue: (setValue && setValue[item.name]) || '',
              },
            ]" :type="item.type">
                    <a-icon slot="prefix" :type="item.icon || 'user'" style="color: rgba(0, 0, 0, 0.25)" />
                </a-input>
                <a-checkbox v-if="['checked'].includes(item.type)" v-decorator="[
              item.name,
              {
                rules: item.rules,
                initialValue: (setValue && setValue[item.name]) || false,
              },
            ]">
                    {{ item.name }}
                </a-checkbox>
            </a-form-item>
        </a-col>
    </a-row>
    <slot name="footer" v-if="footer"></slot>
    <a-form-item v-if="!footer">
        <a-button type="primary" :loading="isLoading" html-type="submit" class="login-form-button">
            Log in
        </a-button>
        <a-button type="primary" html-type="submit" class="login-form-button">
            reg in
        </a-button>
    </a-form-item>
</div>
</template>

<script>
import {
    BooleanNumber
} from "@/util/utils";
export default {
    name: "tFromList",
    props: ["data", "footer", "label", "setValue", 'formLayout'],
    data() {
        return {
            isLoading: false,
        };
    },
    computed: {
        formItemLayout() {
            const {
                formLayout
            } = this;
            return formLayout === 'horizontal' ? {
                labelCol: {
                    span: 4
                },
                wrapperCol: {
                    span: 14
                },
            } : {};
        },
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, {
            name: "normal_login",
        });
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            this.form.validateFields((err, values) => {
                let parms = BooleanNumber(values);
                if (!err) {
                    if (this.footer) {
                        this.$emit("change", parms);
                    } else {
                        // this.$emit("change", parms);
                    }
                    console.log("Received values of form: ", parms);
                }
            });
        },
    },
    created() {},
};
</script>

<style>
</style>
