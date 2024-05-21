import BigButton from "../components/BigButton";
import ContainerBlur from "../components/ContainerBlur";
import ContainerInput from "../components/ContainerInput";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="middle">
      <ContainerBlur
        render={
          <>
            <div className="all-input">
              <ContainerInput text={"Email"} type={"email"} />
              <ContainerInput text={"Phone number"} type={"number"} />
              <ContainerInput text={"Enter password"} type={"password"} />
              <ContainerInput text={"Confirm password"} type={"password"} />
            </div>
            <Link className="other-options" to='/signin'><h4>Sign in</h4></Link>
          </>
        }
      ></ContainerBlur>
        <BigButton text="Sign Up" link="/home"/>
    </div>
  );
};

export default SignUp;
