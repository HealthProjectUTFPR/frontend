<template>
    <el-card class="box-card">
        <template #header>
            <div class="flex h-full w-full justify-center">
                <span class="text-center"><strong>Escala de Depressão Geriátrica (GDS-15)</strong></span>
            </div>
        </template>

        <el-form
            ref="depressionForm"
            :rules="rules"
            :model="depressionForm"
            label-position="top"
        >
        <el-form-item class="ml-7" label="Data" prop="date">
            <el-date-picker
                v-model="depressionForm.date"
                type="date"
                placeholder="XX/XX/XXXX"
                size="large"
                style="width: 23em"
                format="dd/MM/yyyy"
                >
            </el-date-picker>
        </el-form-item>
            <el-form-item
            label="1. Você está basicamente satisfeito com sua vida ?"
            prop="campo1"
            >
                <el-switch 
                v-model.number="depressionForm.campo1"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="2. Você deixou muitos de seus interesses e atividades ?"
            prop="campo2"
            >
                <el-switch 
                v-model.number="depressionForm.campo2"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="3. Você sente que sua vida está vazia ?"
            prop="campo3"
            >
                <el-switch 
                v-model.number="depressionForm.campo3"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="4. Você se aborrece com frequência ?"
            prop="campo4"
            >
                <el-switch 
                v-model.number="depressionForm.campo4"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="5. Você se sente de bom humor a maior parte do tempo ?"
            prop="campo5"
            >
                <el-switch 
                v-model.number="depressionForm.campo5"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="6. Você tem medo que algum mal vá lhe acontecer ?"
            prop="campo6"
            >
                <el-switch 
                v-model.number="depressionForm.campo6"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="7. Você se sente feliz a maior parte do tempo ?"
            prop="campo7"
            >
                <el-switch 
                v-model.number="depressionForm.campo7"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="8. Você sente que sua situação não tem saída ?"
            prop="campo8"
            >
                <el-switch 
                v-model.number="depressionForm.campo8"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="9. Você prefere ficar em casa a sair e fazer coisas novas ?"
            prop="campo9"
            >
                <el-switch 
                v-model.number="depressionForm.campo9"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="10. Vocês sente com mais problema de memória do que a maioria ?"
            prop="campo10"
            >
                <el-switch 
                v-model.number="depressionForm.campo10"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="11. Você acha maravilhoso estar vivo ?"
            prop="campo11"
            >
                <el-switch 
                v-model.number="depressionForm.campo11"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="12. Você se sente inútil nas atuais circunstâncias ?"
            prop="campo12"
            >
                <el-switch 
                v-model.number="depressionForm.campo12"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="13. Você se sente cheio de energia ?"
            prop="campo13"
            >
                <el-switch 
                v-model.number="depressionForm.campo13"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="14. Você acha que sua situação é sem esperanças ?"
            prop="campo14"
            >
                <el-switch 
                v-model.number="depressionForm.campo14"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="15. Você sente que a maioria das pessoas está melhor que você ?"
            prop="campo15"
            >
                <el-switch 
                v-model.number="depressionForm.campo15"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>
        </el-form>

        <div class="px-6 py-3">
            <div>
                <strong class="mr-2">TOTAL:</strong>
                {{ total }}
            </div>
            <div>
                <el-alert v-if="total < 5"
                    title="O aluno não apresenta sinais de sintomas depressivos."
                    type="success"
                    :closable="false"
                    show-icon>
                </el-alert>
                <el-alert v-if="total >= 5"
                    title="O aluno apresenta sinais de sintomas depressivos."
                    type="warning"
                    :closable="false"
                    show-icon>
                </el-alert>     
            </div>

            <div class="mt-10 flex w-full justify-center">
                <el-button
                    type="primary"
                    icon="el-icon-success"
                    @click="submitForm()"
                >
                Salvar
                </el-button>
            </div>
        </div>
    </el-card>
</template>

<script>
import formatDateToInput from '@/helpers/formatDateToInput';

export default {
    name: 'DepressForm',
    data() {
      return {
        studentId: '',
        evaluationId: '',
        depressionForm: {
            date: '',
            campo1: false,
            campo2: false,
            campo3: false,
            campo4: false,
            campo5: false,
            campo6: false,
            campo7: false,
            campo8: false,
            campo9: false,
            campo10: false,
            campo11: false,
            campo12: false,
            campo13: false,
            campo14: false,
            campo15: false,
        },
        result: 0,
        description: {

        },
        rules: {
            date: [
          {
            type: 'date',
            required: true,
            message: 'Por favor, escolha uma data',
            trigger: 'change',
          },
        ],
        }
      }
    },
    computed: {
        total(){
            return this.depressionForm.campo1 + this.depressionForm.campo2 +  this.depressionForm.campo3 + 
            this.depressionForm.campo4 + this.depressionForm.campo5 +  this.depressionForm.campo6 +
            this.depressionForm.campo7 + this.depressionForm.campo8 +  this.depressionForm.campo9 +
            this.depressionForm.campo10 + this.depressionForm.campo11 +  this.depressionForm.campo12 +
            this.depressionForm.campo13 + this.depressionForm.campo14 +  this.depressionForm.campo15;
        }
    },
    async mounted(){
        this.studentId = sessionStorage.getItem('id');
        const { data } = await this.$axios.get(`/evaluation/${this.evaluationId}`, { params: { type: 'Depression'} });
        setTimeout(() => {
            this.depressionForm.date = formatDateToInput(data.date);
            this.depressionForm.campo1 = data.campo1;
            this.depressionForm.campo2 = data.campo2;
            this.depressionForm.campo3 = data.campo3;
            this.depressionForm.campo4 = data.campo4;
            this.depressionForm.campo5 = data.campo5;
            this.depressionForm.campo6 = data.campo6;
            this.depressionForm.campo7 = data.campo7;
            this.depressionForm.campo8 = data.campo8;
            this.depressionForm.campo9 = data.campo9;
            this.depressionForm.campo10 = data.campo10;
            this.depressionForm.campo11 = data.campo11;
            this.depressionForm.campo12 = data.campo12;
            this.depressionForm.campo13 = data.campo13;
            this.depressionForm.campo14 = data.campo14;
            this.depressionForm.campo15 = data.campo15;
        }, 100);
    },
    methods: {
        calc(){
            for(const key in this.depressionForm){
                this.result += this.depressionForm[key]
            }
        },
        async submitForm() {
            this.calc();
            const evaluation = {
                ...this.depressionForm,
                result: this.result,
            };
            try {
                await this.$axios.post(
                    `/evaluation/${this.studentId}`,
                    {
                        type: "Depression",
                        data: evaluation,
                    },
                );
            } catch (error){
                console.log(error);
            }
            this.$router.go();
        }
    },
};
</script>
