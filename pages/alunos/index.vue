<template>
  <div>
    <NavBar />
    <el-row justify="space-between" class="p-2">
      <el-col
        v-for="aluno in alunos"
        :key="aluno.id"
        class="my-2 items-center border-b-2 border-solid p-2 flex"
      >
        <el-col :span="4" class="item-center flex justify-center">
          <img
            src="/images/user.png"
            class="h-20 w-20 object-cover rounded-full"
            @click="$router.push(`/alunos/exibirAluno/${aluno.id}`)"
          />
        </el-col>
        <el-col :span="18" class="flex p-4 flex-col">
          <span class="text-lg font-bold">{{ aluno.name }}</span>
          <span class="text-base text-gray-500 mt-2"
            >Telefone: {{ aluno.contact }}</span
          >
          <span class="text-base text-gray-500 mt-2"
            >Data de nascimento:
            {{ moment(String(aluno.birthDate)).format('DD/MM/YYYY') }}</span
          >
        </el-col>
        <el-col :span="2">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(aluno.id)"
          ></el-button>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import NavBar from '@/components/bottomNav/index.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      alunos: [],
      moment,
    };
  },
  // eslint-disable-next-line require-await
  async created() {
    this.getStudents();
  },
  methods: {
    async getStudents() {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      const { data } = await axios.get('http://localhost:3333/student/index');
      this.alunos = data;
    },
    async handleDelete(index) {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token'
      )}`;
      try {
        await axios.patch(`http://localhost:3333/student/delete/${index}`);
        this.$notify.success({
          title: 'Sucesso',
          message: 'Deletado com sucesso',
        });
        this.alunos.forEach((item) => {
          if (item.id === index) {
            this.alunos.splice(this.alunos.indexOf(item), 1);
          }
        });
      } catch (e) {
        this.$notify.error({
          title: 'Erro',
          message: 'Não foi possível deletar',
        });
      }
    },
    async handleStudent(index) {
      this.$router.push(`/alunos/exibirAluno/${index}`);
    },
  },
};
</script>
