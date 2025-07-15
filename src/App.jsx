import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./component/pages/Home";
import RootLayout from "./component/layout/RootLayout";
import Shop from "./component/pages/Shop";
import Collection from "./component/pages/Collection";
import Journal from "./component/pages/Journal";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<RootLayout/>}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/shop'} element={<Shop/>} />
          <Route path={'/collection'} element={<Collection/>} />
          <Route path={'/journal'} element={<Journal/>} />
         
        </Route>        

      </Routes>
    </>
  );
}

export default App;
