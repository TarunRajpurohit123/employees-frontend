import React from "react";
import { Drawer, EForm, Fluid, Table, Uploader } from "./components";
import { Button } from "antd";
import { DownloadOutlined, UploadOutlined, UserAddOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import fileDownload from "js-file-download";

function App() {
  const isOpen = useSelector((state)=>{return state.drawerSlice.open});

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
          <Drawer isOpen={isOpen} heading={"Employee Form"} label={<>Create <UserAddOutlined /></>}>
            <EForm/>
          </Drawer>
          <Drawer heading={"Bulk Upload"} label={<>Bulk Upload <UploadOutlined /></>}  btnStyles={{marginLeft:"1rem",background:"var(--dark)"}}>
            <Uploader/>
          </Drawer>
          <Button style={{marginLeft:"1rem"}} onClick={()=>{downloadFile();}}>Demo Csv <DownloadOutlined/></Button>
        </div>
        <Table />
      </Fluid>
    </React.Fragment>
  );
}

export default App;
