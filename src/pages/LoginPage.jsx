import { useState, useEffect } from "react";
import { setUser } from "../store/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../firebase";

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

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const enable = username && password;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
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

      <div className="h-screen bg-gray-50 flex flex-col flex-wrap overflow-auto justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <a href="#">
            <img
              src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
              alt=""
              className="w-[174px]"
            />
          </a>
          <form onSubmit={handleSubmit} className="mt-8 w-64 flex flex-col">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Phone number, username, or email"
              autoComplete="true"
              type="text"
              required
            />
            <label className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="true"
                className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none pr-10 text-ellipsis"
                id="password"
                required
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                className={`${
                  password !== "" ? "visible" : "invisible"
                } absolute top-2 right-2 h-1/2 flex items-start text-xs font-semibold`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Show" : "Hide"}
              </button>
            </label>
            <button
              type="submit"
              disabled={!enable}
              className=" text-sm text-center bg-brand text-white py-2 px-4 rounded-lg font-medium disabled:bg-brand/70"
            >
              Log In
            </button>
          </form>
          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-grow relative top-2"></span>
          </div>
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
          <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
            Forgot password?
          </a>
        </div>
        <div className="bg-white border border-gray-300 text-center w-80 py-4">
          <span className="text-xs mr-1">Don't have an account?</span>
          <a className="text-blue-500 text-sm font-semibold">Sign up</a>
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
