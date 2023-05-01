import Yup from "./validate";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email").required(),
  full_name: Yup.string().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default RegisterSchema;
