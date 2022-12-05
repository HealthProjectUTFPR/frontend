<template>
  <div class=" py-4 px-4 rounded-2xl bg-white shadow">
    <div class="flex gap-2 justify-between">
      <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="-"
      start-placeholder="Data Inicial"
      end-placeholder="Data Final">
      </el-date-picker>
      <el-button type="primary" @click="downloadPDF()">Gerar Relátorio PDF</el-button>
    </div>
    <div class="grid grid-cols-1 mt-5 gap-x-8 gap-y-8 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div id="bar" class=" text-center">
        <span class="font-semibold">Independência nas atividades diárias</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData1"

        />
      </div>
      <div id="bar2" class=" text-center">
        <span class="font-semibold">Equilibrio</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData2"

        />
      </div>
      <div id="bar3" class=" text-center">
        <span class="font-semibold">Composição corporal</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData3"

        />
      </div>
      <div id="bar4" class=" text-center">
        <span class="font-semibold">Sarcopenia</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData4"

        />
      </div>
      <div id="bar5" class=" text-center">
        <span class="font-semibold">Capacidade Cardiorrespiratória.</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData5"

        />
      </div>
      <div id="bar6" class=" text-center">
        <span class="font-semibold">Depressão geriátrica</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData6"
        />
      </div>
      <div id="bar7" class=" text-center">
        <span class="font-semibold">Fragilidade</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData7"
        />
      </div>
      <div id="bar8" class=" text-center">
        <span class="font-semibold">Av8</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData8"
        />
      </div>
      <div id="bar9" class=" text-center">
        <span class="font-semibold">Av9</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData9"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import Exporter from "vue-chartjs-exporter";
import axios from 'axios'
import moment from 'moment'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'GraphC',
  components: { Bar },
  data() {
    return {
      chartData1: {},
      chartData2: {},
      chartData3: {},
      chartData4: {},
      chartData5: {},
      chartData6: {},
      chartData7: {},
      chartData8: {},
      chartData9: {},

      arrav1: [],
      arrav2: [],
      arrav3: [],
      arrav4: [],
      arrav5: [],
      arrav6: [],
      arrav7: [],
      arrav8: [],
      arrav9: [],

      student: {
        id: '',
      },

      chartOptions: {
        responsive: true
      },

      pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
    }
  },
 async created(){
    this.getUser();

    const { data } = await axios.get(`http://localhost:3333/evaluation?studentId=${sessionStorage.getItem('id')}&orderBy=createdAt`);

    data.data.forEach(d => {
      const date = moment(d.date, "YYYY-MM-DD HH:mm:ss").format('DD/MM/YYYY');

      const {
        name,
        result,
        imc,
        muscleMassIndex,
        finalFC,
        score
      } = d;

      if(name === 'AVD'){
        this.arrav1.push({total: result, date});
      }
      if(name === 'AEQ'){
        this.arrav2.push({total: result, date});
      }
      if(name === 'bodyComposition'){
        this.arrav3.push({total: imc, date});
      }
      if(name === 'sarcopenia'){
        this.arrav4.push({total: muscleMassIndex, date});
      }
      if(name === 'ACR'){
        this.arrav5.push({total: finalFC, date});
      }
      if(name === 'Depression'){
        this.arrav6.push({total: result, date});
      }
      if(name === 'fragilidade'){
        this.arrav7.push({total: score, date});
      }
    });

    console.log(this.arrav1[0]);

    const dates1 = this.arrav1.map(d => d.date).reverse()
    const totals1 = this.arrav1.map (d => d.total).reverse()

    this.chartData1 = {
      labels: dates1,
      datasets: [
        {
          data: totals1,
          label: 'AVD',
          backgroundColor: '#F08700'
        }
      ]
    }

    const dates2 = this.arrav2.map(d => d.date).reverse()
    const totals2 = this.arrav2.map (d => d.total).reverse()

    this.chartData2 = {
      labels: dates2,
      datasets: [
        {
          data: totals2,
          label: 'AEQ',
          backgroundColor: '#17BEBB'
        }
      ]
    }

    const dates3 = this.arrav3.map(d => d.date).reverse()
    const totals3 = this.arrav3.map (d => d.total).reverse()

    this.chartData3 = {
      labels: dates3,
      datasets: [
        {
          data: totals3,
          label: 'Composição Corporal',
          backgroundColor: '#E4572E'
        }
      ]
    }

    const dates4 = this.arrav4.map(d => d.date).reverse()
    const totals4 = this.arrav4.map (d => d.total).reverse()

    this.chartData4 = {
      labels: dates4,
      datasets: [
        {
          data: totals4,
          label: 'Sarcopenia',
          backgroundColor: '#9BC53D'
        }
      ]
    }

    const dates5 = this.arrav5.map(d => d.date).reverse()
    const totals5 = this.arrav5.map (d => d.total).reverse()

    this.chartData5 = {
      labels: dates5,
      datasets: [
        {
          data: totals5,
          label: 'ACR',
          backgroundColor: '#FA7921'
        }
      ]
    }

    const dates6 = this.arrav6.map(d => d.date).reverse()
    const totals6 = this.arrav6.map (d => d.total).reverse()

    this.chartData6 = {
      labels: dates6,
      datasets: [
        {
          data: totals6,
          label: 'Depression',
          backgroundColor: '#FDE74C'
        }
      ]
    }

    const dates7 = this.arrav7.map(d => d.date).reverse()
    const totals7 = this.arrav7.map (d => d.total).reverse()

    this.chartData7 = {
      labels: dates7,
      datasets: [
        {
          data: totals7,
          label: 'Fragilidade',
          backgroundColor: '#9368B7'
        }
      ]
    }
  },

  methods: {
    getUser(){
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    },

    downloadPDF() {
      const bar = document.getElementById("bar");
      const bar2 = document.getElementById("bar2");
      const bar3 = document.getElementById("bar3");
      const bar4 = document.getElementById("bar4");
      const bar5 = document.getElementById("bar5");
      const bar6 = document.getElementById("bar6");
      const bar7 = document.getElementById("bar7");
      const bar8 = document.getElementById("bar8");
      const bar9 = document.getElementById("bar9");
      const exp = new Exporter([bar, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9]);
      exp.export_pdf().then((pdf) => pdf.save("Gráficos.pdf"));
    }
  }
}
</script>