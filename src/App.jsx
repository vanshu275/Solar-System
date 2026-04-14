import Starting from "./component/Starting";
import Mouse from "./component/Mouse";
import Frontpage from "./pages/Frontpage";
import Planets from "./pages/Planets";
import Facts from "./pages/Facts";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="relative bg-black">
      {/* <Starting /> */}
      {/* <Mouse /> */}
      <div className="relative z-10 bg-black mb-[95vh]">
        <Frontpage />
        <Planets />
        <Facts />
      </div>
      <Footer />
    </div>
  );
}
