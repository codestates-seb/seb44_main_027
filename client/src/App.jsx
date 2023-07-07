import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Make from "./Pages/Make.jsx";
import Makesports from "./Pages/Makesports.jsx";
import Makeeats from "./Pages/Makeeats.jsx";
import Makecrews from "./Pages/Makecrews.jsx";
import Workout from "./Pages/Workout";
import Diet from "./Pages/Diet"
import PostDetail from "./Pages/PostDetail";
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Router>
    <GlobalStyle />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/make" element={<Make />} />
            <Route path="/makesports" element={<Makesports />} />
            <Route path="/makeeats" element={<Makeeats />} />
            <Route path="/makecrews" element={<Makecrews />} />   
            <Route path="/workout" element={<Workout />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;