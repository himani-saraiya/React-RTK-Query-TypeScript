import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav className="border-red h-12 w-full flex mb-8 mt-1 space-x-4" >
          <Button variant="outlined" onClick={() => navigate("form")}>StudentsData</Button>
          <Button variant="outlined" onClick={() => navigate("data")}>StudentsForm</Button>
          <Button variant="outlined" onClick={() => navigate("formdata")}>Summary</Button>
        </nav>
      </div>
    </div>
  );
};

export default AddForm;
