import { Button, Table } from "antd";
import "./table.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchAllEmployee } from "../../api/api";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

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
    render: () => (
      <>
        <EyeOutlined  className="acts act__eye"/>
        <EditOutlined  className="acts act__edit"/>
        <DeleteOutlined  className="acts act__delete"/>
      </>
    ),
  },
];

const fetchData = async () => {
  const response = await axios.get(fetchAllEmployee);
  let customData = [];
  return response.data.data;
};

const ETable = () => {
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
