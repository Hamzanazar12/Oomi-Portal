import "./App.css";
import Support from "./Components/Support.js";
import Summary from "./Components/Summary.js";
import CreateTicket from "./Components/CreateTicket";
import LineChart from "./Components/LineChart";
import ViewTicket from "./Components/ViewTicket";
import TicketDetail from "./Components/TicketDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Support />} />
          <Route exact path="/CreateTicket" element={<CreateTicket />} />
          <Route exact path="/ViewTicket" element={<ViewTicket />} />
          <Route exact path="/TicketDetail" element={<TicketDetail />} />
          <Route exact path="/LineChart" element={<LineChart />} />

          {/*<Route exact path="/" element={<Summary />} />
          <LineChart />
          {/* <Support />
          <Supportticket />
          <Summary /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
