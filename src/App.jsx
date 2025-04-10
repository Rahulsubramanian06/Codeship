import "bootstrap/dist/css/bootstrap.min.css";
import "./util.css";
import "https://kit.fontawesome.com/34b5d4d2a7.js";
import { Navs } from "./components/Nav.jsx";
import { Landing_page } from "./components/landing_page.jsx";
import {Footer} from "./components/footer.jsx";
export default function App() {
  return (
    <div className="home">
      <Navs />
      <Landing_page />
      <Footer />
    </div>
  );
}
