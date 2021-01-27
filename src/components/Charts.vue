
<script>
    import { Line } from 'vue-chartjs'

    export default {
        name: "Charts",
        extends: Line,
        data: () => ({
            chartdata: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: '$',
                        data: [5, 55, 70, 60, 40, 65, 85, 75, 40, 65, 45, 40],
                        backgroundColor: "rgba(3, 196, 199, 0.05)",
                        borderColor: "#03C4C7",
                        pointBackgroundColor: "#03C4C7",
                        pointBorderColor: '#fff',
                        pointBorderWidth: '3',
                        pointRadius: 7,
                        lineTension: 0.5,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes : [{
                        gridLines : {
                            display : false
                        },
                        ticks: {
                            fontSize: 12,
                            fontColor: '#B3C1CE',
                            fontFamily: 'DM Mono'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 12,
                            fontColor: '#B3C1CE',
                            fontFamily: 'DM Mono',
                            maxTicksLimit: 7,
                            padding: 10,
                        }
                    }]
                },
            }
        }),
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped>

</style>
