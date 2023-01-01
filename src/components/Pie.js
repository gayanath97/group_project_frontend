import React, { useEffect, useState } from "react";
import axios from "axios";
import { CCard, CCardBody, CCol, CCardHeader, CRow } from "@coreui/react";
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from "@coreui/react-chartjs";

const PieCharts = (props) => {
  const random = () => Math.round(Math.random() * 100);

  return (
    <div className="h-25 ">
      <CCard className="mb-1">
        <CCardBody>
          <CChartDoughnut
            style={{ width: "250px", height: "250px" }}
            data={{
              labels: ["Totle opds", "Available"],
              datasets: [
                {
                  backgroundColor: ["#41B883", "#E46651", "#DD1B16"],
                  data: [props.val1, props.val2],
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default PieCharts;
