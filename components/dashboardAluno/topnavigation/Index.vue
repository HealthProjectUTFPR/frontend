<template>
  <header
    class="
      relative
      z-10
      h-16
      w-full
      items-center
      bg-white
      shadow
      md:h-20
      lg:rounded-2xl
    "
  >

    <div
      class="
        flex-center
        relative
        mx-auto
        flex
        h-full
        flex-col
        justify-center
        px-3
      "
    >
      <div
        class="
          lg:max-w-68
          relative
          flex
          w-full
          items-center
          pl-1
          sm:ml-0 sm:pr-2
        "
      >
        <div class="relative left-0 flex h-full w-3/4">
          <div class="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              class="text-4xl text-gray-500 focus:outline-none"
              @click="toggle"
            >
              &#8801;
            </button>
          </div>
          <div class="group relative flex h-full w-36 items-center lg:w-64">
            <el-select v-model="value" filterable placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div
          class="
            relative
            ml-5
            flex
            w-1/4
            items-center
            justify-end
            p-1
            sm:right-auto sm:mr-0
          "
        >
          <el-dropdown
            class="relative block"
            trigger="click"
            @command="handleCommand"
          >
            <img
              src="/images/user.png"
              class="mx-auto h-10 w-10 rounded-full object-cover"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile">Perfil</el-dropdown-item>
                <el-dropdown-item command="logout" divided
                  >Logout</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  
  name: 'TopNavigation',
  inject: ['toggle'],

  data(){
    return{

      options: [],
      alunos: [],
      value: "",
      label: "",

    }
  },
  watch: {
      alunos() {
        this.setalunos()
      },
      value(){
        this.test()
      }
    },
  mounted() {
    this.getStudents();
  },
  methods: {
    test(){
      this.$root.$emit('idAluno',{id : this.value});
    },
    setalunos (){
      this.alunos.forEach(aluno => {
        this.options.push({
          label: aluno.name,
          value: aluno.id,
        })

      });
    },
    async getStudents() {
      const { data } = await this.$axios.get('http://localhost:3333/student/index');
      this.alunos = data;  
    },
    handleCommand(command) {
      // eslint-disable-next-line default-case
      switch (command) {
        case 'logout':
          localStorage.removeItem('token');
          this.$router.push('/');
          break;
        case 'profile':
          this.$router.push('/profile');
          break;
        default:
          break;
      }
    },
  },
};
</script>
