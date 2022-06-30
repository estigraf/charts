// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Country from './pages/Country/Country';


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/home' element={<Home/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='/country' element={<Country/>} />
//         <Route path='/country/:url' element={<Country/>} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import renderTooltip from "./components/renderTooltip/renderTooltip"
import {
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  ChartTooltip,
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
const COLORS = {
  yaerden: "#059669",
  israel: "#B91C1C",
  france: "#6366F1",
  usa: "#2563EB",
  holand: "#D97706",
};
 const contrys = [
  {
    name: "holand",
    data: [19, 9, 20],
    color: COLORS.holand,
  },
  {
    name: "france",
    data: [12, 6, 15],
    color: COLORS.france,
  },
  {
    name: "isral",
    data: [7, 3, 5],
    color: COLORS.israel,
  },
];
const series = [
  {
    status: "holand",
    data: [43, 30, 59],
    color: COLORS.holand,
  },
  {
    status: "france",
    data: [25, 15, 30],
    color: COLORS.france,
  },
  {
    status: "u-s-a",
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
  visible: true,
  padding: 3,
  font: "normal 16px Arial, sans-serif",
  position: "right",
};



const applicationsStatusThisMonth = [
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
];
const labelContent = e => e.category;

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>covid 19</h1>
        <div className="section">

        <Chart zoomable pannable>
        <ChartTitle text="covid status " />
      <ChartLegend visible={false} />
      <ChartTooltip render={renderTooltip} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsStatusThisMonth}
          categoryField="status"
          field="value"
        >
                  <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
      </div>
      <div className="section">
      <Chart zoomable pannable>
      <ChartTitle text="covid status " />
      <ChartLegend visible={true} />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories}>
          <ChartCategoryAxisTitle text="covid 19" />
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="bar"
            gap={2}
            spacing={0.25}
            labels={seriesLabels}
            data={item.data}
            name={item.status}
            color={item.color}
          />
        ))}
      </ChartSeries>
    </Chart>
      </div>
      <div className="section">
      <Chart pannable zoomable style={{ height: 350 }}>
      <ChartTitle text="covid status" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartValueAxis>
        <ChartValueAxisItem title={{ text: "numbers" }} min={0} max={30} />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} />
      </ChartCategoryAxis>
      <ChartSeries>
      {contrys.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="line"
            tooltip={{ visible: true }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
      </div>
      </div>
    </div>
  );
}

export default App;

