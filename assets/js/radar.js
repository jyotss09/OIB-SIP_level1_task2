const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: [
      "FrontEnd Developement",
      "Speaking Skills",
      "Team Work",
      "Leader Ship",
      "Coding",
      "Database",
      "Backend",
    ],
    datasets: [
      {
        label: "My Stats",
        data: [88, 85, 85, 85, 75, 75, 65],
        fill: true,
        backgroundColor: "rgba(89, 91, 131, 0.2)",
        borderColor: "rgb(89, 91, 131)",
        pointBackgroundColor: "rgb(6, 9, 48)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(6, 9, 48)",
      },
      //   {
      //     label: "My Second Dataset",
      //     data: [28, 48, 40, 19, 96, 27, 100],
      //     fill: true,
      //     backgroundColor: "rgba(54, 162, 235, 0.2)",
      //     borderColor: "rgb(54, 162, 235)",
      //     pointBackgroundColor: "rgb(54, 162, 235)",
      //     pointBorderColor: "#fff",
      //     pointHoverBackgroundColor: "#fff",
      //     pointHoverBorderColor: "rgb(54, 162, 235)",
      //   },
    ],
  },
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    layout: {
      padding: 80,
    },
  },
});
