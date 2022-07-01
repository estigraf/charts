import React from "react";
// import renderTooltip from "/renertooltip"
import {
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
} from "@progress/kendo-react-charts";
const categories = ["activ", "kill", "ceriality"];
export const Chart1 = ({ typeOfChart }) => {
  return (
    <div className="section">
      <Chart pannable zoomable style={{ height: 500 }}>
        <ChartTitle text="covid status" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>{typeOfChart}</ChartSeries>
      </Chart>
    </div>
  );
};
