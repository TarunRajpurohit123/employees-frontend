import React, { useEffect, useState } from "react";
import {
  ChartComponent,
  Drawer,
  EForm,
  Fluid,
  Table,
  Uploader,
} from "./components";
import { Button, Select } from "antd";
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
  const [statusData, setStatusData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [chartType, setChartType] = useState({
    status: "bar",
    location: "bar",
  });

  const fetchStatusChart = async () => {
    axios
      .get(`${statusChart}/status`)
      .then((statusData) => {
        setStatusData(statusData.data.data.chartData);
      })
      .catch((error) => {});
  };
  const fetchLocationChart = async () => {
    axios
      .get(`${statusChart}/location`)
      .then((locationData) => {
        console.log("locationChart", locationData.data.data.locationChartData);
        setLocationData(locationData.data.data.locationChartData);
      })
      .catch((error) => {});
  };
  const fetchSalaryChart = async () => {
    axios
      .get(`${statusChart}/salary?gap=50`)
      .then((statusData) => {
        console.log("salarychart", statusData);
      })
      .catch((error) => {});
  };

  // fetch all chart related data
  useEffect(() => {
    fetchStatusChart();
    // fetchSalaryChart();
    fetchLocationChart();
  }, []);

  // download demo csv
  // download excle file
  const downloadFile = () => {
    let data =
      "EmployeeName,6,JoiningDate,BirthDate,Skills,5000,Address and other custom info";
    fileDownload(data, "demo-employee.csv");
  };

  return (
    <React.Fragment>
      <Fluid>
        <div>
          <Drawer
            isOpen={isOpen.open}
            heading={"Employee Form"}
            module={"form"}
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
            module={"uploader"}
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
          <div style={{ width: "49%" }} className="primary-shadow p-md">
            <div className="flex justify-between">
              <h1>Status Charts:</h1>
              <Select
                value={chartType.status}
                options={[
                  { value: "bar", label: "Bar Chart" },
                  { value: "line", label: "Line Chart" },
                  { value: "pie", label: "Pie Chart" },
                ]}
                placeholder="Chart Type"
                onChange={(e) => {
                  setChartType({ ...chartType, status: e });
                }}
              />
            </div>
            <ChartComponent
              data={statusData}
              xField={"status"}
              yField={["count", "percentage"]}
              chartType={chartType.status}
            />
          </div>
          <div style={{ width: "49%" }} className="primary-shadow p-md">
            <div className="flex justify-between">
              <h1>Location Charts:</h1>
              <Select
                value={chartType.location}
                options={[
                  { value: "bar", label: "Bar Chart" },
                  { value: "line", label: "Line Chart" },
                  { value: "pie", label: "Pie Chart" },
                ]}
                placeholder="Chart Type"
                onChange={(e) => {
                  setChartType({ ...chartType, location: e });
                }}
              />
            </div>
            <ChartComponent
              xField={"location"}
              yField={["count", "percentage"]}
              data={locationData}
              chartType={chartType.location}
            />
          </div>
          <div
            style={{ width: "49%", marginTop: "2rem" }}
            className="primary-shadow p-md"
          >
            <div className="flex justify-between">
              <h1>Location Charts:</h1>
            </div>
            <ChartComponent chartType={"pie"} />
          </div>
        </section>
        {/* chart end here */}
      </Fluid>
    </React.Fragment>
  );
}

export default App;
