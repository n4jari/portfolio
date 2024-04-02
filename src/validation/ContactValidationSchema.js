import * as Yup from "yup";
export const ContactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required(),
  email: Yup.string().email().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
  recaptcha: Yup.string().required(),
});
