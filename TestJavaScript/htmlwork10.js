    
    //雷达小图1 
    var myChart = echarts.init(document.getElementById('l-leida1'));
    option = {
radar: [
{
  indicator: [
    { text: '企业战略',max: 100 },
    { text: '市场状况' ,max: 100},
    { text: '竞争态势' ,max: 100},
    { text: '行业状况',max: 100 },
    { text: '风控管理',max: 100 }
  ],
  nameGap: 8,
  radius: 50,
  startAngle: 90,
  splitNumber: 5,
  shape: 'circle',
  axisName: {
    color: '#ffffff'
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1'
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  }
},
],
series: [
{
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  symbolSize:0,
  data: [
    {
      value: [100, 0, 60, 60, 100],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)'
      }
    },
  ]
},
]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('l-leida2'));
option = {
radar: [
{
  indicator: [
    { text: '领导力',max: 100 },
    { text: '员工效率' ,max: 100},
    { text: '员工激励' ,max: 100},
    { text: '员工素质',max: 100 },
    { text: '授权体系',max: 100 },
    { text: '组织结构',max:100}
  ],
  nameGap: 8,
  radius: 50,
  startAngle: 90,
  splitNumber: 8,
  shape: 'circle',
  axisName: {
    color: '#ffffff'
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1'
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  }
},
],
series: [
{
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  symbolSize:0,
  data: [
    {
      value: [95, 99, 80, 35, 100,100],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)'
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('l-leida7'));
option = {
radar: [
{
  indicator: [
    { text: '安全生产',max: 100 },
    { text: '工艺管理' ,max: 100},
    { text: '库存管理' ,max: 100},
    { text: '生产效率',max: 100 },
    { text: '生产能力',max: 100 },
    { text: '质量管理',max:100}
  ],
  nameGap: 8,
  radius: 46,
  startAngle: 90,
  splitNumber: 6,
  shape: 'circle',
  axisName: {
    color: '#ffffff'
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1'
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  }
},
],
series: [
{
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  symbolSize:0,
  data: [
    {
      value: [0,0,0,0,0,0],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)'
      }
    },
  ]
},
]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('l-leida3'));
option = {
radar: [
{
  indicator: [
    { text: '发展能力',max: 100 },
    { text: '盈利能力' ,max: 100},
    { text: '盈利质量' ,max: 100},
    { text: '运营能力',max: 100 },
  ],
  nameGap: 8,
  radius: 48,
  startAngle: 90,
  splitNumber: 4,
  shape: 'circle',
  axisName: {
    color: '#ffffff'
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1'
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  }
},
],
series: [
{
  symbolSize:0,
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  data: [
    {
      value: [0,40,60,80],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)',
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('l-leida4'));
option = {
radar: [
{
  indicator: [
    { text: '安全生产',max: 100 },
    { text: '工艺管理' ,max: 100},
    { text: '库存管理' ,max: 100},
    { text: '生产效率',max: 100 },
    { text: '生产能力' ,max: 100},
    { text: '质量管理',max: 100 },
  ],
  nameGap: 8,
  radius: 48,
  startAngle: 90,
  splitNumber: 6,
  shape: 'circle',
  axisName: {
    color: '#ffffff'
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1'
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  }
},
],
series: [
{
  symbolSize:0,
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  data: [
    {
      value: [0],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)',
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('l-leida5'));
option = {
radar: [
{
  indicator: [
    { text: 'IT资源',max: 100 },
    { text: '外部资源' ,max: 100},
    { text: '无形资源' ,max: 100},
    { text: '有形资源',max: 100 },
  ],
  nameGap: 8,
  radius: 49,
  startAngle: 90,
  splitNumber: 6,
  shape: 'circle',
  axisName: {
    color: '#ffffff',
    fontSize: 12
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1',
       activeOpacity: 1
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  }
},
],
series: [
{
  symbolSize:0,
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  data: [
    {
      value: [40,40,40,95],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)',
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('l-leida6'));
option = {
radar: [
{
  indicator: [
    { text: '产品组合',max: 100 },
    { text: '客户关系' ,max: 100},
    { text: '市场地位' ,max: 100},
    { text: '英雄策略',max: 100 },
    { text: '销售能力',max: 100 },
  ],
  nameGap: 8,
  radius: 49,
  startAngle: 90,
  splitNumber: 6,
  shape: 'circle',
  axisName: {
    color: '#ffffff',
    fontSize: 12
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1',
       activeOpacity: 1
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  } 
},
],
series: [
{
  symbolSize:0,
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  data: [
    {
      value: [80,99,98,80,60],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)',
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('l-leida8'));
option = {
radar: [
{
  indicator: [
    { text: '处理',max: 100 },
    { text: '检查' ,max: 100},
    { text: '行动' ,max: 100},
    { text: '计划',max: 100 },
    { text: '制度流程',max: 100 },
  ],
  nameGap: 8,
  radius: 49,
  startAngle: 90,
  splitNumber: 6,
  shape: 'circle',
  axisName: {
    color: '#ffffff',
    fontSize: 12
  },
  splitArea: {
    areaStyle: {
      color: ['#063790']
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1',
       activeOpacity: 1
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  } 
},
],
series: [
{
  symbolSize:0,
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  data: [
    {
      value: [100,99,98,100,100],
      areaStyle: {
        color: 'rgba(255, 228, 51, 1)',
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('l-leida9'));
option = {
radar: [
{
  indicator: [
    { text: '战略能力',max: 100 },
    { text: '组织能力' ,max: 100},
    { text: '财务能力' ,max: 100},
    { text: '制造能力',max: 100 },
    { text: '资源能力',max: 100 },
    { text: '营销能力' ,max: 100},
    { text: '研发能力',max: 100 },
    { text: '执行能力',max: 100 },
  ],
  nameGap: 8,
  radius: 155,
  startAngle: 90,
  splitNumber: 8,
  shape: 'circle',
  axisName: {
    color: '#ffffff',
    fontSize: 20
  },
  splitArea: {
    areaStyle: {
      color: ['#063790'],
      opacity: 0.5
    }
  },
  axisLine: {
    lineStyle: {
      color: '#009ae1',
       activeOpacity: 1
    }
  },
  splitLine: {
    lineStyle: {
      color: '#009ae1'
    }
  } 
},
],
series: [
{
  symbolSize:0,
  type: 'radar',
  emphasis: {
    lineStyle: {
      width: 6
    }
  },
  data: [
    {
      value: [58,100,80,20,80,80,0,100],
      areaStyle: {
        color: '#00ffed',
        opacity: 0.8
      }
    },
  ]
},
]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('bd22-tu'));
option = {
color:['orange','#02A2B3','#354B8f'],
legend: {
itemStyle: {

}
},
data: [{
name: '营收收入',
textStyle: {
    color: '#ffffff'
}
},
{
name: '企业同比',
textStyle: {
    color: '#ffffff'
},
},
{
name: '行业同比',
textStyle: {
    color: '#ffffff'
},
}],
tooltip: {},
dataset: {
source: [
  ['product', '营收收入', '企业同比', '行业同比'],
  ['T1', 3.5, 7.8, 6.5],
  ['T2', 4.4, 5, 6.8],
  ['T3', 3.6, 3, 5],
  ['T4', 3.5, 7.8, 6.5]
]

},
xAxis: [{ 
type: 'category',
axisTick:{
  show:false
},
axisName: {
    color: '#ffffff'
  },
axisLine:{
  lineStyle:{
    color:'#354B8f'
  }
}
}],
yAxis: [{
}],
// Declare several bar series, each will be mapped
// to a column of dataset.source by default.
series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('bd24-tu'));
option = {
    
    xAxis: [{
        min: '-20',
        max: '20',
        axisTick: {
           show:false
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1
            },
            show: true,
            symbol: "arrow"
        },
         axisLabel: {
          show: false, // 不显示坐标轴上的文字
        },
        splitLine: {
            show: false
        },
        name: "竞争优势",
        nameLocation: "start",
          nameTextStyle: {
            color: '#ffffff',
            fontSize: '14px',
            padding: [-220,-50,0,0]
        }
    },
    {
        min: '-20',
        max: '20',
        axisTick: {
           show:false
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff',
                width: 1
            },
            show: true,
            symbol: "arrow"
        },
         axisLabel: {
          show:false // 不显示坐标轴上的文字
        },
        splitLine: {
            show: false
        },
        name: '产业优势',
        nameTextStyle: 'end',
          nameTextStyle: {
            color: '#ffffff',
            fontSize: '16px',
            padding: [0,0,25,-50]
        }
    }
    ],
    yAxis: [{
        min: '-20',
        max: '20',
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1
            },
            show: true,
            symbol: "arrow"
        },
         axisLabel: {
          show: false, // 不显示坐标轴上的文字
        },
          axisTick: {
           show:false
        },
         splitLine: {
            show: false
        },
        nameLocation: 'end',
        name: '财务优势',
        nameTextStyle: {
            color: '#fff',
            fontSize: '16px',
        }
    },
    {
        min: '-20',
        max: '20',
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1
            },
            show: true,
            symbol: "arrow"
        },
         axisLabel: {
          show: false, // 不显示坐标轴上的文字
        },
          axisTick: {
           show:false
        },
         splitLine: {
            show: false
        },
        nameLocation: 'start',
        name: '环境稳定性',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '16px',
        }
    }],

        title:[
            {
            text:'进攻',//主标题文本
            left:'200px', // 标题距离左边位置，可以使用right
            bottom:"220px", // 标题距离底部位置，可以使用top
            textStyle:{ // 主标题样式
              fontSize: 25,
              color:"#5e81A5"
            },
        },
            {
            text:'保守',//主标题文本
            right:'200px', // 标题距离左边位置，可以使用right
            bottom:"220px", // 标题距离底部位置，可以使用top
            textStyle:{ // 主标题样式
              fontSize: 25,
              color:"#5e81A5"
            },
        },
         {
            text:'防御',//主标题文本
            left:'200px', // 标题距离左边位置，可以使用right
            bottom:"108px", // 标题距离底部位置，可以使用top
            textStyle:{ // 主标题样式
              fontSize: 25,
              color:"#5e81A5"
            },
        },
         {
            text:'竞争',//主标题文本
            right:'200px', // 标题距离左边位置，可以使用right
            bottom:"108px", // 标题距离底部位置，可以使用top
            textStyle:{ // 主标题样式
              fontSize: 25,
              color:"#5e81A5"
            },
        },

    ]

};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('bd21-tu'));
let pieColors1 = ['rgba(255, 244, 92, 1)', 'rgba(0, 132, 255, 1)', 'rgba(0, 212, 135, 1)']
let pieColors2 = ['rgba(255, 244, 92, 0.5)', 'rgba(0, 132, 255, 0.5)', 'rgba(0, 212, 135, 0.5)']

let obj = {
  data: [
    { value: 68.91, name: '主板' },
    { value: 31.09, name: '科创板' },

  ],
  total: 68.91 +31.09 ,
}

option = {

  series: [
    {
      name: 'pie1',
      z: 10,
      type: 'pie',
      radius: ['36%', '56%'],
      avoidLabelOverlap: false,
      center:['50%','36%'],
      label: {
        formatter: params => {
          // console.log(params)
          return `{num|${Math.round(params.value * 100 / obj.total)}%}\n{text|${params.name}}`
        },
        alignTo: 'labelLine',
        rich: {
          num: {
            fontSize: 18,
            align: 'left',
            padding: [0, 0, 10, 0]
          },
          text: {
            fontSize: 14,
            align: 'left',
          },
        }
      },
      labelLine: {
        length: 15,
        length2: 20,
        lineStyle: {
          width: 1
        }
      },
      itemStyle: {
        color: function (colors) {
          return pieColors1[colors.dataIndex];
        }
      },
      data: obj.data.map((item, index) => {
        return {
          label: {
            color: pieColors1[index],
          },
          ...item
        }
      })
    },
    {
      name: 'pie2',
      type: 'pie',
      radius: ['8%', '11%'],
      avoidLabelOverlap: false,
      center:['50%','36%'],
      label: {
        formatter: params => {
          // console.log(params)
          return ``
        },

      },
      labelLine: {
        show: false,

      },
      itemStyle: {
        color: function (colors) {
          return pieColors2[colors.dataIndex];
        }
      },
      data: obj.data
    },

  ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('bd23-tu'));
let list = [{
  name: '执行能力',
  value: 10
}, {
  name: '组织能力',
  value: 8.41
}, {
  name: '营销能力',
  value: 7.57
},
{
  name: '制造能力',
  value: 6.41
}, 
{
  name: '执行能力',
  value: 5.83
}, 
{
  name: '组织能力',
  value: 4.07
}, 
{
  name: '营销能力',
  value: 0.1
}, 
{
  name: '制造能力',
  value: 0.001
}, ];
let yName = list.map((item) => item.name);
let xData = list.map((item) => item.value);
let barWidth = 18;

option = {
  backgroundColor: 'balck',
  xAxis: {
      splitLine: {
          show: false
      },
      axisLabel: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLine: {
          show: false
      }
  },
  grid: {
      containLabel: true,
      left: 30,
      top: 0,
      right: 100,
      bottom: 0
  },
  yAxis: [{
      inverse: true,
      axisLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          margin: 10,
          textStyle: {
              fontSize: 14,
              color: '#fff'
          }
      },
      data: yName,
       nameTextStyle: {
          color: '#ffffff',
          fontSize: '14px',
          padding: [-20,-50,0,0]}
  }],
  series: [{ //内
          type: 'bar',
          barWidth,
          legendHoverLink: false,
          symbolRepeat: true,
          silent: true,
          itemStyle: {
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: '#00abee' // 0% 处的颜色
                  }, {
                      offset: 1,
                      color: 'rgba(248,222,28,0.88)' // 100% 处的颜色
                  }]
              }
          },
          data: list,
          z: 1,
          animationEasing: 'elasticOut'
      },
      { // 背景
          type: 'pictorialBar',
          animationDuration: 0,
          symbolRepeat: 'fixed',
          symbolMargin: '10%',
          symbol: 'roundRect',
          symbolSize: [4, barWidth],
          itemStyle: {
              normal: {
                  color: '#12272A',

              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  offset: [0, 2],
                  distance: 25,
                  textStyle: {
                      color: '#7AF8FF',
                      fontSize: 14,
                  },
                  formatter: function(a, b) {
                      return `${a.value}`
                  }
              },

          },
          data: xData,
          z: 0,
          animationEasing: 'elasticOut'
      },
      { //分隔
          type: 'pictorialBar',
          itemStyle: {
              color: '#000'
          },
          symbolRepeat: 'fixed',
          symbolMargin: 2,
          symbol: 'roundRect',
          symbolClip: true,
          symbolSize: [1, barWidth],
          symbolPosition: 'start',
          symbolOffset: [0, 0],
          data: list,
          z: 2,
          animationEasing: 'elasticOut'
      }
  ]
};
myChart.setOption(option);
