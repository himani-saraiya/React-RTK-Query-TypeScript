import { Provider } from "react-redux";
import './App.css'
import { store } from "./Store/store";
// import PersonalDataTableWrapper from "./Table/PersonalDataTableWrapper";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FatchData from "./Componants/FatchData";
import Buy from "./Screen/Buy";
import Alertpage from "./Componants/Alertpage";

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersonalDataTableWrapper /> */}
      <Router>
      {/* // <AddForm /> */}
      <Routes>
      <Route path="/" element={<FatchData />} />
      <Route path="/products/:elId" element={<Buy />} />
      <Route path="/productconfirmed" element={<Alertpage/>}/>

      {/* // <Route path="/form" element={<StudentsDataWrapper />} /> */}
      {/* // <Route path="formdata" element={<FormValidationWrapper />} /> */}
      {/* // <Route path="data" element={<Alertpage />} /> */}
      </Routes>
      </Router>
    </Provider>
  );
};

export default App;
