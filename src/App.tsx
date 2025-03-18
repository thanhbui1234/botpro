import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
