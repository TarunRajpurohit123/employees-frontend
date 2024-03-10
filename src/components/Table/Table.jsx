import { Button, Table } from "antd";
import "./table.css";

const columns = [
  {
    title: "EmployeeId",
    dataIndex: "EmployeeId",
    key: "EmployeeId",
  },
  {
    title: "Employee Name",
    dataIndex: "EmployeeName",
    key: "EmployeeName",
  },
  {
    title: "Employee Status",
    dataIndex: "EmployeeStatus",
    key: "EmployeeStatus",
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
   dataIndex: "SalaryDetail",
   key: "SalaryDetail",
 },
 {
   title: "Address",
   dataIndex: "Address",
   key: "Address",
 },
 {
   title: "Actions",
   dataIndex: "Actions",
   key: "Actions",
 },
];

const ETable = () => {
  return (
    <>
      <Table className="E__table" columns={columns} dataSource={[]}></Table>
    </>
  );
};

export default ETable;
