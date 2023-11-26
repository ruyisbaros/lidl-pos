import React from "react";
import TopBox from "../components/home/TopBox";
import ChartBox from "../components/home/ChartBox";
import BarChartBox from "../components/home/BarChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../utils/data";
import PieChartBox from "../components/home/PieChartBox";
import BigChartBox from "../components/home/BigChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox dt={chartBoxUser} />
      </div>
      <div className="box box3">
        {" "}
        <ChartBox dt={chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox dt={chartBoxProduct} />
      </div>
      <div className="box box6">
        {" "}
        <ChartBox dt={chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox dt={barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox dt={barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
