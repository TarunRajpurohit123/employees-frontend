import { Button, DatePicker, Input } from "antd";
import "./form.css"
import { useDispatch, useSelector } from "react-redux";
import { addAddress, addBirthDate, addEmployeeName, addEmployeeStatus, addJoiningDate, addSalaryDetails, addSkills } from "../../store/slices/employeeSlice";

const EForm = () => {
  // states
  const formData = useSelector((state)=>{return state.employeeSlice});
  const dispatch = useDispatch();

  // when user choose date from calender
  const changeDate = (e,type) => {
    console.log("DateEvent",e,`${e.$M}-${e.$D}-${e.$y}`)
    if(type==="BirthDate"){
      dispatch(addBirthDate(`${e.$M}-${e.$D}-${e.$y}`));
      return;
    }
    dispatch(addJoiningDate(`${e.$M}-${e.$D}-${e.$y}`));
  }

  console.log("formData",formData)
  return (
    <>
      <div className="E__form">

        {/* empoyee name goes here*/}
        <div className="form__employeeName">
            <Input placeholder="Employee Name" onChange={(e)=>{dispatch(addEmployeeName(e.target.value))}}/>
        </div>
        {/* empoyee name end here*/}

         {/* empoyee status goes here*/}
         <div className="form__employeeStatus" style={{marginTop:"1rem"}}>
            <Input placeholder="Employee Status" onChange={(e)=>{addEmployeeStatus(e.target.value)}}/>
        </div>
        {/* empoyee status end here*/}

        {/* empoyee joining date goes here*/}
        <div className="form__employeeJoinDate flex justify-between" style={{marginTop:"1rem"}}>
            <DatePicker placeholder="Joining Date" name="JoiningDate" className="E__Form__Date" onChange={(e)=>{changeDate(e,"JoiningDate")}}/>
            <DatePicker placeholder="Birth Date" name="BirthDate" className="E__Form__Date" onChange={(e)=>{changeDate(e,"BirthDate")}}/>
        </div>
        {/* empoyee joining end here*/}


        {/* empoyee skill goes here*/}
        <div className="form__employeeSkills" style={{marginTop:"1rem"}}>
            <Input placeholder="Skills" onChange={(e)=>{dispatch(addSkills(e.target.value))}}/>
        </div>
        {/* empoyee skill end here*/}

        {/* empoyee salary goes here*/}
        <div className="form__salaryDetail" style={{marginTop:"1rem"}}>
            <Input placeholder="Salary Detail" type="number" onChange={(e)=>{dispatch(addSalaryDetails(e.target.value))}}/>
        </div>
        {/* empoyee salary end here*/}
        
        {/* address address goes here*/}
        <div className="form__employeeAddress" style={{marginTop:"1rem"}}>
            <Input placeholder="Address and Detail" onChange={(e)=>{dispatch(addAddress(e.target.value))}}/>
        </div>
        {/* address address end here*/}

        <div className="form__button" style={{marginTop:"2rem"}}>
            <Button className="form__mainBtn">Create</Button>
        </div>

      </div>
    </>
  );
};

export default EForm;
