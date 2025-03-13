import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border border-gray-300 text-white p-4 text-xl font-bold">
        <img
          className="rounded-xl w-[25px]"
          src="/public/459032556_4652162325009674_2150175736681819297_n.jpg"
          alt="Logo"
        />
      </header>
      <main className="flex-1 p-4 flex flex-col justify-center items-center ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
