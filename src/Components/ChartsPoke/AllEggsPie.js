import React from "react";
import { Doughnut } from "react-chartjs-2";

function AllEggsPie(props) {
  const eggsNames = props.eggs;
  const datasets = [
    {
      label: "Pokemon in eggs",
      backgroundColor: [
        "rgba(102,0,102,0.6)",
        "rgba(51,153,255,0.6)",
        "rgba(0,102,0,0.6)",
        "rgba(0,153,255,0.6)",
        "rgba(102,51,0,0.6)",
        "rgba(255,51,255,0.6)",
        "rgba(0,204,0,0.6)",
        "rgba(255,255,51,0.6)",
        "rgba(51,153,255,0.6)",
        "rgba(153,0,0,0.6)",
        "rgba(0,0,0,0.6)",
        "rgba(51,153,255,0.6)",
        "rgba(255,0,255,0.6)",
        "rgba(255,102,0,0.6)",
        "rgba(255,204,255,0.6)"
      ],
      data: [79, 95, 77, 57, 218, 50, 67, 52, 33, 56, 52, 25, 1, 52, 98],
    },
  ];

  return (
    <div>
      <Doughnut
        data={{
          labels: [
            eggsNames.results[0].name,
            eggsNames.results[1].name,
            eggsNames.results[2].name,
            eggsNames.results[3].name,
            eggsNames.results[4].name,
            eggsNames.results[5].name,
            eggsNames.results[6].name,
            eggsNames.results[7].name,
            eggsNames.results[8].name,
            eggsNames.results[9].name,
            eggsNames.results[10].name,
            eggsNames.results[11].name,
            eggsNames.results[12].name,
            eggsNames.results[13].name,
            eggsNames.results[14].name,
          ],
          datasets: datasets,
        }}
      />
    </div>
  );
}

export default AllEggsPie;