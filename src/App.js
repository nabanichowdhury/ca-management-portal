import { Route, Routes } from "react-router-dom";
import './App.css';
import FirstPage from './pages/FirstPage/FirstPage';
import LoginForAdmin from "./pages/LoginForAdmin/LoginForAdmin";
import LoginForParticipants from "./pages/LoginForParticipants/LoginForParticipants";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<FirstPage></FirstPage>}></Route>
        <Route path="/adminLogin" element={<LoginForAdmin></LoginForAdmin>}></Route>
        <Route path="/participantLogin" element={<LoginForParticipants></LoginForParticipants>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
