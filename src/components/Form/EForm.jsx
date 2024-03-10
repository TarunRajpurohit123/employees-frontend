import { Button, DatePicker, Input } from "antd";
import "./form.css"
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeName, addEmployeeStatus, addSkills } from "../../store/slices/employeeSlice";

const EForm = () => {
  // states
  const formData = useSelector((state)=>{return state.employeeSlice});
  const dispatch = useDispatch();

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
            <DatePicker placeholder="Joining Date" className="E__Form__Date"/>
            <DatePicker placeholder="Birth Date" className="E__Form__Date"/>
        </div>
        {/* empoyee joining end here*/}


        {/* empoyee skill goes here*/}
        <div className="form__employeeSkills" style={{marginTop:"1rem"}}>
            <Input placeholder="Skills" onChange={(e)=>{dispatch(addSkills(e.target.value))}}/>
        </div>
        {/* empoyee skill end here*/}

        {/* empoyee salary goes here*/}
        <div className="form__salaryDetail" style={{marginTop:"1rem"}}>
            <Input placeholder="Salary Detail" onChange={(e)=>{}}/>
        </div>
        {/* empoyee salary end here*/}
        
        {/* address address goes here*/}
        <div className="form__employeeAddress" style={{marginTop:"1rem"}}>
            <Input placeholder="Address and Detail" onChange={(e)=>{}}/>
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
