<template>
<div>
    <From :footerBtn="true" @change="changefn" formLayout="inline">
        <template v-slot:form>
            <FormList :data="rules.formList" :footer="true" :label="true" />
            <div style="justify-content: center;text-align: center;">
                <a-button type="primary" :loading="isLoading" html-type="submit" class="login-form-button">
                    保存
                </a-button>
                <a-button class="login-form-button">
                    关闭
                </a-button>
            </div>
        </template>
    </From>
    <From :footerBtn="true" @change="changefn" formLayout="vertical" style="margin:20px 0">
        <template v-slot:form>
            <FormList :data="rules.formList" :footer="true" :label="true" />
            <div style="justify-content: center;text-align: center;">
                <a-button type="primary" :loading="isLoading" html-type="submit" class="login-form-button">
                    保存
                </a-button>
                <a-button class="login-form-button">
                    关闭
                </a-button>
            </div>
        </template>
    </From>

    <From :footerBtn="true" @change="changefn" formLayout="horizontal">
        <template v-slot:form>
            <FormList :data="rules.formList" :footer="true" :label="true" />
            <div style="justify-content: center;text-align: center;">
                <a-button type="primary" :loading="isLoading" html-type="submit" class="login-form-button">
                    保存
                </a-button>
                <a-button class="login-form-button">
                    关闭
                </a-button>
            </div>
        </template>
    </From>
</div>
</template>

<script>
import From from '@/components/Form/form';
import FormList from '@/components/Form/form-list';
export default {
    components: {
        From,
        FormList
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
                    }
                ],
            },
        }
    },
    methods: {
        changefn(parms) {
            console.log('parms', parms);
        }
    }
}
</script>

<style>

</style>
