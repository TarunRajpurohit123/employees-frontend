import { Alert, Button, DatePicker, Input, Select } from "antd";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  addBirthDate,
  addEmployeeName,
  addEmployeeStatus,
  addJoiningDate,
  addSalaryDetails,
  addSkills,
  clearAll,
} from "../../store/slices/employeeSlice";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createEmployee, editEmployee, getStatus, statusChart } from "../../api/api";
import { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { convertToAntDatePickerDate } from "../../helpers/formateDate";
import { fetchData } from "../Table/Table";
import { addTableData } from "../../store/slices/tableSlice";

const dateFormat = "MM-DD-YYYY";
dayjs.extend(customParseFormat);

const EForm = ({ fetchStatusChart,fetchLocationChart }) => {
  // states
  const formData = useSelector((state) => {
    return state.employeeSlice;
  });
  const drawerRelated = useSelector((state) => {
    return state.drawerSlice;
  });
  const dispatch = useDispatch();
  const [allStatus, setAllStatus] = useState([]);
  const isDisable = useSelector((state) => {
    return state.drawerSlice.drawerFormDisable;
  });

  // fetch status
  const { data, isLoading, error } = useQuery({
    queryKey: ["getSatatus"],
    queryFn: async () => {
      const response = await axios.get(`${getStatus}`);
      return response.data.data;
    },
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => {
      if (drawerRelated.drawerStatus === "CREATE") {
        return axios.post(createEmployee, data);
      } else {
        console.log("EditData", data);
        return axios.put(`${editEmployee}/${drawerRelated.editEmployee}`, {
          EmployeeName: data.EmployeeName,
          employeeStatusId: Number(data.EmployeeStatus),
          JoiningDate: data.JoiningDate,
          BirthDate: data.BirthDate,
          Skills: data.Skills,
          SalaryDetails: data.SalaryDetails,
          Address: data.Address,
        });
      }
    },
    onSuccess: (e) => {
      if (drawerRelated.drawerStatus === "CREATE") {
        dispatch(clearAll());
        alert("employee saved successfully");
        const res = fetchData();
        fetchStatusChart();
        fetchLocationChart();
        res
          .then((single) => {
            dispatch(addTableData(single));
          })
          .catch((err) => {});
      } else {
        alert("employee updated successfully");
        const res = fetchData();
        fetchStatusChart();
        fetchLocationChart();
        res
          .then((single) => {
            dispatch(addTableData(single));
          })
          .catch((err) => {});
      }
    },
    onError: (e) => {
      console.log("onError", e?.response?.data?.message);
      alert(
        e?.response?.data?.message
          ? e?.response?.data?.message
          : "something went wrong"
      );
    },
  });

  console.log("getSatatusData", data);

  // when user choose date from calender
  const changeDate = (e, type) => {
    console.log("DateEvent", e, `${e.$M}-${e.$D}-${e.$y}`);
    if (type === "BirthDate") {
      dispatch(addBirthDate(`${e.$M}-${e.$D}-${e.$y}`));
      return;
    }
    dispatch(addJoiningDate(`${e.$M}-${e.$D}-${e.$y}`));
  };

  console.log("formData", formData);
  return (
    <>
      <div className="E__form">
        {/* empoyee name goes here*/}
        <div className="form__employeeName">
          <Input
            placeholder="Employee Name"
            onChange={(e) => {
              dispatch(addEmployeeName(e.target.value));
            }}
            value={formData.EmployeeName}
            disabled={isDisable}
          />
        </div>
        {/* empoyee name end here*/}

        {/* empoyee status goes here*/}
        <div className="form__employeeStatus" style={{ marginTop: "1rem" }}>
          <Select
            disabled={isDisable}
            value={formData.EmployeeStatus}
            options={data}
            placeholder={"Employee Status"}
            className="E__Form__EStatus"
            onChange={(e) => {
              dispatch(addEmployeeStatus(e));
            }}
          />
        </div>
        {/* empoyee status end here*/}

        {/* empoyee joining date goes here*/}
        <div
          className="form__employeeJoinDate flex justify-between"
          style={{ marginTop: "1rem" }}
        >
          <DatePicker
            placeholder="Joining Date"
            name="JoiningDate"
            className="E__Form__Date"
            disabled={isDisable}
            onChange={(e) => {
              changeDate(e, "JoiningDate");
            }}
            value={dayjs(
              convertToAntDatePickerDate(formData.JoiningDate),
              dateFormat
            )}
          />
          <DatePicker
            placeholder="Birth Date"
            name="BirthDate"
            disabled={isDisable}
            className="E__Form__Date"
            onChange={(e) => {
              changeDate(e, "BirthDate");
            }}
            value={dayjs(
              convertToAntDatePickerDate(formData.BirthDate),
              dateFormat
            )}
          />
        </div>
        {/* empoyee joining end here*/}

        {/* empoyee skill goes here*/}
        <div className="form__employeeSkills" style={{ marginTop: "1rem" }}>
          <Input
            placeholder="Skills"
            disabled={isDisable}
            onChange={(e) => {
              dispatch(addSkills(e.target.value));
            }}
            value={formData.Skills}
          />
        </div>
        {/* empoyee skill end here*/}

        {/* empoyee salary goes here*/}
        <div className="form__salaryDetail" style={{ marginTop: "1rem" }}>
          <Input
            placeholder="Salary Detail"
            disabled={isDisable}
            type="number"
            onChange={(e) => {
              dispatch(addSalaryDetails(e.target.value));
            }}
            value={formData.SalaryDetails}
          />
        </div>
        {/* empoyee salary end here*/}

        {/* address address goes here*/}
        <div className="form__employeeAddress" style={{ marginTop: "1rem" }}>
          <Input
            placeholder="Address and Detail"
            disabled={isDisable}
            onChange={(e) => {
              dispatch(addAddress(e.target.value));
            }}
            value={formData.Address}
          />
        </div>
        {/* address address end here*/}

        <div
          className="form__button"
          style={isDisable ? { display: "none" } : { marginTop: "2rem" }}
        >
          <Button
            className="form__mainBtn"
            disabled={mutation.isPending}
            onClick={() => {
              mutation.mutate(formData);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default EForm;
