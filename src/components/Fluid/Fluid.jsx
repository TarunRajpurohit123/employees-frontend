import Sidebar from "../Sidebar/Sidebar";
import "./fluid.css"

const Fluid = ({children}) => {
  return (
    <>
      <div className="E__fluid flex">
        <Sidebar />
        {/* main app goes here */}
        <section className="E__main__container">
          {children}
        </section>
        {/* main app end here */}
      </div>
    </>
  );
};

export default Fluid;
