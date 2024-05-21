import BigButton from "../components/BigButton";
import ContainerBlur from "../components/ContainerBlur";
import ContainerInput from "../components/ContainerInput";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="middle">
      <ContainerBlur
        render={
          <>
            <div className="all-input">
              <ContainerInput text={"Email"} type={"email"} />
              <ContainerInput text={"Enter password"} type={"password"} />
            </div>
            <Link className="other-options" to='/signup'><h4>Create an account</h4></Link>
          </>
        }
      ></ContainerBlur>
        <Link className="forgot" to='/forgot'><h4>Forgot password?</h4></Link>
        <BigButton text="Sign in" link="/home"/>
    </div>
  );
};

export default SignIn;
