import React from "react";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormValidation from "./FormValidation";
import { Button } from "@mui/material";

export type FormValues = {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  number: string;
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First Name is required'),
  middlename: Yup.string().required('Middle Name is required'),
  lastname: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  number: Yup.string().matches(/^[0-9]+$/, 'Invalid number').required('Number is required'),
});

const FormValidationWrapper = () => {
  const initialValues: FormValues = {
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    password: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => {
      console.log(values);
    }} validationSchema={validationSchema}>
      {(props) => (
        <Form>
          <FormValidation fomikProps={props}/>
          <Button
          type="submit"
          className="text-blue-300 border-2 border-slate-600 w-40"
        >
          Save
        </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormValidationWrapper;
