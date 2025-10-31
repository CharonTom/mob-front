import AppRoutes from "./routes/index";
import { HashRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
