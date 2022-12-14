<template>
    <el-card class="box-card">
        <template #header>
            <div class="flex h-full w-full justify-center">
                <span class="text-center font-extrabold uppercase">Avaliação de Fragilidade</span>
            </div>
        </template>
        <el-form
        ref="FragilityForm"
        :rules="rules"
        :model="fragilityForm"
        label-position="top">
            <div class="px-6 py-3">
                <div class="mp-3 flex flex-col">
                    <el-form-item label="Data" prop="date">
                        <el-date-picker
                            v-model="fragilityForm.date"
                            type="date"
                            placeholder="XX/XX/XXXX"
                            size="large"
                            style="width: 23em"
                            format="dd/MM/yyyy"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <!-- <el-row :gutter="24"> -->
                        <!-- <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item
                                label="Estatura"
                                prop="number">
                                    <el-input
                                    disabled
                                    v-model.number="fragilityForm.estatura"
                                    placeholder="Estatura"
                                    type="number"
                                    ></el-input>
                                </el-form-item>
                            </div>
                        </el-col> -->
                        <!-- <el-col :span="8"> -->
                            <div class="grid-content bg-purple">
                                <el-form-item
                                label="Peso(KG)"
                                prop="weight"
                                >
                                    <el-input
                                    v-model.number="fragilityForm.weight"
                                    placeholder="weight (kg)"
                                    type="number"
                                    ></el-input>
                                </el-form-item>
                            </div>
                        <!-- </el-col> -->
                        <!-- <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item
                                label="IMC"
                                prop="number"
                                >
                                    <el-input
                                    v-model.number="fragilityForm.imc"
                                    placeholder="IMC"
                                    type="number"
                                    >
                                    </el-input>
                                </el-form-item> -->
                                <!-- <span>{{imc}}</span> -->
                            </div>
                        <!-- </el-col> -->
                    <!-- </el-row> -->
                </div>
            </div>
            <div class="mb-3 flex flex-col">
                <el-form-item
                label="1. Nos últimos 12 meses o Sr(a) tem diminuído de peso sem fazer nenhuma dieta? Resposta em KGs"
                prop="number"
                >
                    <el-input
                    v-model.number="fragilityForm.looseWeight"
                    type="number"
                    placeholder="please input"
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
            <el-form-item
                label="2. Com que frequência, na última semana, o Sr(a) sentiu que tudo que fez exigiu um grande esforço?"
                prop="number"
                >
                    <el-input
                    type="number"
                    v-model.number="fragilityForm.activityDifficultLastWeekFrequency"
                    placeholder="please input" 
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
            <el-form-item
                label="3. Com que frequência, na última semana, o Sr(a) sentiu que não conseguia levar adiante as suas coisas?"
                prop="number"
                >
                    <el-input
                    type="number"
                    v-model.number="fragilityForm.KeepGoingDifficultLastWeekFrequency"
                    placeholder="please input" 
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
                <el-form-item
                label="4. Força de preensão"
                prop="number"
                >
                    <el-input
                    type="number"
                    v-model.number="fragilityForm.handgripStrength"
                    placeholder="please input"   
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
                <el-form-item
                label="5. Teste de caminhada habitual(Tempo)"
                prop="number"
                >
                    <el-input
                    type="number"
                    v-model.number="fragilityForm.time"
                    placeholder="please input"   
                    >
                    </el-input>
                </el-form-item>
            </div>
    
            <div class="mb-3 flex flex-col">
            <el-form-item
                label="6. IPAQ(autorrelato de caminhada, atividades moderadas e atividades vigorosas), resposta em Kcal"
                prop="number"
                >
                    <el-input
                    type="number"
                    v-model.number="fragilityForm.pergunta6"
                    placeholder="please input"   
                    >
                    </el-input>
                </el-form-item>
            </div>

        <div class="mb-3 flex-col justify-center">
            <el-row :gutter="20">
                <el-col :span="8">
                    <b><span>Caminhada</span></b>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Dias por Semana"
                    prop="number"
                    >
                        <el-input
                        type="number"
                        v-model.number="fragilityForm.walkingDays"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    </div>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Minutos por Dia"
                    prop="number"
                    >
                        <el-input
                        type="number"
                        v-model.number="fragilityForm.walkingMinutesPerDay"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    <div class="mb-3 flex flex-col">
                        <span>METs: {{mets1}}</span>
                    </div>    
                    </div>          
                </el-col>
                <el-col :span="8">
                    <b><span>Atividade Moderada</span></b>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Dias por Semana"
                    prop="number"
                    >
                        <el-input
                        type="number"
                        v-model.number="fragilityForm.moderateActivityDays"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    </div>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Minutos por Dia"
                    prop="number"
                    >
                        <el-input
                        type="number"
                        v-model.number="fragilityForm.moderateActivityMinutesPerDay"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    <div class="mb-3 flex flex-col">
                        <span>METs: {{mets2}}</span>
                    </div>    
                    </div>           
                </el-col>
                <el-col :span="8">
                    <b><span>Atividade Vigorosa</span></b>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Dias por Semana"
                    prop="number"
                    >
                        <el-input
                        type="number"
                        v-model.number="fragilityForm.vigorousActivityDays"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>
                    </div>
                    <div class="grid-content bg-purple">
                    <el-form-item
                    label="Minutos por Dia"
                    prop="number"
                    >
                        <el-input
                        type="number"
                        v-model.number="fragilityForm.vigorousActivityMinutesPerDay"
                        placeholder="please input"   
                        >
                        </el-input>
                    </el-form-item>   
                    </div>
                    <div class="mb-3 flex flex-col">
                        <span>METs: {{mets3}}</span>
                    </div>             
                </el-col>
            </el-row>
        </div>
        <div class="mb-3 flex flex-col">
            <span>METs Total: {{metsTotal}}</span>
            <span>KCAL: {{kcal}}</span>
        </div>

        <el-divider content-position="center">Descrição</el-divider>
            <el-alert
            :title="`Mets Total:${metsTotal}`"
            :type="type"
            :description="description"
            show-icon
            :closable="false">
            </el-alert>
            <div class="mt-10 flex w-full justify-center">
            <el-button
                type="primary"
                icon="el-icon-success"
                @click="submitForm('fragilityForm')"
                >Salvar
            </el-button>
        </div>
    </el-form>
    </el-card>
  </template>
  
