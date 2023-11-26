import React from "react";
import TopBox from "../components/home/TopBox";
import ChartBox from "../components/home/ChartBox";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../utils/data";

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
      <div className="box box4"> box4</div>
      <div className="box box5">
        <ChartBox dt={chartBoxProduct} />
      </div>
      <div className="box box6">
        {" "}
        <ChartBox dt={chartBoxConversion} />
      </div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  );
};

export default Home;
