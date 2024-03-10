import { Button, Input } from "antd";
import "./form.css"

const EForm = () => {
  return (
    <>
      <div className="E__form">

        {/* empoyee name goes here*/}
        <div className="form__employeeName">
            <Input placeholder="Employee Name"/>
        </div>
        {/* empoyee name end here*/}

         {/* empoyee status goes here*/}
         <div className="form__employeeStatus" style={{marginTop:"1rem"}}>
            <Input placeholder="Employee Status"/>
        </div>
        {/* empoyee status end here*/}

        {/* empoyee joining date goes here*/}
        <div className="form__employeeJoinDate" style={{marginTop:"1rem"}}>
            <Input placeholder="Joining Date"/>
        </div>
        {/* empoyee joining end here*/}

         {/* empoyee birthday date goes here*/}
         <div className="form__employeeBirthDate" style={{marginTop:"1rem"}}>
            <Input placeholder="Birth Date"/>
        </div>
        {/* empoyee birthday end here*/}

        {/* empoyee skill goes here*/}
        <div className="form__employeeSkills" style={{marginTop:"1rem"}}>
            <Input placeholder="Skills"/>
        </div>
        {/* empoyee skill end here*/}

        {/* empoyee salary goes here*/}
        <div className="form__salaryDetail" style={{marginTop:"1rem"}}>
            <Input placeholder="Salary Detail"/>
        </div>
        {/* empoyee salary end here*/}
        
        {/* address address goes here*/}
        <div className="form__employeeAddress" style={{marginTop:"1rem"}}>
            <Input placeholder="Address and Detail"/>
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
