<template v-slot:activator="{ on }">  
      
      
  <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
    
    <div class="date-picker">

      <div class="date1">
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        size="size"
        />
      </div>
      
      <div class="date2">
        <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        size="size"
        />
      </div>
    </div>
    
    <div class = "hide">
      <apexchart ref="chart" type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
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

  },
  
    async mounted() {
      
      await this.fetchData();
    },
  
    methods: {
      moment,
      defineDate(item){
        this.series[0].data.push({
          x: moment(new Date(item.date)).format("DD/MM HH:mm"),
          y: item.padPre
        })

        this.series[1].data.push({
          x: moment(new Date(item.date)).format("DD/MM HH:mm"),
          y: item.pasPre
        })
        
        this.series[2].data.push({
          x: moment(new Date(item.date)).format("DD/MM HH:mm"),
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


.date-picker {
  display: flex;
  flex-direction: row;
  margin: 5px;
  flex-wrap: wrap;
  flex: 1; 
  width: 100%;
  
  
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.date1{
  margin: 5px;
  float: right;
  flex: 1;
  
}
.date2{
  margin: 5px;
  float: left;
  flex: 1;
  
}




</style>
