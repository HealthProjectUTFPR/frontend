<template>
  <div>
    <div class="h-7 w-full bg-gray-700 text-center">
      <span class="font-sans text-xs font-bold text-white"
        >Informações do Aluno</span
      >
    </div>
    <div class="mt-5 flex items-center justify-center gap-3">
      <div class="mb-2 flex flex-row">
        <div class="mr-2">
          <img
            src="/images/user.png"
            class="rounded-full object-cover"
            height="70"
            width="70"
          />
        </div>
        <div class="mb-2 flex flex-col">
          <span><b>Nome:</b> {{ student.name }} </span>
          <span
            ><b><b></b>Idade:</b> {{ date }}</span
          >
        </div>
      </div>
      <span class="font-sans text-sm font-bold leading-5 pr-6 pb-6"></span>
    </div>
    <div
      :key="componentKey"
      class="h-57 md: lg:7/12 mx-auto mt-16 w-7/12 shadow-2xl"
    >
      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Data de nascimento</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{
                  moment(String(student.birthDate)).format('DD/MM/YYYY')
                }}</span
              >
            </div>
          </div>
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Endereço</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ student.address }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Contato</span
              >
            </div>
            <div class="w-ful mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ student.contact }}</span
              >
            </div>
          </div>
          <div style="width: 50%">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Contato de emergência</span
              >
            </div>
            <div class="w-full mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ student.emergencyContact }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Plano de Saúde</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ student.healthPlan }}</span
              >
            </div>
          </div>
          <div style="width: 50%">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Estatura</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ student.stature }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white">Raça</span>
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ student.breed }}</span
              >
            </div>
          </div>
          <div class="w-2/4">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white">Sexo</span>
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                  text-center
                "
                >{{ sexString }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="mb-10 h-7 w-full bg-gray-700">
        <div class="mb-2 flex flex-row">
          <div class="w-full">
            <div class="text-center">
              <span class="font-sans text-xs font-bold text-white"
                >Observações</span
              >
            </div>
            <div class="mr-3 flex items-center justify-between">
              <span
                class="
                  w-full
                  my-1
                  ml-3
                  block
                  font-sans
                  text-xs
                  font-medium
                  leading-8
                "
                >{{ student.note }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end pr-2 pb-2">
        <el-button
          type="primary"
          icon="el-icon-edit-outline"
          circle
          size="medium"
          @click="toggleModalEdit = true"
        ></el-button>
        <div
          v-if="toggleModalEdit"
          class="
            absolute
            inset-0
            z-50
            flex
            items-center
            justify-center
            overflow-y-auto overflow-x-hidden
          "
        >
          <div class="relative m-auto">
            <div class="h-auto pb-3 w-80 rounded bg-white">
              <div class="mt-5 text-center">
                <span class="text-base font-bold">Editar Dados</span>
              </div>
              <el-form ref="modalEditForm" :model="studentEdit">
                <div class="mx-3 mt-3 mb-2">
                  <el-form-item prop="birthDate">
                    <el-date-picker
                      v-model="studentEdit.birthDate"
                      type="date"
                      placeholder="Data"
                      size="large"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </div>
                <div class="mx-3 mt-3 mb-2">
                  <el-form-item prop="address">
                    <el-input
                      v-model="studentEdit.address"
                      placeholder="Endereço"
                      value="fdsfds"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="contact">
                    <el-input
                      v-model="studentEdit.contact"
                      v-mask="'(##) #####-####'"
                      placeholder="Contato"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="emergency contact">
                    <el-input
                      v-model="studentEdit.emergencyContact"
                      v-mask="'(##) #####-####'"
                      placeholder="Contato de emergência"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="stature">
                    <el-input
                      v-model="studentEdit.stature"
                      placeholder="Estatura"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="breed">
                    <el-input
                      v-model="studentEdit.breed"
                      placeholder="Raça"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="sex">
                    <el-select
                      v-model="studentEdit.sex"
                      placeholder="Sexo"
                      size="large"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="healthPlan">
                    <el-input
                      v-model="studentEdit.healthPlan"
                      placeholder="Plano de saúde"
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="mx-3">
                  <el-form-item prop="note">
                    <el-input
                      v-model="studentEdit.note"
                      placeholder="Observações"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form>
              <div class="mx-3 mt-11 flex justify-between">
                <el-button type="danger" @click="handleCancel()"
                  >Fechar</el-button
                >
                <el-button type="success" @click="handleEdit()"
                  >Salvar</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="toggleModalEdit"
          class="absolute inset-0 z-40 bg-black opacity-25"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  components: {},

  data() {
    return {
      options: [
        {
          value: 'M',
          label: 'Masculino',
        },
        {
          value: 'F',
          label: 'Feminino',
        },
      ],
      moment,
      date: 0,
      componentKey: 0,
      sexString: '',
      student: {},
      studentEdit: {
        birthDate: '',
        address: '',
        contact: '',
        emergencyContact: '',
        stature: '',
        breed: '',
        sex: '',
        healthPlan: '',
        note: '',
      },
      toggleModalEdit: false,
      rulesModalCreate: {
        birthDate: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        address: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        contact: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        emergencyContact: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        stature: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        breed: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        sex: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        healthPlan: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
        note: [
          {
            required: true,
            message: 'Campo obrigatório',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  async created() {
    this.student.id = this.$route.params.id;
    await this.getStudent();
    this.studentEdit.birthDate = this.student.birthDate;
    let date = new Date();
    date = date.getFullYear();
    this.date = date - moment(String(this.student.birthDate)).format('YYYY');
    this.studentEdit.address = this.student.address;
    this.studentEdit.contact = this.student.contact;
    this.studentEdit.emergencyContact = this.student.emergencyContact;
    this.studentEdit.stature = this.student.stature;
    this.studentEdit.breed = this.student.breed;
    this.studentEdit.sex = this.student.sex;
    this.studentEdit.healthPlan = this.student.healthPlan;
    this.studentEdit.note = this.student.note;
    if (this.student.sex === 'M') {
      this.sexString = 'Masculino';
    } else {
      this.sexString = 'Feminino';
    }
  },
  methods: {
    async getStudent() {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token',
      )}`;
      const { data } = await axios.get(
        `http://localhost:3333/student/show/${this.student.id}`,
      );
      this.student = data;
      let date = new Date();
      date = date.getFullYear();
      if (this.student.sex === 'M') {
        this.sexString = 'Masculino';
      } else {
        this.sexString = 'Feminino';
      }
      this.date = date - moment(String(this.student.birthDate)).format('YYYY');
    },
    // eslint-disable-next-line require-await
    async handleEdit() {
      this.$refs.modalEditForm.validate(async (valid) => {
        if (valid) {
          try {
            await axios.patch(
              `http://localhost:3333/student/update/${this.student.id}`,
              {
                name: this.studentEdit.name,
                address: this.studentEdit.address,
                sex: this.studentEdit.sex,
                breed: this.studentEdit.breed,
                stature: this.studentEdit.stature,
                contact: this.studentEdit.contact,
                emergencyContact: this.studentEdit.emergencyContact,
                healthPlan: this.studentEdit.healthPlan,
                birthDate: this.studentEdit.birthDate,
                note: this.studentEdit.note,
                flag: true,
              },
            );
            this.$notify.success({
              title: 'Sucesso',
              message: 'Categoria atualizada com sucesso!',
            });
            this.resetForm();
            this.toggleModalEdit = false;
          } catch (e) {
            this.$notify.error({
              title: 'Erro',
              message: 'Não foi possível atualizar',
            });
          }
        }
      });
    },
    resetForm() {
      this.getStudent(this.student.id);
    },
    // eslint-disable-next-line require-await
    async handleCancel() {
      this.getStudent(this.student.id);
      this.studentEdit = this.student;
      this.studentEdit.birthDate = moment(
        String(this.student.birthDate),
      ).format('DD/MM/YYYY');
      this.toggleModalEdit = false;
    },
  },
};
</script>
