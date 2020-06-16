import React from "react";
import { Radar } from "react-chartjs-2";

function Stats(props) {
  const stats = props.stats;

  const colorPoke = "rgba(255, 0, 0, 0.2)";

  const datasets = [
    {
      label: "Stats (base)",
      backgroundColor: colorPoke,
      borderColor: "rgba(255, 0, 0, 0.6)",
      pointBackgroundColor: colorPoke,
      data: [
        stats[0].base_stat,
        stats[1].base_stat,
        stats[2].base_stat,
        stats[3].base_stat,
        stats[4].base_stat,
        stats[5].base_stat,
      ],
    },
  ];

  return (
    <Radar
      data={{
        labels: [
          stats[0].stat.name,
          stats[1].stat.name,
          stats[2].stat.name,
          stats[3].stat.name,
          stats[4].stat.name,
          stats[5].stat.name,
        ],
        datasets: datasets,
      }}
      options={{
        maintainAspectRatio: false,
        scale: {
          pointLabels: {
            fontSize: 15,
          },
        },
      }}
    />
  );
}

export default Stats;
