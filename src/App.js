import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import renderTooltip from "./components/renderTooltip/renderTooltip";
import {
  ChartTooltip,
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { Chart1 } from "./components/Chart/Chart1";
const COLORS = {
  yaerden: "#059669",
  israel: "#B91C1C",
  france: "#6366F1",
  usa: "#2563EB",
  holand: "#D97706",
};

const contrys = [
  {
    status: "holand",
    data: [43, 30, 110],
    color: COLORS.holand,
  },
  {
    status: "france",
    data: [25, 15, 30],
    color: COLORS.france,
  },
  {
    status: "usa",
    data: [3, 5, 1],
    color: COLORS.usa,
  },
  {
    status: "israel",
    data: [14, 10, 25],
    color: COLORS.israel,
  },
  {
    status: "yaerden",
    data: [1, 3, 2],
    color: COLORS.yaerden,
  },
];
const categories = ["activ", "kill", "ceriality"];
const seriesLabels = {
  visible: false,
  padding: 3,
  font: "normal 16px Arial, sans-serif",
  position: "right",
};

const applicationsStatus = [
  {
    status: "yaerden",
    value: 15,
    color: COLORS.yaerden,
  },
  {
    status: "u.s.a",
    value: 14,
    color: COLORS.usa,
  },
  {
    status: "israel",
    value: 8,
    color: COLORS.israel,
  },
  {
    status: "france",
    value: 32,
    color: COLORS.france,
  },
  {
    status: "holand",
    value: 32,
    color: COLORS.holand,
  },
];
const labelContent = (e) => e.category;

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>covid 19</h1>

        <div className="section">
          <Chart zoomable pannable>
            {/* must be */}
            <ChartLegend visible={true} />
            {/* /טמחזיר רשימה בצד=תפרי*/}
            <ChartTitle text="covid status " />
            {/* tytle of the chart */}

            <ChartTooltip render={renderTooltip} />
            {/* מחזיר את המספר באחוזים */}
            <ChartSeries>
              {/* must be */}
              <ChartSeriesItem
                // doing charts
                type="donut"
                data={applicationsStatus}
                categoryField="status"
                field="value"
              >
                <ChartSeriesLabels
                  // Design letters

                  color="#fff"
                  // colors of letters
                  background="#000"
                  // background of letters

                  content={labelContent}
                  // return names instead of numbers
                />
              </ChartSeriesItem>
              {/* must be */}
            </ChartSeries>
            {/* must be */}
          </Chart>
          {/* must be */}
        </div>
        <Chart1
          typeOfChart={contrys.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="bar"
              tooltip={{ visible: true }}
              data={item.data}
              name={item.name}
            />
          ))}
          contrys={contrys}
          categories={categories}
        />
        <Chart1
          typeOfChart={contrys.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="line"
              tooltip={{ visible: true }}
              data={item.data}
              name={item.name}
            />
          ))}
          contrys={contrys}
          categories={categories}
        />
      </div>
    </div>
  );
}

export default App;
