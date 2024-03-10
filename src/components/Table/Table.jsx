import { Button, Drawer, Table } from "antd";
import "./table.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchAllEmployee } from "../../api/api";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { toggleDrawer } from "../../store/slices/drawerSlice";
import { useDispatch } from "react-redux";
import { updateEmployeeState } from "../../store/slices/employeeSlice";

const fetchData = async () => {
  const response = await axios.get(fetchAllEmployee);
  return response.data.data;
};




const ETable = () => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "EmployeeId",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Employee Name",
      dataIndex: "EmployeeName",
      key: "EmployeeName",
    },
    {
      title: "Employee Status",
      dataIndex: ["employeeStatus", "status"],
      key: ["employeeStatus", "status"],
    },
    {
      title: "Joining Date",
      dataIndex: "JoiningDate",
      key: "JoiningDate",
    },
    {
      title: "Birth Date",
      dataIndex: "BirthDate",
      key: "BirthDate",
    },
    {
      title: "Skills",
      dataIndex: "Skills",
      key: "Skills",
    },
    {
      title: "Salary Details",
      dataIndex: "SalaryDetails",
      key: "SalaryDetails",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "Actions",
      key: "Actions",
      render: (data) => (
        <>
          <EyeOutlined
            className="acts act__eye"
            onClick={() => {
              viewData(data);
            }}
          />
          <EditOutlined className="acts act__edit" />
          <DeleteOutlined className="acts act__delete" />
        </>
      ),
    },
  ];
  const viewData = (data) => {
    console.log("viewData",data)
    dispatch(updateEmployeeState({
      EmployeeName: data.EmployeeName,
      EmployeeStatus: data.employeeStatusId,
      JoiningDate: data.JoiningDate,
      BirthDate: data.BirthDate,
      Skills: data.Skills,
      SalaryDetails: data.SalaryDetails,
      Address: data.Address,
    }));
    dispatch(toggleDrawer(true));
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["getAllEmployees"],
    queryFn: fetchData,
  });
  console.log("allEmployeeData", data);

  return (
    <>
      <Table
        size={3}
        className="E__table"
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  );
};

export default ETable;
