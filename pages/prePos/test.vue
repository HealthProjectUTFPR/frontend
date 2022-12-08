<template v-slot:activator="{ on }">  
  <div>
    <div class="h-7 w-full bg-gray-700 text-center">
      <span class="font-sans text-xs font-bold text-white"
        >Gráfico do Monitoramento</span
      >
    </div>

    <div class="shadow-lg  p-4 bg-white dark:bg-gray-700 w-full">
      <div class="OptionsPicker">
        
          <div class="order1">
            <el-select 
              v-model="value" 
              class="select" 
              filterable placeholder="Alunos"
            >
              <el-option
                v-for="item in alunos"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
          <div class="order3">
            <div class="date">
              <el-date-picker 
              v-model="value1"
              type="date"
              placeholder="do dia"
              size="size"
              />
            </div>
          </div>
          <div class="order4">
            <div class="date">
              <el-date-picker
              v-model="value2"
              type="date"
              placeholder="até o dia"
              size="size"
              />
            </div>
          </div>
          <div class="order2">
            <el-select 
              v-model="valuePrePos"  
              class="select" 
              placeholder="Pré ou Pós" >
              <el-option
                v-for="intems in prePoso"
                :key="intems.value"
                :label="intems.label"
                :value="intems.value"
              />
            </el-select>
          </div>
          <div class="order5">
            <el-button  
              type="primary" 
              round class="btt2"  
              @click="() => graficoPrePos()" >
              Buscar
            </el-button>
          </div>
        </div>
      </div>
      <div
        v-show="display"
      >
        <apexchart 
        ref="chart" 
        type="line" 
        height="350" 
        :options="chartOptions" 
        :series="series"/>
      </div>
        
    
  </div>
</template>


<script>
  import moment from 'moment';

  export default {
    name: 'GraficoLinha',
    data() {
      return{
        valuePrePos: "",
        value: "",
        display: false,
        alunos: [],
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
            enabled: true,
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
    watch: {
      value(){
        this.fetchData()
      }
    },
    mounted() {
      this.getStudents()
    },
    methods: {
      moment,
      async getStudents() {
        const data = await this.$axios.$get('/student/index');
        this.alunos = data;  
        
      },
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
      // eslint-disable-next-line object-shorthand
      changeDiplay(){
        if( this.display === false){
          this.display = true; 
        }
      }, 
      graficoPrePos () {
        this.clearseries();
        this.changeDiplay()
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
          const { data } = await this.$axios.get(`/prepos/student/${this.value}`);
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
      customSharedTooltip({seriesIndex, dataPointIndex, w}){
        return (
          
                ` <div class="arrow_box">
                  ${w.globals.initialSeries[seriesIndex].name}
                  <span> ${ w.globals.initialSeries[seriesIndex].name} : </span>
                  ${w.globals.initialSeries[seriesIndex].data.y} 
                </div>`
              );
      },
    }
  }
</script>


<style scoped>
  .order1{
    order: 1;
  }
  .order2{
    order: 2;
  }
  .order3{
    order: 3;
  }
  .order4{
    order: 4;
  }
  .order5{
    order: 5;
  }    
  .OptionsPicker {
    margin: 0 auto;
    display: flex;
    width: 100%;
  }
  .select{
    margin: 5px;
  }
  .btt2{
    margin: 5px;
  }
  .date{
    margin: 5px;
  }
  @media only screen and (max-device-width: 1066px ) {
    .OptionsPicker {
      margin: 0 auto;
      display: flex;
      width: 100%;
      flex-flow: row wrap;
    }
  }
  @media only screen and (max-device-width: 1023px ) {
    .OptionsPicker {
      margin: 0 auto;
      display: flex;
      width: 100%;
      flex-flow: row;

    }
  } 
  @media only screen and (max-device-width: 790px) {
    .OptionsPicker {
      margin: 0 auto;
      display: flex;
      width: 100%;
      flex-flow: row wrap;
    }
  }

  @media only screen and (max-device-width: 507px) {
    .OptionsPicker {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 0;
      flex: 1; 
      width: 100%;
    }
    .date{
      margin: 5px;
      flex: 1;
    }
    .select{
      flex: 1;
      margin: 5px;
      width: 220px;
    }
    .btt2{
      flex: 1;
      margin: 5px;
      width: 240px;
    }
  }


</style>
