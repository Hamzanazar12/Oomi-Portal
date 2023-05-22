import "./App.css";
import Support from "./Components/Support.js";
import Summary from "./Components/Summary.js";
import CreateTicket from "./Components/CreateTicket";
import LineChart from "./Components/LineChart";
import ViewTicket from "./Components/ViewTicket";
import TicketDetail from "./Components/TicketDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/LogIn";

function App() {
  return (
    <div className="App">
      <Router basename="/Support">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Support" element={<Support />} />
          <Route exact path="/CreateTicket" element={<CreateTicket />} />
          <Route exact path="/ViewTicket" element={<ViewTicket />} />
          <Route exact path="/TicketDetail" element={<TicketDetail />} />
          <Route exact path="/LineChart" element={<LineChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
