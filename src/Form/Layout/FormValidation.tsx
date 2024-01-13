import React from "react";
import {TextField } from "@mui/material";
import { useFormik } from "formik";
import { FormikProps } from "formik";

interface FormValues {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  number: string;
}

const initialValues: FormValues = {
  firstname: "",
  middlename: "",
  lastname: "",
  email: "",
  password: "",
  number: "",
};

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  }

  if (!values.middlename) {
    errors.middlename = "Required";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/[A-Z]/.test(values.password) ||
    !/[0-9]/.test(values.password) ||
    /[aeiou]/.test(values.password) ||
    !/^[@#][A-Za-z0-9]{7,13}$/.test(values.password)
  ) {
    errors.password = "Invalid password format";
  }

  if (!/^[7-9][0-9]{9}$/.test(values.number)) {
    errors.number = "Must be a valid 10-digit phone number";
    // console.log(values.number , "length" , values.number.toString().length)
  }

  return errors;
};

type prop = { fomikProps: FormikProps<any> };

const FormValidation = ({ fomikProps }: prop) => {
  const { values } = fomikProps;

  console.log(values, "values to console");

  const formik = useFormik({
    initialValues, validate,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <TextField
          name="firstname"
          label="First Name"
          variant="outlined"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.middlename && Boolean(formik.errors.middlename)}
          helperText={formik.touched.middlename && formik.errors.middlename}
        />
        <TextField
          id="middlename"
          name="middlename"
          label="Middle Name"
          variant="outlined"
          fullWidth
          value={formik.values.middlename}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.middlename && Boolean(formik.errors.middlename)}
          helperText={formik.touched.middlename && formik.errors.middlename}
        />
        <TextField
          id="lastname"
          name="lastname"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
          id="number"
          name="number"
          type="number"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
      <div className="flex justify-end">
        {/* <Button
          type="submit"
          className="text-blue-300 border-2 border-slate-600 w-40"
        >
          Save
        </Button> */}
      </div>
    </div>
  );
};

export default FormValidation;
