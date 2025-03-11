import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="max-h-[100vh] overflow-auto">
      <div className="w-full">
        <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-4 bg-[#f2f2f2]">
          <div className="w-[390px] bg-white rounded-[10px] overflow-hidden p-[77px] pt-[77px] pb-[33px] px-[55px] shadow-2xl flex justify-center items-center flex-col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
