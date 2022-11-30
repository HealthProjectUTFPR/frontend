<template v-slot:activator="{ on }">  
  
      
  <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">

    <div class="date-picker">

      <div class="date1">
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="do dia"
        size="size"
        />
      </div>
      
      <div class="date2">
        <el-date-picker
        v-model="value2"
        type="date"
        placeholder="até o dia"
        size="size"
        />
      </div>

      <el-select v-model="valuePrePos"  class="choose" placeholder="Selecionar" >
        <el-option
          v-for="intems in prePoso"
          :key="intems.value"
          :label="intems.label"
          :value="intems.value"
        />
      </el-select>
      
      <el-button  type="primary" round class="button"  @click="() => graficoPrePos()" >Buscar</el-button>

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
    layout : "navAlunos",
    data() {
      return{
        valuePrePos: "",
        aluno: [],
        idAluno: "",
        prePoso : [
          {
            value: 'Pré',
            label: 'Pré',
          },
          {
            value: 'Pós',
            label: 'Pós',
          },
        ],
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
          },
          {
            name: "PSE",
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
          tooltip: {
            custom: ({seriesIndex, dataPointIndex, w}) => {
              
              return (
                `<div class="arrow_box">
                  <span> test  ${ w.globals.initialSeries[seriesIndex].name} : </span>
                  ${w.globals.initialSeries[seriesIndex].data[dataPointIndex].y} 
                
                </div>`
              );
            }
          },
          title: {
            text: '',
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
    
  
    mounted() {
      this.$root.$on('idAluno',(data) => { 
        this.idAluno = data.id
        this.fetchData()
      })
    },
  
    methods: {
      moment,
      clearseries(){

        this.series[0].data.splice(0,this.series[0].data.length)
        this.series[1].data.splice(0,this.series[1].data.length)
        this.series[2].data.splice(0,this.series[2].data.length)
        this.series[3].data.splice(0,this.series[3].data.length)
        
      },

      defineDatePre(item){

        this.series[0].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.padPre,
          z: new Date(item.date)
        })

        this.series[1].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.pasPre,
          z: new Date(item.date)
        })
        
        this.series[2].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.glicemiaPre,
          z: new Date(item.date)
        })

        this.series[3].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.pseEPre,
          
        })

        this.series.forEach((s)=>{

          s.data.sort((a,b) => a.z - b.z)

        })


        this.$refs.chart.updateSeries(this.series);
        this.$refs.chart.updateOptions({
          
            title: {
              text: 'Grafico Monitoramento Pré',
              align: 'center' 
            }
          }
        )     
        
      },

      defineDatePos(item){

        this.series[0].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.padPos,
          z: new Date(item.date)
        })

        this.series[1].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.pasPos,
          z: new Date(item.date)
        })
        
        this.series[2].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.glicemiaPos,
          z: new Date(item.date)
        })

        this.series[3].data.push({
          x: moment(new Date(item.date)).format("DD/MM/YYYY"),
          y: item.pseEPos,
          z: new Date(item.date)
        })

        
        this.$refs.chart.updateSeries(this.series);
        this.$refs.chart.updateOptions({
          
          title: {
            text: 'Grafico Monitoramento Pós',
            align: 'center' 
          }
        }
      )
        
        
        
      },
      graficoPrePos () {
        this.clearseries()
        this.items.forEach((item)=>{
          
          if(new Date(item.date).valueOf() >= new Date(this.value1).valueOf() &&  new Date(item.date).valueOf() <= new Date(this.value2).valueOf() ){
              if (this.valuePrePos === "Pré"){

                this.defineDatePre(item)
                
              }
              if (this.valuePrePos === "Pós"){
                
                this.defineDatePos(item)
              }
          }
        })

      },

      async fetchData() {
        
        this.loading = true;
        try {
          const { data } = await this.$axios.get(`/prepos/student/${this.idAluno}`);
          this.items = data.data;
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
.choose{
  margin: 5px;
  float: left;
  flex: 1;
}
.button{
  margin: 5px;
  float: left;
  flex: 1;
}


.arrow_box {
  position: relative;
  background: #555;
  height: 15px;
  border: 2px solid #000000;
}
.arrow_box:after, .arrow_box:before {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(85, 85, 85, 0);
  border-right-color: #555;
  border-width: 10px;
  margin-top: -10px;
}
.arrow_box:before {
  border-color: rgba(0, 0, 0, 0);
  border-right-color: #000000;
  border-width: 13px;
  margin-top: -13px;
}

#chart .apexcharts-tooltip {
  color: #fff;
  transform: translateX(10px) translateY(10px);
  overflow: visible !important;
  white-space: normal !important;
}

#chart .apexcharts-tooltip span {
  padding: 5px 10px;
  display: inline-block;
}


</style>
