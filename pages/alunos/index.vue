<template>
    <div>
        <NavBar />
        <el-row justify="space-between" class="p-2">
            <el-col
                v-for="aluno in alunos" :key="aluno.nome"
                class="mt-2 mb-2 items-center border-b-2 border-solid p-2 flex"
            >
                <el-col :span=4 class="flex item-center justify-center">
                    <img src="/images/user.png" class="h-20 w-20 object-cover rounded-full" />
                </el-col>
                <el-col :span=18 class="flex p-4 flex-col ">
                    <span class="text-lg font-bold">{{ aluno.nome }}</span>
                    <span class="text-base text-gray-500 mt-2">{{ aluno.idade }} anos</span>
                </el-col>
                <el-col :span=2>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import NavBar from '@/components/bottomNav/index.vue'
    export default {
        components:{
            NavBar,
        },
        data() {
            return {
                alunos: [
                    {
                        nome: 'Matheus Fontes',
                        idade: 21,
                    },
                    {
                        nome: 'Camila Rodrigues',
                        idade: 22,
                    },
                    {
                        nome: 'Jair Bolsonaro',
                        idade: 61,
                    },
                    {
                        nome: 'Lula Inácio',
                        idade: 76,
                    },
                ]
            }
        }
    }
</script>