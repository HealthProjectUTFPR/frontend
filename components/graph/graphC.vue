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
      <el-button type="primary">Gerar Relátorio PDF</el-button>
    </div>
    <div class="grid grid-cols-1 mt-5 gap-x-8 gap-y-8 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div class=" text-center">
        <span>Av1</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData1"
          
        />
      </div>
      <div class=" text-center">
        <span>Av2</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData2"
          
        />
      </div>
      <div class=" text-center">
        <span>Av3</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData3"
          
        />
      </div>
      <div class=" text-center">
        <span>Av4</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData4"
          
        />
      </div>
      <div class=" text-center">
        <span>Av5</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData5"
          
        />
      </div>
      <div class=" text-center">
        <span>Av6</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData6"
        />
      </div>
      <div class=" text-center">
        <span>Av7</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData7"
        />
      </div>
      <div class=" text-center">
        <span>Av8</span>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData8"
        />
      </div>
      <div class=" text-center">
        <span>Av9</span>
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'GraphC',
  components: { Bar },
  data() {
    return {
      chartData1: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av1',
            backgroundColor: '#F08700'
          } 
        ]
      },
      chartData2: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av2',
            backgroundColor: '#17BEBB'
          } 
        ]
      },
      chartData3: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av3',
            backgroundColor: '#E4572E'
          } 
        ]
      },
      chartData4: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av4',
            backgroundColor: '#9BC53D'
          } 
        ]
      },
      chartData5: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av5',
            backgroundColor: '#FA7921'
          } 
        ]
      },
      chartData6: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av6',
            backgroundColor: '#FDE74C'
          } 
        ]
      },
      chartData7: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av7',
            backgroundColor: '#9368B7'
          } 
        ]
      },
      chartData8: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av8',
            backgroundColor: '#E87461'
          } 
        ]
      },
      chartData9: {
        labels: [ 'January', 'February', 'March', ],
        datasets: [ 
          { 
            data: [40, 20, 12],
            label: 'Av9',
            backgroundColor: '#38369A'
          } 
        ]
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
  }
}
</script>