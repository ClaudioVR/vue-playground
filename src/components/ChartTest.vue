
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['J', 'F', 'M', 'A', 'M'],
      datasets: [
        {
          // label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20, 30, 20, 55]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

