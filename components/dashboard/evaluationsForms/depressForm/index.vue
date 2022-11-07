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
            <el-form-item
            label="1. Você está basicamente satisfeito com sua vida ?"
            prop="value1"
            >
                <el-switch 
                v-model.number="depressionForm.value1"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="2. Você deixou muitos de seus interesses e atividades ?"
            prop="value2"
            >
                <el-switch 
                v-model.number="depressionForm.value2"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="3. Você sente que sua vida está vazia ?"
            prop="value3"
            >
                <el-switch 
                v-model.number="depressionForm.value3"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="4. Você se aborrece com frequência ?"
            prop="value4"
            >
                <el-switch 
                v-model.number="depressionForm.value4"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="5. Você se sente de bom humor a maior parte do tempo ?"
            prop="value5"
            >
                <el-switch 
                v-model.number="depressionForm.value5"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="6. Você tem medo que algum mal vá lhe acontecer ?"
            prop="value6"
            >
                <el-switch 
                v-model.number="depressionForm.value6"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="7. Você se sente feliz a maior parte do tempo ?"
            prop="value7"
            >
                <el-switch 
                v-model.number="depressionForm.value7"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="8. Você sente que sua situação não tem saída ?"
            prop="value8"
            >
                <el-switch 
                v-model.number="depressionForm.value8"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="9. Você prefere ficar em casa a sair e fazer coisas novas ?"
            prop="value9"
            >
                <el-switch 
                v-model.number="depressionForm.value9"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="10. Vocês sente com mais problema de memória do que a maioria ?"
            prop="value10"
            >
                <el-switch 
                v-model.number="depressionForm.value10"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="11. Você acha maravilhoso estar vivo ?"
            prop="value11"
            >
                <el-switch 
                v-model.number="depressionForm.value11"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="12. Você se sente inútil nas atuais circunstâncias ?"
            prop="value12"
            >
                <el-switch 
                v-model.number="depressionForm.value12"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="13. Você se sente cheio de energia ?"
            prop="value13"
            >
                <el-switch 
                v-model.number="depressionForm.value13"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="14. Você acha que sua situação é sem esperanças ?"
            prop="value14"
            >
                <el-switch 
                v-model.number="depressionForm.value14"
                active-text="Sim"
                inactive-text="Não"
                type="bool"
                ></el-switch>
            </el-form-item>

            <el-form-item
            label="15. Você sente que a maioria das pessoas está melhor que você ?"
            prop="value15"
            >
                <el-switch 
                v-model.number="depressionForm.value15"
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

export default {
    name: 'DepressForm',
    data() {
      return {
        depressionForm: {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            value6: 0,
            value7: 0,
            value8: 0,
            value9: 0,
            value10: 0,
            value11: 0,
            value12: 0,
            value13: 0,
            value14: 0,
            value15: 0,
        },
        description: {

        },
        rules: {

        }
      }
    },
    computed: {
        total(){
            return this.depressionForm.value1 + this.depressionForm.value2 +  this.depressionForm.value3 + 
            this.depressionForm.value4 + this.depressionForm.value5 +  this.depressionForm.value6 +
            this.depressionForm.value7 + this.depressionForm.value8 +  this.depressionForm.value9 +
            this.depressionForm.value10 + this.depressionForm.value11 +  this.depressionForm.value12 +
            this.depressionForm.value13 + this.depressionForm.value14 +  this.depressionForm.value15;
        }
    },
    methods: {
        submitForm() {
            console.log('submited');
            console.log(this.depressionForm.value1);
        }
    },
    
};
</script>
