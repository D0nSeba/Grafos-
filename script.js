var ctx = document.getElementById('grafico').getContext('2d');
var grafica = new Chart(ctx, {
   type: 'line',
   data: {
      labels: [],
      datasets: [{
         label: 'Aproximación a PI',
         data: [],
         backgroundColor: "rgba(280, 99, 132, 0.2)",
         borderColor: "rgba(280, 99, 132, 1)",
         borderWidth: 1
      }]
   },
   options: {
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
            }
         }]
      }
   }
});

function generarIteraciones() {
   let cantidad = 15000;
   let etiquetas = [];
   let datos = []; 
   for (let i = 1; i <= cantidad; i++) {
      var numPuntosDentroCirculo = 0;
      for (var j = 0; j < i; j++) {
        var x = Math.random();
        var y = Math.random();

        if (x*x + y*y <= 1) {
          numPuntosDentroCirculo++;
        }
      }
      var piAprox = 4 * (numPuntosDentroCirculo / i);
      console.log(piAprox);
      datos.push(piAprox);
      etiquetas.push(i);
   }
   grafica.data.labels = etiquetas;
   grafica.data.datasets[0].data = datos; 
   grafica.update();
}
