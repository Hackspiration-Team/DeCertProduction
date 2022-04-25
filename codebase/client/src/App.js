import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
import { 
  FormView,
  IndexView,
  SigninBusinessView,
  SigninStudentView,
} from './views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/form" element={<FormView />} />
        <Route path="/signin-business" element={<SigninBusinessView />} />
        <Route path="/signin-student" element={<SigninStudentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
