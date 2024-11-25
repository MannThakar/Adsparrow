import * as yup from "yup";
import { LOGIN_MESSAGE, REQUIRED_FIELD } from "../utils/message";

const validationSchema = yup.object().shape({
  email: yup.string().required(REQUIRED_FIELD).email(LOGIN_MESSAGE.VALID_EMAIL),
  password: yup
    .string()
    .required(REQUIRED_FIELD)
    .min(8, LOGIN_MESSAGE.PASSWORD_LENGTH),
});

export default validationSchema;
