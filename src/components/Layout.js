import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
const Layout= () => {
  return (
      <div>
          <Navbar/>
          <Outlet/>
          <footer>Geeks 2023</footer>
      </div>
  );
}

export default Layout;
