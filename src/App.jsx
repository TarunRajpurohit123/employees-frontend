import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  Drawer,
  EForm,
  Fluid,
  Table,
  Uploader,
} from "./components";
import { Button } from "antd";
import {
  DownloadOutlined,
  UploadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import fileDownload from "js-file-download";
import axios from "axios";
import { statusChart } from "./api/api";

function App() {
  const isOpen = useSelector((state) => {
    return state.drawerSlice;
  });
  const [statusData,setStatusData] = useState([]);

  // fetch all chart related data
  useEffect(()=>{
    axios.get(statusChart).then((statusData)=>{
      console.log("statusData",statusData)
      setStatusData(statusData.data.data.chartData)
    }).catch((error)=>{})
  },[])

  // download demo csv
  // download excle file
  const downloadFile = () => {
    let data =
      "EmployeeName,EmployeeStatus,JoiningDate,BirthDate,Skills,SalaryDetails,Address and other custom info";
    fileDownload(data, "demo-employee.csv");
  };

  return (
    <React.Fragment>
      <Fluid>
        <div>
          <Drawer
            isOpen={isOpen.open}
            heading={"Employee Form"}
            label={
              <>
                Create <UserAddOutlined />
              </>
            }
          >
            <EForm />
          </Drawer>
          <Drawer
            isOpen={isOpen.open2}
            heading={"Bulk Upload"}
            label={
              <>
                Bulk Upload <UploadOutlined />
              </>
            }
            btnStyles={{ marginLeft: "1rem", background: "var(--dark)" }}
          >
            <Uploader />
          </Drawer>
          <Button
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              downloadFile();
            }}
          >
            Demo Csv <DownloadOutlined />
          </Button>
        </div>
        <Table />

        {/* chart goes here */}
        <section className="charts__section flex justify-between flex-wrap">
          <div style={{width:"49%"}} className="primary-shadow p-md">
            <h1>Status Charts:</h1>
            <ChartComponent data={statusData} chartType={"bar"} />
          </div>
          <div style={{width:"49%"}} className="primary-shadow p-md">
            <h1>Location Charts:</h1>
            <ChartComponent chartType={"line"} />
          </div>
          <div style={{width:"49%",marginTop:"2rem"}} className="primary-shadow p-md">
            <h1>Location Charts:</h1>
            <ChartComponent chartType={"pie"} />
          </div>
        </section>
        {/* chart end here */}
      </Fluid>
    </React.Fragment>
  );
}

export default App;
