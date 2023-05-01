import Yup from "./validate";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(),
  full_name: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default RegisterSchema;
