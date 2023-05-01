import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../firebase";
import { Form, Formik } from "formik";
import { RegisterSchema  } from "../../validation";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";


function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await login(values.username, values.password);
    if(response){
      navigate(location.state?.return_url || "/", {
      replace: true,
    });}
  };
  return (
    <>
      <div className="md:h-screen md:mt-11 bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <Link to="#">
            <img
              src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
              alt=""
              className="w-[174px]"
            />
          </Link>
          <p className="text-[17px] font-semibold leading-5	mx-10 text-center text-secondary mb-4">Sign up to see photos and videos from your friends.</p>
          <Button>Log in with Facebook</Button>
          
          <Seperator/>
          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              email: "",
              full_name: "",
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="mt-8 w-64 flex flex-col">
                <Input
                  name="email"
                  autoComplete="email"
                  placeholder="example@example.com"
                />
                <Input
                  name="full_name"
                  autoComplete="full_name"
                  placeholder="John Doe"
                />
                <Input
                  name="username"
                  autoComplete="username"
                  placeholder="Username"
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <span className="text-xs text-center text-secondary">People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-link">Learn More </a></span>
                <span className="text-xs text-center text-secondary">By signing up, you agree to our <a href="#" className="text-link">Terms</a> , <a href="#" className="text-link">Data Policy and Cookies Policy.</a></span>
                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bg-white border border-gray-300 text-center w-80 py-4">
          <span className="text-xs mr-1">Have an account?</span>
          <Link to="/auth/login" className="text-blue-500 text-sm font-semibold">Log In</Link>
        </div>
        <div className="mt-3 text-center">
          <span className="text-sm">Get the app</span>
          <div className="flex mt-3 space-x-2">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"
              alt=""
              className="h-11"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"
              alt=""
              className="h-11"
            />
            <div className="bg-no-repeat google-store-logo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
