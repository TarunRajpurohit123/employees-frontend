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
import axios from "axios"
import { createEmployee, getStatus } from "../../api/api";
import { useState } from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { convertToAntDatePickerDate } from "../../helpers/formateDate";

const dateFormat = 'MM-DD-YYYY';
dayjs.extend(customParseFormat);

const EForm = () => {
  // states
  const formData = useSelector((state) => {
    return state.employeeSlice;
  });
  const dispatch = useDispatch();
  const [allStatus,setAllStatus] = useState([])

  // fetch status
  const { data, isLoading, error } = useQuery({queryKey:["getSatatus"], queryFn:async () => {
    const response = await axios.get(`${getStatus}`);
    return response.data.data;
  }});

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(createEmployee,data);
    },
    onSuccess:(e)=>{
      dispatch(clearAll());
      alert("employee saved successfully")
    },
    onError: (e) => {
      console.log("onError",e?.response?.data?.message)
      alert(e?.response?.data?.message?e?.response?.data?.message:"something went wrong")
    }
  })

console.log("getSatatusData",data)
    
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
          />
        </div>
        {/* empoyee name end here*/}

        {/* empoyee status goes here*/}
        <div className="form__employeeStatus" style={{ marginTop: "1rem" }}>
          <Select value={formData.EmployeeStatus} options={data} placeholder={"Employee Status"} className="E__Form__EStatus" onChange={(e)=>{dispatch(addEmployeeStatus(e))}}/>
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
            onChange={(e) => {
              changeDate(e, "JoiningDate");
            }}
            value={dayjs(convertToAntDatePickerDate(formData.JoiningDate),dateFormat)}
          />
          <DatePicker
            placeholder="Birth Date"
            name="BirthDate"
            className="E__Form__Date"
            onChange={(e) => {
              changeDate(e, "BirthDate");
            }}
            value={dayjs(convertToAntDatePickerDate(formData.BirthDate),dateFormat)}
          />
        </div>
        {/* empoyee joining end here*/}

        {/* empoyee skill goes here*/}
        <div className="form__employeeSkills" style={{ marginTop: "1rem" }}>
          <Input
            placeholder="Skills"
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
            onChange={(e) => {
              dispatch(addAddress(e.target.value));
            }}
            value={formData.Address}
          />
        </div>
        {/* address address end here*/}

        <div className="form__button" style={{ marginTop: "2rem" }}>
          <Button className="form__mainBtn" disabled={mutation.isPending} onClick={()=>{mutation.mutate(formData)}}>Create</Button>
        </div>
      </div>
    </>
  );
};

export default EForm;
