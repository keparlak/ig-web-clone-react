import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../firebase";
import { Form, Formik } from "formik";
import { LoginSchema } from "../../validation";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";

const images = [
  "/screenshot1-2x.png",
  "/screenshot2-2x.png",
  "/screenshot3-2x.png",
  "/screenshot4-2x.png",
];
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const handleSubmit = async (values, actions) => {
    const response = await login(values.username, values.password);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };
  return (
    <>
      <div className="hidden md:block w-[380px] h-[581px] bg-login-bg bg-[length:468.32px_634.15px] bg-[-46px_0] relative mr-8">
        <div className="w-[250px] h-[539px] absolute top-[27px] right-[18px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ease-linear ${
                index === current ? "" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="md:h-screen md:mt-11 bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <Link to="#">
            <img
              src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
              alt=""
              className="w-[174px]"
            />
          </Link>

          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="mt-8 w-64 flex flex-col">
                <Input
                  name="username"
                  autoComplete="username"
                  placeholder="Phone number, username, or email"
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
          <Seperator />
          <button className="mt-4 flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt=""
              className="mr-1 w-4"
            />
            <span className="text-xs text-blue-900 font-semibold">
              Log in with Facebook
            </span>
          </button>
          <Link className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
            Forgot password?
          </Link>
        </div>
        <div className="bg-white border border-gray-300 text-center w-80 py-4">
          <span className="text-xs mr-1">Don't have an account?</span>
          <Link
            to="/auth/register"
            className="text-blue-500 text-sm font-semibold"
          >
            Sign up
          </Link>
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

export default LoginPage;
