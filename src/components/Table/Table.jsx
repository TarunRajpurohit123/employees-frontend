import { Button, Drawer, Popconfirm, Table } from "antd";
import "./table.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { deleteEmployee, fetchAllEmployee } from "../../api/api";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { addDrawerStatus, addEditEmployee, diableFormFunc, toggleDrawer } from "../../store/slices/drawerSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeState } from "../../store/slices/employeeSlice";
import { useEffect, useState } from "react";
import { addTableData } from "../../store/slices/tableSlice";

const fetchData = async () => {
  const response = await axios.get(fetchAllEmployee);
  return response.data.data;
};

const ETable = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state)=>{return state.tableSlice.data})
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.delete(`${deleteEmployee}/${data.id}`, {});
    },
    onSuccess: (data) => {
      alert("Employee deleted successfully");
      const responseData = fetchData();
      console.log("responseData-",responseData)
      responseData.then((res)=>{
        dispatch(addTableData(res));
      }).catch((err)=>{})
    }
  });

  // cancle delete operation
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  // delete current Employee
  const confirmDelete = (data) => {
    mutation.mutate(data);
  };

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
          <EditOutlined className="acts act__edit" onClick={() => {
              editData(data);
            }}/>
          <Popconfirm
            title="Delete the employee"
            description="Are you sure to delete this employee?"
            onConfirm={() => {
              confirmDelete(data);
            }}
            onCancel={cancel}
            okText="delete"
            cancelText="cancle"
          >
            <DeleteOutlined className="acts act__delete" />
          </Popconfirm>
        </>
      ),
    },
  ];

  // view employee
  const viewData = (data) => {
    console.log("viewData", data);
    dispatch(
      updateEmployeeState({
        EmployeeName: data.EmployeeName,
        EmployeeStatus: data.employeeStatusId,
        JoiningDate: data.JoiningDate,
        BirthDate: data.BirthDate,
        Skills: data.Skills,
        SalaryDetails: data.SalaryDetails,
        Address: data.Address,
      })
    );
    dispatch(diableFormFunc(true));
    dispatch(toggleDrawer(true));
  };

  // delete employee 
  const editData = (data) => {
    dispatch(
      updateEmployeeState({
        EmployeeName: data.EmployeeName,
        EmployeeStatus: data.employeeStatusId,
        JoiningDate: data.JoiningDate,
        BirthDate: data.BirthDate,
        Skills: data.Skills,
        SalaryDetails: data.SalaryDetails,
        Address: data.Address,
      })
    );
    dispatch(addEditEmployee(data.id));
    dispatch(addDrawerStatus("EDIT"));
    dispatch(toggleDrawer(true));
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["getAllEmployees"],
    queryFn: fetchData,
  });
  
  useEffect(()=>{
    // setTableData(data)
    dispatch(addTableData(data));
  },[data])

  return (
    <>
      <Table
        size={3}
        className="E__table"
        columns={columns}
        dataSource={tableData}
      ></Table>
    </>
  );
};

export default ETable;
export {fetchData}
