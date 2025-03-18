import { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "bot",
    label: "Bot",
  },
  {
    label: "Strategy",
    key: "strategy",
  },
  {
    label: "Position",
    key: "position",
  },
];

const MenuApp = () => {
  const [current, setCurrent] = useState("bot");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };
  return (
    <Menu
      className="w-[240px]"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuApp;
