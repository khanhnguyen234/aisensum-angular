export const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  hover: {
    mode: 'index',
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          display: true,
        },
        ticks: {
          min: 0,
          max: 100,
        },
      },
    ],
  },
};
