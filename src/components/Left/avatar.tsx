import { Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const AvatarWallet = () => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: <p onClick={() => handleLogout()}>Logout</p>,
      key: "Logout",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Space>
          <Avatar
            src="anh-gai-xinh-toc-ngan-76-jpg-1696391678-04102023105438.webp"
            alt="gai xinh"
            size={40}
          />
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  );
};

export default AvatarWallet;
