import AppStart from "./components/mainpage/AppStart";
import BoardDetail from "./components/boarddetails/BoardDetail";
import MainSection from "./components/mainpage/MainSection";
import Error from "./components/Error";
import LoginForm from "./components/form/LoginForm";
import SignUpForm from "./components/form/SignUpForm";
import ProtectedRoute from "./components/mainpage/ProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppStart />
              </ProtectedRoute>
            }
          >
            <Route index element={<MainSection />} />
            <Route path=":boardId/:boardName" element={<BoardDetail />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
  );
}

export default App;
