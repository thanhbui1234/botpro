import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-xl font-bold">
        Header
      </header>
      <main className="flex-1 p-4 flex flex-col justify-center items-center ">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">Footer</footer>
    </div>
  );
};

export default Layout;
