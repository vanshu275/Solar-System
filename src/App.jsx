import Starting from "./component/Starting";
import Mouse from "./component/Mouse";
import Frontpage from "./pages/Frontpage";
import Planets from "./pages/Planets";
import Facts from "./pages/Facts";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="container">
      <Mouse />
      {/* <Starting /> */}
      
      <Frontpage />
      <Planets />
      <Facts />
      <Footer />
    </div>
  );
}
