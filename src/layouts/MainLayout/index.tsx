import { Outlet } from "react-router-dom";
import MenuApp from "../../components/menu/menu";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border border-gray-300 text-white p-4 text-xl font-bold flex justify-between">
        <img
          className="rounded-xl w-[50px]"
          src="/public/459032556_4652162325009674_2150175736681819297_n.jpg"
          alt="Logo"
        />
        <MenuApp />
        <img
          className="rounded-xl w-[50px]"
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
