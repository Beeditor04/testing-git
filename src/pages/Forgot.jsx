import BigButton from "../components/BigButton";
import ContainerBlur from "../components/ContainerBlur";
import ContainerInput from "../components/ContainerInput";
import { Link } from "react-router-dom";
const Forgot = () => {
  return (
    <div className="middle">
      <ContainerBlur
        render={
          <>
            <div className="all-input">
              <ContainerInput text={"Old password"} type={"password"} />
              <ContainerInput text={"New password"} type={"password"} />
              <ContainerInput text={"Confirm new password"} type={"password"} />
            </div>
            <Link className="other-options" to='/signin'><h4>Back to sign in</h4></Link>
          </>
        }
      ></ContainerBlur>
        <BigButton text="Confirm" link="/home"/>
    </div>
  );
};

export default Forgot;
