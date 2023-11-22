Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '來台觀光客人數分佈圖(民國111年/依國籍區分)'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        '資料來源:觀光署'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: '亞洲地區',
                    sliced: true,
                    selected: true,
                    y: 638464
                },
                {
                    name: '非洲地區',
                    y: 3423
                },
                {
                    name: '美洲地區',
                    y: 105244 
                },
                {
                    name: '大洋洲地區',
                    y: 14994
                },
                {
                    name: '歐洲地區',
                    y: 68558
                },
                {
                    name: '其他未列明',
                    y: 219
                }
            ]
        }
    ]
});