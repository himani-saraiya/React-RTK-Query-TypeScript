import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./store";
import Practice from "./screen/Practice";
import Comments from "./screen/Comments";
import './tailwind.css';


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Practice />} />
            <Route path="/comments/:postId" element={<Comments />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
