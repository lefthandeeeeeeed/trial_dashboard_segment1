// copied from Liveweave 2Zjxlu 
/////////// A事業 //////////
// 棒グラフp1（限界利益）
var drawGraphBarP1 = function(dataBarP1){
  var ctx = document.getElementById('graphBar_p1').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBarP1[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBarP1[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBarP1[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
  
      fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
    // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};


// 棒グラフq1（販売数量）
var drawGraphBarQ1 = function(dataBarQ1){
  var ctx = document.getElementById('graphBar_q1').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBarQ1[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBarQ1[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBarQ1[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
  
      fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
    // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};


//線グラフR1
var drawGraphLineR1 = function(dataLineR1){
  var ctx = document.getElementById('graphLine_r1').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: { labels: dataLineR1[0],
    datasets: [{ label:'予算', 
                 fill:false,
                 borderColor: "#87cefa",
                 data:dataLineR1[1] },
               { label:'実績',
                 fill:false,
                 borderColor: "#4682b4",
                 data:dataLineR1[2] }]
    }
  });
};

////////// A事業 //////////


/////////// B事業 //////////
// 棒グラフp2（限界利益）
var drawGraphBarP2 = function(dataBarP2){
  var ctx = document.getElementById('graphBar_p2').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBarP2[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBarP2[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBarP2[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
  
      fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
    // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};


// 棒グラフq1（販売数量）
var drawGraphBarQ2 = function(dataBarQ2){
  var ctx = document.getElementById('graphBar_q2').getContext('2d');
  // 棒1
  var data1 = { 
    label:'予算', 
    data:dataBarQ2[1],
    backgroundColor: "#87cefa",
    borderColor: "#87cefa",
    pointHoverBackgroundColor: "#87cefa",
    pointHoverBorderColor: "#87cefa"
  };
  // 棒2
  var data2 = {
    label:'実績',
    data:dataBarQ2[2],
    backgroundColor: "#4682b4",
    borderColor: "#4682b4",
    pointHoverBackgroundColor: "#4682b4",
    pointHoverBorderColor: "#4682b4"
  };
  // ラベル(横軸)
  var label = dataBarQ2[0];
  // x軸, y軸の設定
  var xAxes = [{ 
    gridLines:{
      color: "#ffffff"
    },
    ticks: {
      fontSize: 12
    }
  }];
  var yAxes = [{ 
    gridLines:{
      color: "#5f5f5f"
    },
    ticks: {
  
      fontSize: 12
    }
  }];
  var scales = {xAxes: yAxes};
  // グラフ全体の設定
    // データの設定
  var config = {
    type: 'bar', // グラフの種類（棒グラフを指定）
    data: { labels: label, datasets: [data1, data2]},
    options: scales
  };
  var myChart = new Chart(ctx, config);
};


//線グラフR1
var drawGraphLineR2 = function(dataLineR2){
  var ctx = document.getElementById('graphLine_r2').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: { labels: dataLineR2[0],
    datasets: [{ label:'予算', 
                 fill:false,
                 borderColor: "#87cefa",
                 data:dataLineR2[1] },
               { label:'実績',
                 fill:false,
                 borderColor: "#4682b4",
                 data:dataLineR2[2] }]
    }
  });
};

////////// B事業 //////////


//////////////データ////////////////
window.onload=function () {
   ///A事業///
   var dataBarP1 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [1321 ,1285 ,1358 ,1391 ,1271 ,1360 ,1478 ,1453 ,1426 ,1428 ,1436 ,1445],
                [1330 ,1296 ,1428 ,1343 ,1315 ,1369 ,1570 ,1640 ,1458 ,1482 ,1466 ,1757]];
    drawGraphBarP1(dataBarP1);
  
    var dataBarQ1 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [265 ,267 ,287 ,295 ,270 ,280 ,275 ,276 ,276 ,276 ,280 ,273],
                [314 ,297 ,320 ,268 ,234 ,241 ,297 ,281 ,250 ,276 ,332 ,342]];
    drawGraphBarQ1(dataBarQ1);

    var dataLineR1 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [71 ,71 ,71 ,71 ,71 ,71 ,71 ,71 ,71 ,75 ,75 ,75],
                [71 ,71 ,67 ,71 ,71 ,72 ,75 ,85 ,74 ,77 ,73 ,80]];
    drawGraphLineR1(dataLineR1);

   ///B事業///
   var dataBarP2 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [1321 ,1285 ,1358 ,1391 ,1271 ,1360 ,1478 ,1453 ,1426 ,1428 ,1436 ,1445],
                [1330 ,1296 ,1428 ,1343 ,1315 ,1369 ,1570 ,1640 ,1458 ,1482 ,1466 ,1757]];
    drawGraphBarP2(dataBarP2);
  
    var dataBarQ2 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [265 ,267 ,287 ,295 ,270 ,280 ,275 ,276 ,276 ,276 ,280 ,273],
                [314 ,297 ,320 ,268 ,234 ,241 ,297 ,281 ,250 ,276 ,332 ,342]];
    drawGraphBarQ2(dataBarQ2);

    var dataLineR2 = [['17/04', '17/05', '17/06', '17/07', '17/08', '17/09', '17/10', '17/11', '17/12', '18/01', '18/02', '18/03'],
                [71 ,71 ,71 ,71 ,71 ,71 ,71 ,71 ,71 ,75 ,75 ,75],
                [71 ,71 ,67 ,71 ,71 ,72 ,75 ,85 ,74 ,77 ,73 ,80]];
    drawGraphLineR2(dataLineR2);

};

