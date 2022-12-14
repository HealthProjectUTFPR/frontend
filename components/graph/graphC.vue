<template>
  <div class="p-4 rounded-2xl bg-white shadow">
    <div class="flex gap-2 justify-between">
      <el-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="['00:00:00', '23:59:59']"
        format="yyyy/MM/dd"
        value-format="yyyy-MM-dd"
        @change="getGraph()"
      >
      </el-date-picker>
      <el-button type="primary" @click="downloadPDF()"
        >Gerar Relátorio PDF</el-button
      >
    </div>
    <div
      class="
        grid grid-cols-1
        mt-5
        gap-8
        2xl:grid-cols-3
        xl:grid-cols-2
        lg:grid-cols-2
        md:grid-cols-2
        sm:grid-cols-1
      "
    >
      <div id="bar" class="text-center">
        <span class="font-semibold">Independência nas atividades diárias</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData1" />
      </div>
      <div id="bar2" class="text-center">
        <span class="font-semibold">Equilibrio</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData2" />
      </div>
      <div id="bar3" class="text-center">
        <span class="font-semibold">Composição corporal</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData3" />
      </div>
      <div id="bar4" class="text-center">
        <span class="font-semibold">Sarcopenia</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData4" />
      </div>
      <div id="bar5" class="text-center">
        <span class="font-semibold">Capacidade Cardiorrespiratória.</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData5" />
      </div>
      <div id="bar6" class="text-center">
        <span class="font-semibold">Depressão geriátrica</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData6" />
      </div>
      <div id="bar7" class="text-center">
        <span class="font-semibold">Fragilidade</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData7" />
      </div>
      <div id="bar8" class="text-center">
        <span class="font-semibold">Bateria funcional</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData8" />
      </div>
      <div id="bar9" class="text-center">
        <span class="font-semibold">Bateria funcional</span>
        <Bar :chart-options="chartOptions" :chart-data="chartData9" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import Exporter from 'vue-chartjs-exporter';
