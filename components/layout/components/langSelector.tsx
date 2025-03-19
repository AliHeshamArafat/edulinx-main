import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function LangSelector() {
  return (
    <Dropdown
      menu={{
        items: [
          { key: "en", label: "English" },
          { key: "es", label: "Español" },
          { key: "fr", label: "Français" },
        ],
      }}
    >
      <Button type="text" size="small">
        <Space>
          <span className="flex items-center">
            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-gray-100">🇺🇸</span>
            <span className="ml-1">USA</span>
          </span>
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}
