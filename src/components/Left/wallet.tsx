import { Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import BotItems from "./bots";

const Wallet = () => {
  const items: MenuProps["items"] = [
    {
      label: <BotItems />,
      key: "Logout",
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Space>
          <Avatar
            src="/public/anh-gai-xinh-toc-ngan-76-jpg-1696391678-04102023105438.webp"
            alt="gai xinh"
            size={40}
          />
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  );
};

export default Wallet;
