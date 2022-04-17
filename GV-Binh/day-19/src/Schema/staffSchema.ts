import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    name: yup.string().required("This fied is required!"),
    phongBan: yup.string().required("This fied is required!"),
    chucVu: yup.string().required("This fied is required!"),
  })
  .required();
