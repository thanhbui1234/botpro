import { Outlet } from "react-router-dom";
import MenuApp from "../../components/menu/menu";
import Left from "../../components/Left";
import { Avatar } from "antd";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border border-gray-300 text-white p-4 text-xl font-bold flex justify-between">
        <Avatar
          size={40}
          alt="Logo"
          src="459032556_4652162325009674_2150175736681819297_n.jpg"
        />
        <MenuApp />
        <Left />
      </header>
      <main className="flex-1 p-4 flex flex-col ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
