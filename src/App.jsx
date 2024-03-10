import React from "react";
import { Drawer, EForm, Fluid, Table, Uploader } from "./components";
import { Button } from "antd";
import { DownloadOutlined, UploadOutlined, UserAddOutlined } from "@ant-design/icons";

function App() {
  return (
    <React.Fragment>
      <Fluid>
        <div>
          <Drawer heading={"Create Employee"} label={<>Create <UserAddOutlined /></>}>
            <EForm/>
          </Drawer>
          <Drawer heading={"Bulk Upload"} label={<>Bulk Upload <UploadOutlined /></>}  btnStyles={{marginLeft:"1rem",background:"var(--dark)"}}>
            <Uploader/>
          </Drawer>
          <Button style={{marginLeft:"1rem"}}>Download Csv <DownloadOutlined/></Button>
        </div>
        <Table />
      </Fluid>
    </React.Fragment>
  );
}

export default App;
