<template>
    <div class="h-auto w-auto">
        <div class="image flex justify-center pt-20">
            <el-avatar :size="180" :src="circleUrl"></el-avatar>
        </div>
        <div class="text-center font-bold text-2xl">
            <span>Health Project</span>
        </div>
        <div class="LoginForm pt-10 m-auto w-80">
            <el-form ref="LoginForm" :model="signup" :rules="rules">
                <el-form-item prop="name">
                    <el-input v-model="signup.name" clearable="true" type="name"
                        placeholder="Insira seu nome completo" />
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="signup.email" clearable="true" type="email" placeholder="Insira seu email" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="signup.password" show-password="true" placeholder="Insira sua senha"></el-input>
                </el-form-item>
                <el-form-item prop="passwordC">
                    <el-input v-model="signup.passwordC" show-password="true" placeholder="Confirme sua senha">
                    </el-input>
                </el-form-item>
                <el-form-item class="flex justify-center">
                    <el-select v-model="value" placeholder="Selecione seu plano">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <div class="button pt-2 flex justify-center">
            <el-button type="primary" @click="submitForm()">Cadastre-se</el-button>
        </div>
        <div class="signup flex justify-center font-medium">
            <span class="text-sm">Já possui uma conta?
                <el-link :underline="false" type="primary">
                    <span class="font-medium text-sm"> Login </span>
                </el-link>
            </span>
        </div>
    </div>
</template>
      
<script>
export default {
    name: 'SignupC',
    data() {
        return {
            circleUrl:
                'data:image/png;base64,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',
            value: '',

            signup: {
                email: '',
                password: '',
                name: '',
                passwordC: '',
            },

            options: [
                {
                    value: 'Option1',
                    label: 'Gratuito',
                },
                {
                    value: 'Option2',
                    label: 'Pago',
                },
            ],

            rules: {
                email: [
                    { required: true, message: 'Campo obrigatório', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Campo obrigatório', trigger: 'blur' },
                    { min: 8, message: 'Mínimo de 8 caracteres', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: 'Campo obrigatório', trigger: 'blur' },
                ],
                passwordC: [
                    { required: true, message: 'Campo obrigatório', trigger: 'blur' },
                ],
            },
        }
    },
}
</script>
      
<style>

</style>