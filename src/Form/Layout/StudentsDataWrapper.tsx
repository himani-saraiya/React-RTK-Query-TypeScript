import { Form, Formik } from "formik";
import * as Yup from "yup";
import StudentsData from "./StudentsData";
import { Button} from "@mui/material";
import { object } from "yup";

export type FormValues = {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  number: string;
};

const validationSchema = object().shape({
  firstname: Yup.string().required("First Name is required"),
  middlename: Yup.string().required("Middle Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Invalid number")
    .required("Number is required"),
});

const StudentsDataWrapper = () => {
  const initialValues: FormValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    number: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <StudentsData fomikProps={props} />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentsDataWrapper;
