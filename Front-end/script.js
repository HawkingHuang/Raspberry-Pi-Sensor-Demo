"use strict";
// 測試溫濕度數據顯示
// const tempEl = document.querySelector('.temp-stats');
// tempEl.textContent = 24;
// const humEl = document.querySelector('.hum-stats');
// humEl.textContent = 60;

// const apiUrl = "https://your-raspberry-pi-api-url.com/data";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const temperatureData = data.temperature;
//     const humidityData = data.humidity;
//     const labels = [];

//     const temperatureDataset = {
//       label: '溫度數據',
//       borderColor: 'rgba(0, 0, 0, 1)',
//       data: [],
//       fill: false,
//     };

//     const humidityDataset = {
//       label: '濕度數據',
//       borderColor: 'rgba(40, 36, 60, 1)',
//       backgroundColor: 'rgba(40, 36, 60, 0.4)',
//       borderWidth: 1,
//       data: [],
//       barThickness: 60
//     };

//     for (let i = 0; i < temperatureData.length; i++) {
//       labels.push(`${i * 3} sec`);
//     }
    

//     temperatureDataset.data = temperatureData;
    

//     humidityDataset.data = humidityData;

//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");


//     let myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [humidityDataset, {
//           type: 'line',
//           data: {
//             datasets: temperatureDataset
//           }
//         }]
//       }
//     })
//   .catch((error) => {
//     console.error("無法從 API 獲取資料：", error);
//   });


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 繪製圖表
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['0 sec', '3 sec', '6 sec'],
    datasets: [{
      barThickness: 60,
      backgroundColor: [
        'rgba(40, 36, 60, 0.4)',
        'rgba(40, 36, 60, 0.4)',
        'rgba(40, 36, 60, 0.4)'
      ],
      borderColor: [
        'rgba(40, 36, 60, 1)',
        'rgba(40, 36, 60, 1)',
        'rgba(40, 36, 60, 1)'
      ],
      borderWidth: 1,
      label: '濕度數據',
      data: [65, 70, 50]
    }, {
      type: 'line',
      label: '溫度數據',
      data: [19, 30, 24],
      borderColor: [
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 0, 1)'
      ]
    }]
  }
})