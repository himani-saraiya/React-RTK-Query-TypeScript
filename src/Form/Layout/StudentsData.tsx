import ATMTextField from "../../Atoms/ATMTextField";
import { FormikProps } from "formik";

type Prop = { fomikProps: FormikProps<any> };

const StudentsData = ({ fomikProps }: Prop) => {
  const { values,setValues } = fomikProps;

  const handleNameChange = (event: any) => {
    setValues(event.target.value);
  };

  return (
    <form onSubmit={handleNameChange}>
      <div className="grid grid-cols-3 gap-4 ml-4">
        <ATMTextField
          label=""
          name="firstname"
          value={values.firstname}
          placeholder="Enter your firstname"
          required
          onChange={handleNameChange}
        />
        
        <ATMTextField
          label=""
          name="middlename"
          value={values.middlename}
          placeholder="Enter your middlename"
          required
          onChange={handleNameChange}
        />
        
        <ATMTextField
          label=""
          name="lastname"
          value={values.lastname}
          placeholder="Enter your lastname"
          required
          onChange={handleNameChange}
        />
        <ATMTextField
          label=""
          name="email"
          value={values.email}
          placeholder="Enter your email"
          required
          onChange={handleNameChange}
        />
        <ATMTextField
          label=""
          name="number"
          value={values.number}
          placeholder="Enter your number"
          required
          onChange={handleNameChange}
        />
        <ATMTextField
          label=""
          name="Password"
          value={values.Password}
          placeholder="Enter your Password"
          required
          onChange={handleNameChange}
        />
      </div>
    </form>
  );
};

export default StudentsData;
