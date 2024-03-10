import { Button, Drawer, Popconfirm, Table } from "antd";
import "./table.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { deleteEmployee, fetchAllEmployee } from "../../api/api";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { diableFormFunc, toggleDrawer } from "../../store/slices/drawerSlice";
import { useDispatch } from "react-redux";
import { updateEmployeeState } from "../../store/slices/employeeSlice";

const fetchData = async () => {
  const response = await axios.get(fetchAllEmployee);
  return response.data.data;
};

const ETable = () => {
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.delete(`${deleteEmployee}/${data.id}`, {});
    },
  });
  const dispatch = useDispatch();

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
          <EditOutlined className="acts act__edit" />
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
