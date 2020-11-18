<template>
  <div>
    <div id="total-map-chart1" :style="{ width: '100%', height: '100%' }" />
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import "echarts/extension/bmap/bmap";
import { testPoint, geoCoordMap, data, testPoint2 } from "./index";
export default {
  data() {
    return {
      options: {},
    };
  },
  mounted() {
    function convertData(data) {
      const res = [];
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    }
    this.options = {
      title: {
        text: "销售数据",
        subtext: "销售趋势统计",
        left: "50%",
        padding: 10,
        textStyle: {
          color: "#333",
          fontSize: 30,
          fontWeight: "bold",
        },
      },
      tooltip: {},
      bmap: {
        key: "G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb",
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              featureType: "water",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "land",
              elementType: "all",
              stylers: {
                color: "#f3f3f3",
              },
            },
            {
              featureType: "railway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "highway",
              elementType: "all",
              stylers: {
                color: "#fdfdfd",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "green",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "subway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "manmade",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "local",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "arterial",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "boundary",
              elementType: "all",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "building",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "label",
              elementType: "labels.text.fill",
              stylers: {
                color: "#999999",
              },
            },
          ],
        },
      },
      series: [
        {
          type: "scatter",
          coordinateSystem: "bmap",
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          itemStyle: {
            color: "purple",
          },
          label: {
            show: false,
            position: "right",
            formatter: function (v) {
              console.log(v, "v");
              return `${v.data.name}-${v.data.value[2]}`;
            },
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },
        {
          name: "Top 2",
          type: "effectScatter",
          coordinateSystem: "bmap",
          data: testPoint,
          symbolSize: function (val) {
            return val[2] / 10;
          },
          encode: {
            value: 2,
          },
          label: {
            formatter: function(v){
                return `${v.data.name}- ${v.data.value[2]}`
            },
            positions: "right",
            show: false,
          },
          hoverAnimation: true,
          emphasis: {
            label: {
              show: true,
            },
          },
          rippleEffect:{
              brushType: 'stroke',
              
          },
          itemStyle:{
            shadowBlur: 10,
            color:'purple',
            shadowColor:'#333'
          }
        },
      ],
    };
  },
};
</script>
