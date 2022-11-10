<template v-slot:activator="{ on }">  
      
      
  <div class="demo-date-picker">
    <span class="demonstration">Default</span>
    <div class="block">
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day"
      size="size"
      />
    </div>

    <span class="demonstration">Default</span>
    <div class="block">
      <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      size="size"
      />
    </div>
    
    <apexchart ref="chart" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
 
    
</template>


<script>
  import moment from 'moment';



  export default {
    name: 'GraficoLinha',
    data() {
      return{
        items: ['item'],
        value1:null,
        value2:null,
        loading: false,
        dialogFormVisible: false,
        form: {
          date: "date",
          horarioPos : "date",
          horarioPre : "date",
          pasPre : "number",
          pasPos : "number",
          padPre: "number",
          padPos: "number",
          glicemiaPre: "number",
          glicemiaPos: "number",
          horarioTreino: "number",
          pseEPre: "number",
          pseEPos: "number",
          observacao: "string",
        },
        rules: {
          date: [
            { required: true, message: 'O campo nome é obrigatório!', trigger: 'blur' },
            { min: 3, max: 70, message: 'O nome deve ser de no mínimo 3 carácteres e no máximo 70', trigger: 'blur' }
          ],
        },

        series: [
          {
            name: "PAD",
            data: []
          },
          {
            name: "PAS",
            data: []
          },
          {
            name: "GLICEMIA",
            data: []
          }
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Grafico Monitoramento',
            align: 'center'
          },
          legend: {
            position: 'top',
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
              highlightDataSeries: false
            },
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: [],
          }
        },
        
      }
    },
    
    watch: {
      
      value2() {
        

        this.items.forEach((item)=>{
          
          if(new Date(item.date).valueOf() >= new Date(this.value1).valueOf() &&  new Date(item.date).valueOf() <= new Date(this.value2).valueOf() ){
              
              this.defineDate(item)
          }

        })
        
      
      },
    items: {
      
      handler(val) {

        val.forEach((item) => {

          if(new Date(item.date).valueOf() <= new Date(this.value1).valueOf() ){
            
            this.series[0].data.push({
              x: moment(new Date(item.horarioPre).valueOf()).format("DD/MM HH:mm"),
              y: item.padPre
            })
            this.series[1].data.push({
              x: moment(new Date(item.horarioPre).valueOf()).format("DD/MM HH:mm"),
              y: item.pasPre
            })
            this.series[2].data.push({
              x: moment(new Date(item.horarioPre).valueOf()).format("DD/MM HH:mm"),
              y: item.glicemiaPre
            })
            this.$refs.chart.updateSeries(this.series);
          }
        })
      },
      deep: true
    }

  },
  
    async mounted() {
      
      await this.fetchData();
    },
  
    methods: {
      moment,
      defineDate(item){
        this.series[0].data.push({
          x: moment(new Date(item.date).valueOf()).format("DD/MM HH:mm"),
          y: item.padPre
        })
        this.series[1].data.push({
          x: moment(new Date(item.date).valueOf()).format("DD/MM HH:mm"),
          y: item.pasPre
        })
        this.series[2].data.push({
          x: moment(new Date(item.date).valueOf()).format("DD/MM HH:mm"),
          y: item.glicemiaPre
        })
        this.$refs.chart.updateSeries(this.series);
      },

      async fetchData() {
        
        this.loading = true;
        try {
          const { data } = await this.$axios.get("/prepos/get");
          this.items = data;
          
        } catch (e) {
          this.$notify.error({
            title: 'Erro',
            message: 'Não foi possível carregar'
          });
        } finally {
          this.loading = false;
        }
      },
  
      getEntity(row) {
        this.form = { ...row };
        this.dialogFormVisible = true
      },

    
    }

  }
</script>


<style scoped>

</style>
