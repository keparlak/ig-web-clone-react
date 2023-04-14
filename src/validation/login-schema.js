import Yup from "./validate";

const LoginSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email").required(),
  password: Yup.string().required(),
});

export default LoginSchema;
