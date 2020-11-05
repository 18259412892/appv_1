<template>
<div class="t-form-list">
    <a-row :gutter="[16, 8]">
        <a-col v-for="(item, index) in data || []" :key="index" :span="6">
            <a-form-item :class="['t-form-list-item' , ['inputComp'].includes(item.type) && 't-form-l-itm-ipcom']" :label="label && item.label" v-bind="['inputComp'].includes(item.type) ? formItemLayout1 : ''" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
                <a-input v-if="!['checked', 'select', 'number','inputComp'].includes(item.type)" :placeholder="item.name" v-decorator="[
              item.name,
              {
                rules: item.rules,
                initialValue: (setValue && setValue[item.name]) || '',
              },
            ]" :type="item.type">
                    <a-icon slot="prefix" v-if="item.icon" :type="item.icon || 'user'" style="color: rgba(0, 0, 0, 0.25)" />
                </a-input>
                <a-checkbox v-if="['checked'].includes(item.type)" v-decorator="[
              item.name,
              {
                rules: item.rules,
                valuePropName: 'checked',
                initialValue:
                  (setValue && setValue[item.name]) == 1
                    ? true
                    : false || false,
              },
            ]">
                    {{ item.name }}
                </a-checkbox>
                <a-select v-if="['select'].includes(item.type)" allowClear :label="label && item.label" style="width: 100%" v-decorator="[
              item.name,
              {
                rules: item.rules,
                initialValue: (setValue && setValue[item.name]) || false,
              },
            ]">
                    <a-select-option v-value="item.id" v-for="(v, key) in item.data" :key="key">
                        {{ v.name }}
                    </a-select-option>
                </a-select>
                <a-input-number style="width: 100%" v-if="['number'].includes(item.type)" :label="label && item.label" v-decorator="[
                    item.name||'',
                    {
                        rules: item.rules,
                        initialValue: (setValue && setValue[item.name]) || '',
                    },
                    ]" />
                <a-input v-if="['inputComp'].includes(item.type)" v-decorator="[
                 item.labeKey &&item.labeKey.input,
                    {
                        initialValue:  (setValue && item.labeKey &&  setValue[item.labeKey.input]) || '',
                        rules: [
                        {
                            rules: item.rules,
                            required: true,
                            message: item.msg || '',
                        },
                        ],
                    },
                    ]" style="width: 100%">

                    <a-select slot="addonBefore" v-decorator="[item.labeKey &&item.labeKey.select , { 
                        initialValue: 
                        (setValue && item.labeKey &&  setValue[item.labeKey.select]) ||  
                        (item.selectData.length > 0 && item.selectData[0].id) || ''}]" style="width: 100px">
                        <a-select-option :value="k.id" v-for="(k , kes) in item.selectData" :key="kes"> {{k.name}}</a-select-option>
                    </a-select>
                </a-input>
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
    name: "tFormList",
    props: ["data", "footer", "label", "setValue", "formLayout"],
    data() {
        return {
            isLoading: false,
            formItemLayout1: {
                labelCol: {
                    xs: {
                        span: 24
                    },
                    sm: {
                        span: 8
                    },
                },
                wrapperCol: {
                    xs: {
                        span: 24
                    },
                    sm: {
                        span: 16
                    },
                },
            }
        };
    },
    computed: {
        formItemLayout() {
            const {
                formLayout
            } = this;
            return formLayout === "horizontal" ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
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