import axios from 'axios';
import moment from 'moment';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

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

      value: '',

      chartOptions: { responsive: true },
    };
  },
  created() {
    this.chartData1 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'AVD',
          backgroundColor: '#F08700',
        },
      ],
    };

    this.chartData2 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'AEQ',
          backgroundColor: '#17BEBB',
        },
      ],
    };

    this.chartData3 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'IMC',
          backgroundColor: '#E4572E',
        },
      ],
    };

    this.chartData4 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Sarcopenia',
          backgroundColor: '#9BC53D',
        },
      ],
    };

    this.chartData5 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'ACR',
          backgroundColor: '#FA7921',
        },
      ],
    };

    this.chartData6 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Depressão',
          backgroundColor: '#FDE74C',
        },
      ],
    };

    this.chartData7 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Fragilidade',
          backgroundColor: '#9368B7',
        },
      ],
    };

    this.chartData8 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Sentar e abaixar',
          backgroundColor: '#E87461',
        },
      ],
    };

    this.chartData9 = {
      labels: [],
      datasets: [
        {
          data: [],
          label: 'Flexão de cotovelo',
          backgroundColor: '#38369A',
        },
      ],
    };
  },

  methods: {
    getUser() {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'token',
      )}`;
    },

    downloadPDF() {
      const bar = document.getElementById('bar');
      const bar2 = document.getElementById('bar2');
      const bar3 = document.getElementById('bar3');
      const bar4 = document.getElementById('bar4');
      const bar5 = document.getElementById('bar5');
      const bar6 = document.getElementById('bar6');
      const bar7 = document.getElementById('bar7');
      const bar8 = document.getElementById('bar8');
      const bar9 = document.getElementById('bar9');
      const exp = new Exporter([
        bar,
        bar2,
        bar3,
        bar4,
        bar5,
        bar6,
        bar7,
        bar8,
        bar9,
      ]);
      exp.export_pdf().then((pdf) => pdf.save('Gráficos.pdf'));
    },

    resetGraph() {
      this.chartData1 = {
        labels: [],
        datasets: [
          {
            label: 'AVD',
            backgroundColor: '#F08700',
          },
        ],
      };
      this.chartData2 = {
        labels: [],
        datasets: [
          {
            label: 'AEQ',
            backgroundColor: '#17BEBB',
          },
        ],
      };
      this.chartData3 = {
        labels: [],
        datasets: [
          {
            label: 'IMC',
            backgroundColor: '#E4572E',
          },
        ],
      };
      this.chartData4 = {
        labels: [],
        datasets: [
          {
            label: 'Sarcopenia',
            backgroundColor: '#9BC53D',
          },
        ],
      };
      this.chartData5 = {
        labels: [],
        datasets: [
          {
            label: 'ACR',
            backgroundColor: '#FA7921',
          },
        ],
      };
      this.chartData6 = {
        labels: [],
        datasets: [
          {
            label: 'Depressão',
            backgroundColor: '#FDE74C',
          },
        ],
      };
      this.chartData7 = {
        labels: [],
        datasets: [
          {
            label: 'Fragilidade',
            backgroundColor: '#9368B7',
          },
        ],
      };
      this.chartData8 = {
        labels: [],
        datasets: [
          {
            label: 'Sentar e abaixar',
            backgroundColor: '#E87461',
          },
        ],
      };
      this.chartData9 = {
        labels: [],
        datasets: [
          {
            label: 'Flexão de cotovelo',
            backgroundColor: '#38369A',
          },
        ],
      };
    },
    emptyGraph() {
      this.$notify.error({
        title: 'Erro',
        message: 'Não existe avaliações no período selecionado',
      });
    },
    async getGraph() {
      this.resetGraph();
      if (this.value !== null) {
        const initial = this.value[0];
        const final = this.value[1];

        const DateInitial = new Date(initial);
        const DateFinal = new Date(final);

        this.getUser();

        const { data } = await axios.get(
          `http://localhost:3333/evaluation?studentId=${sessionStorage.getItem(
            'id',
          )}&orderBy=createdAt`,
        );

        data.data.forEach((d) => {
          const fakedate = d.date;
          const date = moment(d.date, 'YYYY-MM-DD HH:mm:ss').format(
            'DD/MM/YYYY',
          );
          const DateDate = new Date(fakedate);

          const {
            name,
            result,
            imc,
            muscleMassIndex,
            finalFC,
            score,
            sitAndDownResult,
            elbowFlexionResult,
          } = d;

          if (
            DateDate.getTime() >= DateInitial.getTime() &&
            DateDate.getTime() <= DateFinal.getTime()
          ) {
            if (name === 'AVD') {
              this.arrav1.push({ total: result, date });
            }
            if (name === 'AEQ') {
              this.arrav2.push({ total: result, date });
            }
            if (name === 'bodyComposition') {
              this.arrav3.push({ total: imc, date });
            }
            if (name === 'sarcopenia') {
              this.arrav4.push({ total: muscleMassIndex, date });
            }
            if (name === 'ACR') {
              this.arrav5.push({ total: finalFC, date });
            }
            if (name === 'Depression') {
              this.arrav6.push({ total: result, date });
            }
            if (name === 'fragilidade') {
              this.arrav7.push({ total: score, date });
            }
            if (name === 'functionalBattery') {
              this.arrav8.push({ total: sitAndDownResult, date });
              this.arrav9.push({ total: elbowFlexionResult, date });
            }
          }
        });

        if (
          Object.keys(this.arrav1).length === 0 &&
          Object.keys(this.arrav2).length === 0 &&
          Object.keys(this.arrav3).length === 0 &&
          Object.keys(this.arrav4).length === 0 &&
          Object.keys(this.arrav5).length === 0 &&
          Object.keys(this.arrav6).length === 0 &&
          Object.keys(this.arrav7).length === 0 &&
          Object.keys(this.arrav8).length === 0 &&
          Object.keys(this.arrav9).length === 0
        ) {
          this.emptyGraph();
        } else {
          const dates1 = this.arrav1.map((d) => d.date).reverse();
          const totals1 = this.arrav1.map((d) => d.total).reverse();

          this.chartData1 = {
            labels: dates1,
            datasets: [
              {
                data: totals1,
                label: 'AVD',
                backgroundColor: '#F08700',
              },
            ],
          };

          const dates2 = this.arrav2.map((d) => d.date).reverse();
          const totals2 = this.arrav2.map((d) => d.total).reverse();

          this.chartData2 = {
            labels: dates2,
            datasets: [
              {
                data: totals2,
                label: 'AEQ',
                backgroundColor: '#17BEBB',
              },
            ],
          };

          const dates3 = this.arrav3.map((d) => d.date).reverse();
          const totals3 = this.arrav3.map((d) => d.total).reverse();

          this.chartData3 = {
            labels: dates3,
            datasets: [
              {
                data: totals3,
                label: 'IMC',
                backgroundColor: '#E4572E',
              },
            ],
          };

          const dates4 = this.arrav4.map((d) => d.date).reverse();
          const totals4 = this.arrav4.map((d) => d.total).reverse();

          this.chartData4 = {
            labels: dates4,
            datasets: [
              {
                data: totals4,
                label: 'Sarcopenia',
                backgroundColor: '#9BC53D',
              },
            ],
          };

          const dates5 = this.arrav5.map((d) => d.date).reverse();
          const totals5 = this.arrav5.map((d) => d.total).reverse();

          this.chartData5 = {
            labels: dates5,
            datasets: [
              {
                data: totals5,
                label: 'ACR',
                backgroundColor: '#FA7921',
              },
            ],
          };

          const dates6 = this.arrav6.map((d) => d.date).reverse();
          const totals6 = this.arrav6.map((d) => d.total).reverse();

          this.chartData6 = {
            labels: dates6,
            datasets: [
              {
                data: totals6,
                label: 'Depressão',
                backgroundColor: '#FDE74C',
              },
            ],
          };

          const dates7 = this.arrav7.map((d) => d.date).reverse();
          const totals7 = this.arrav7.map((d) => d.total).reverse();

          this.chartData7 = {
            labels: dates7,
            datasets: [
              {
                data: totals7,
                label: 'Fragilidade',
                backgroundColor: '#9368B7',
              },
            ],
          };

          const dates8 = this.arrav8.map((d) => d.date).reverse();
          const totals8 = this.arrav8.map((d) => d.total).reverse();

          this.chartData8 = {
            labels: dates8,
            datasets: [
              {
                data: totals8,
                label: 'Sentar e abaixar',
                backgroundColor: '#E87461',
              },
            ],
          };

          const dates9 = this.arrav9.map((d) => d.date).reverse();
          const totals9 = this.arrav9.map((d) => d.total).reverse();

          this.chartData9 = {
            labels: dates9,
            datasets: [
              {
                data: totals9,
                label: 'Flexão de cotovelo',
                backgroundColor: '#38369A',
              },
            ],
          };
          while (Object.keys(this.arrav1).length) {
            this.arrav1.pop();
          }
          while (Object.keys(this.arrav2).length) {
            this.arrav2.pop();
          }
          while (Object.keys(this.arrav3).length) {
            this.arrav3.pop();
          }
          while (Object.keys(this.arrav4).length) {
            this.arrav4.pop();
          }
          while (Object.keys(this.arrav5).length) {
            this.arrav5.pop();
          }
          while (Object.keys(this.arrav7).length) {
            this.arrav7.pop();
          }
          while (Object.keys(this.arrav8).length) {
            this.arrav8.pop();
          }
          while (Object.keys(this.arrav9).length) {
            this.arrav9.pop();
          }
        }
      }
    },
  },
};
</script>
