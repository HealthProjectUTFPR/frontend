<template>
    <el-card class="box-card">
        <template #header>
            <div class="flex h-full w-full justify-center">
                <span class="text-center">Escala de Depressão Geriátrica (GDS-15)</span>
            </div>
        </template>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>1. Você está basicamente satisfeito com sua vida ?</span>
                    <el-switch
                        v-model="value1"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>2. Você deixou muitos de seus interesses e atividades ?</span>
                    <el-switch
                        v-model="value2"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>3. Você sente que sua vida está vazia ?</span>
                    <el-switch
                        v-model="value3"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>4. Você se aborrece com frequência ?</span>
                    <el-switch
                        v-model="value4"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>5. Você se sente de bom humor a maior parte do tempo ?</span>
                    <el-switch
                        v-model="value5"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>6. Você tem medo que algum mal vá lhe acontecer ?</span>
                    <el-switch
                        v-model="value6"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>7. Você se sente feliz a maior parte do tempo ?</span>
                    <el-switch
                        v-model="value7"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>8. Você sente que sua situação não tem saída ?</span>
                    <el-switch
                        v-model="value8"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>9. Você prefere ficar em casa a sair e fazer coisas novas ?</span>
                    <el-switch
                        v-model="value9"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>10. Vocês sente com mais problema de memória do que a maioria ?</span>
                    <el-switch
                        v-model="value10"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>11. Você acha maravilhoso estar vivo ?</span>
                    <el-switch
                        v-model="value11"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>12. Você se sente inútil nas atuais circunstâncias ?</span>
                    <el-switch
                        v-model="value12"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>13. Você se sente cheio de energia ?</span>
                <el-switch
                        v-model="value13"
                        active-text="Sim"
                        inactive-text="Não">
                </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>14. Você acha que sua situação é sem esperanças ?</span>
                    <el-switch
                        v-model="value14"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div class="mb-3 flex flex-col">
                <span>15. Você sente que a maioria das pessoas está melhor que você ?</span>
                    <el-switch
                        v-model="value15"
                        active-text="Sim"
                        inactive-text="Não">
                    </el-switch>
            </div>

            <div>
                <strong class="mr-2">TOTAL:</strong>
                {{ total }}
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
      }
    },
    computed: {
        total(){
            return this.value1 + this.value2 + this.value3 + this.value4 + this.value5 + this.value6 + this.value7 + this.value8 + this.value9 + this.value10 + this.value11 + this.value12 + this.value13 + this.value14 + this.value15;
        }
    },
    methods: {
        submitForm() {
            console.log('submited');
        },
    },   
};
</script>
