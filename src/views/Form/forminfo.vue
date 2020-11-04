<template>
<div>
    <Form :footerBtn="true" @change="changefn" formLayout="inline">
        <template v-slot:form>
            <Layoutinfo content title="基本信息">
                <template v-slot:content>
                    <FormList :data="rules.formList" :footer="true" :label="true" />
                </template>
            </Layoutinfo>
            <Layoutinfo content title="基本信息1">
                <template v-slot:content>
                    <FormList :data="rules.formList1" :footer="true" :label="true" />
                </template>
            </Layoutinfo>
            <Layoutinfo content title="基本信息2">
                <template v-slot:content>
                    <FormList :data="rules.formList2" :footer="true" :label="true" />
                </template>
            </Layoutinfo>
            <div style="justify-content: center;text-align: center;">
                <a-button type="primary" :loading="isLoading" html-type="submit" class="login-form-button">
                    保存
                </a-button>
                <a-button class="login-form-button">
                    关闭
                </a-button>
            </div>
        </template>
    </Form>
</div>
</template>

<script>
import Layoutinfo from '@/packges/Layoutinfo'
import Form from '@/components/Form/form.vue';
import FormList from '@/components/Form/form-list';
export default {
    components: {
        Layoutinfo,
        Form,
        FormList,
    },
    data() {
        return {
            isLoading: false,
            rules: {
                formList: [{
                        name: "username",
                        type: "text",
                        icon: "user",
                        label: "用户名",
                        rules: [{
                            required: true,
                            message: "Please input your username!",
                        }],
                    },
                    {
                        name: "password",
                        type: "password",
                        icon: "lock",
                        label: "密码",
                        rules: [{
                            required: true,
                            message: "Please input your password!",
                        }],
                    },
                    {
                        name: "select",
                        type: "select",
                        label: "选择",
                        rules: [{
                            required: true,
                            message: "Please input your select!",
                        }],
                        data: [{
                                id: 1,
                                name: '1'
                            },
                            {
                                id: 2,
                                name: '2'
                            },
                        ]
                    },
                    {
                        name: "checked",
                        type: "checked",
                        label: "checked",
                        rules: [{
                            required: false,
                            message: "Please input your checked!",
                        }],
                    },
                    {
                        name: "number",
                        type: "number",
                        label: "number",
                        rules: [{
                            required: false,
                            message: "Please input your number!",
                        }],
                    },

                ],
                formList1: [{
                        name: "shop",
                        type: "text",
                        label: "shop",
                        rules: [{
                            required: false,
                            message: "Please input your shop!",
                        }],
                    },
                    {
                        name: "shop1",
                        type: "text",
                        label: "shop1",
                        rules: [{
                            required: true,
                            message: "Please input your shop1!",
                        }],
                    },
                    {
                        name: "shop2",
                        type: "text",
                        label: "shop2",
                        rules: [{
                            required: true,
                            message: "Please input your shop2!",
                        }],
                    },
                    {
                        name: "shop3",
                        type: "text",
                        label: "shop3",
                        rules: [{
                            required: true,
                            message: "Please input your shop3!",
                        }],
                    },
                    {
                        name: "shop4",
                        type: "text",
                        label: "shop4",
                        rules: [{
                            required: true,
                            message: "Please input your shop4!",
                        }],
                    },
                ],
                formList2: [{
                        name: "store",
                        type: "text",
                        label: "store",
                        rules: [{
                            required: false,
                            message: "Please input your store!",
                        }],
                    },
                    {
                        name: "store2",
                        type: "text",
                        label: "store2",
                        rules: [{
                            required: true,
                            message: "Please input your store2!",
                        }],
                    },
                    {
                        name: "store3",
                        type: "text",
                        label: "store3",
                        rules: [{
                            required: true,
                            message: "Please input your store3!",
                        }],
                    },
                    {
                        name: "store4",
                        type: "text",
                        label: "store4",
                        rules: [{
                            required: true,
                            message: "Please input your store4!",
                        }],
                    },
                    {
                        name: "store5",
                        type: "text",
                        label: "store5",
                        rules: [{
                            required: true,
                            message: "Please input your store5!",
                        }],
                    },
                ]
            },
        }
    },
    methods: {
        changefn() {

        }
    }
}
</script>

<style>

</style>