<style>
    .input {
        width: 350px;
    }
</style>


  <script>
  import formatDateToInput from '@/helpers/formatDateToInput'
  import imcFunc from '@/helpers/evaluations/fragility/imc/index';

    export default {
        name: 'FragilityForm',
        props: {
        edit: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            studentId: '',
            evaluationId: '',
            type: '',
            fragilityForm: {
                date: '',
                weight: '',
                looseWeight:'',
                activityDifficultLastWeekFrequency:'',
                KeepGoingDifficultLastWeekFrequency:'',
                walkingDays:'',
                walkingMinutesPerDay:'',
                moderateActivityDays:'',
                moderateActivityMinutesPerDay:'',
                vigorousActivityDays:'',
                vigorousActivityMinutesPerDay:'',
                time:'',
                handgripStrength:'',
                imc:'',
                mets1:'',
                mets2:'',
                mets3:'',
                metsTotal:'',
                kcal:'',
                score:'',
                result:'',
            },
            rules: {
                date: [{
                    type: 'date',
                    required: true,
                    message: 'Por favor, escolha uma data',
                    trigger: 'change',
                },],
            },
        };
    },
    computed:{
        imc() {
            return imcFunc(this.fragilityForm.weight, '20');
        },
        mets1(){
            if(this.fragilityForm.walkingDays !== "" && this.fragilityForm.walkingMinutesPerDay !== ""){
                return (this.fragilityForm.walkingDays * this.fragilityForm.walkingMinutesPerDay * 3.3)
            }else    
                return ''
        },
        mets2(){
            if(this.fragilityForm.moderateActivityDays !== "" && this.fragilityForm.moderateActivityMinutesPerDay !== "")
                return (this.fragilityForm.moderateActivityDays * this.fragilityForm.moderateActivityMinutesPerDay * 3.3)
            else    
                return ''
        },
        mets3(){
            if(this.fragilityForm.vigorousActivityDays !== "" && this.fragilityForm.vigorousActivityMinutesPerDay !== "")
                return (this.fragilityForm.vigorousActivityDays * this.fragilityForm.vigorousActivityMinutesPerDay * 3.3)
            else    
                return ''
        },
        metsTotal(){
            if(this.fragilityForm.walkingDays !== "" || this.fragilityForm.walkingMinutesPerDay !== "" || 
            this.fragilityForm.moderateActivityDays !== "" || this.fragilityForm.moderateActivityMinutesPerDay !== "" || 
            this.fragilityForm.vigorousActivityDays !== "" || this.fragilityForm.vigorousActivityMinutesPerDay !== "")
                return ((this.fragilityForm.walkingDays * this.fragilityForm.walkingMinutesPerDay * 3.3) + 
                (this.fragilityForm.moderateActivityDays * this.fragilityForm.moderateActivityMinutesPerDay * 3.3) + 
                (this.fragilityForm.vigorousActivityDays * this.fragilityForm.vigorousActivityMinutesPerDay * 3.3))
            else    
                return ''
        },
        kcal(){
            if(this.fragilityForm.weight!=="")
            return this.fragilityForm.weight * (this.fragilityForm.walkingDays * this.fragilityForm.walkingMinutesPerDay * 3.3) + 
                (this.fragilityForm.moderateActivityDays * this.fragilityForm.moderateActivityMinutesPerDay * 3.3) + 
                (this.fragilityForm.vigorousActivityDays * this.fragilityForm.vigorousActivityMinutesPerDay * 3.3)
            else return ''
        },
    },
    async mounted() {
      this.studentId = sessionStorage.getItem('id')
      if (this.$props.edit) {
        this.evaluationId = this.$route.params.id
        const { data } = await this.$axios.get(
          `/evaluation/${this.evaluationId}`,
          { params: { type: 'fragilidade' } }
        )
      setTimeout(() => {
        this.fragilityForm.date = formatDateToInput(data.date)
        this.fragilityForm.weight = data.weight
        this.fragilityForm.looseWeight = data.looseWeight
        this.fragilityForm.activityDifficultLastWeekFrequency = data.activityDifficultLastWeekFrequency
        this.fragilityForm.KeepGoingDifficultLastWeekFrequency = data.KeepGoingDifficultLastWeekFrequency
        this.fragilityForm.walkingDays = data.walkingDays
        this.fragilityForm.walkingMinutesPerDay = data.walkingMinutesPerDay
        this.fragilityForm.moderateActivityDays = data.moderateActivityDays
        this.fragilityForm.vigorousActivityDays = data.vigorousActivityDays
        this.fragilityForm.vigorousActivityMinutesPerDay = data.vigorousActivityMinutesPerDay
        this.fragilityForm.handgripStrength = data.handgripStrength
        this.fragilityForm.imc = data.imc
        this.fragilityForm.mets1 = data.mets1
        this.fragilityForm.mets2 = data.mets2
        this.fragilityForm.mets3 = data.mets3
        this.fragilityForm.metsTotal = data.metsTotal
        this.fragilityForm.kcal = data.kcal
        this.fragilityForm.score = data.score
        this.fragilityForm.result = data.result
      }, 100)
    }
  },
    methods:{
        calc(){
            this.fragilityForm.mets1 = (this.fragilityForm.walkingDays * this.fragilityForm.walkingMinutesPerDay * 3.3)
            this.fragilityForm.mets2 = (this.fragilityForm.moderateActivityDays * this.fragilityForm.moderateActivityMinutesPerDay * 3.3)
            this.fragilityForm.mets3 = (this.fragilityForm.vigorousActivityDays * this.fragilityForm.vigorousActivityMinutesPerDay * 3.3)
            this.fragilityForm.metsTotal = ((this.fragilityForm.walkingDays * this.fragilityForm.walkingMinutesPerDay * 3.3) + 
                (this.fragilityForm.moderateActivityDays * this.fragilityForm.moderateActivityMinutesPerDay * 3.3) + 
                (this.fragilityForm.vigorousActivityDays * this.fragilityForm.vigorousActivityMinutesPerDay * 3.3))
            this.fragilityForm.kcal = this.fragilityForm.weight * (this.fragilityForm.walkingDays * this.fragilityForm.walkingMinutesPerDay * 3.3) + 
                (this.fragilityForm.moderateActivityDays * this.fragilityForm.moderateActivityMinutesPerDay * 3.3) + 
                (this.fragilityForm.vigorousActivityDays * this.fragilityForm.vigorousActivityMinutesPerDay * 3.3)
        },
        submitForm(formName) {
            this.calc()
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                try {
                    if (this.$props.edit) {
                    await this.$axios.patch(`/evaluation/${this.evaluationId}`, {
                        type: 'fragilidade',
                        data: this.fragilityForm,
                    })
                    this.$message({
                        message: 'Avaliação atualizada com sucesso!',
                        type: 'success',
                    })
                    } else {
                    const evaluation = {
                        ...this.fragilityForm,
                    }
                    await this.$axios.post(`/evaluation/${this.studentId}`, {
                        type: 'fragilidade',
                        data: evaluation,
                    })
                    this.$message({
                        message: 'Avaliação criada com sucesso!',
                        type: 'success',
                    })
                    }
                    setTimeout(() => {
                    this.$router.push({ path: '/' })
                    }, 500)
                } catch (error) {
                    this.$message.error({ message: `${error.response.data.message}` })
                }
                }
                return false
            })
        },
    }
};
  </script>