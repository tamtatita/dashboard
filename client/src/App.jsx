import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouter } from "./components/routes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {publicRouter.map((route) => {
          const Page = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Page />} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
