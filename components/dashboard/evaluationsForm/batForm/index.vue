<template>
    <el-card class="box-card">
        <template #header>
            <div class="flex h-full w-full justify-center">
                <span class="text-center">Bateria Funcional de Rikli e Jones (Bateria de Fullerron/Senior test)</span>
            </div>
            <div class="px-6 py-3">
                <div class="mb-3 flex flex-col">
                    <span><i>Materiais: Cadeira (43 cm), cronômetro, fita métrica, fita adesiva e régua</i></span>
                </div>
            </div>
        </template>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>Idade:</span>
                <el-input
                    v-model="input1"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>1. Sentar e levantar (30 segundos)</span>
                <el-input
                    v-model="input2"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>2. Flexão de cotovelos (30 segundos)</span>
                <el-input
                    v-model="input3"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>3. Marcha estacionária (2 minutos)</span>
                <el-input
                    v-model="input4"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>4. Sentar e alcançar os pés</span>
                <el-input
                    v-model="input5"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>5. Alcançar as costas</span>
                <el-input
                    v-model="input6"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="px-6 py-3">
            <div class="mb-3 flex flex-col">
                <span>6. TUG (2,5 mestros ou 3 metros)</span>
                <el-input
                    v-model="input7"
                    placeholder="Please input">
                </el-input>
            </div>
        </div>

        <div class="mt-10 flex w-full justify-center">
                <el-button
                    type="primary"
                    icon="el-icon-success"
                    @click="add()"
                >
                Checar resultados
                </el-button>
        </div>

        <div >
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column
                prop="result"
                label="Resultado"
                width="180">
            </el-table-column>
            <el-table-column
                prop="percent"
                label="Percentil"
                width="180">
            </el-table-column>
            <el-table-column
                prop="classif"
                label="Classificação">
            </el-table-column>
            </el-table>
        </div>

        <div class="mt-10 flex w-full justify-center">
                <el-button
                    type="primary"
                    icon="el-icon-success"
                    @click="submitForm()"
                >
                Salvar resultados
                </el-button>
        </div>
    </el-card>
</template>
<script>

export default {
    name: 'BatForm',
    data(){
        return {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            result: '',
            percent: '',
            classif: '',
            tableData: [],
        }
    },
    methods: {
        add(){
            if(this.input2.trim() === '' && this.input3.trim() === '' && this.input4.trim() === '' && this.input5.trim() === '' && this.input6.trim() === '' && this.input7.trim() === ''){
                return;
            }
            this.tableData.push({ result: this.input2});
            this.tableData.push({ result: this.input3});
            this.tableData.push({ result: this.input4});
            this.tableData.push({ result: this.input5});
            this.tableData.push({ result: this.input6});
            this.tableData.push({ result: this.input7});
            this.input2 = "";
            this.input3 = "";
            this.input4 = "";
            this.input5 = "";
            this.input6 = "";
            this.input7 = "";
        },
        submitForm() {
            console.log('submited');
        },
    },  
};
</script>
