import { Input } from "antd";
import Image from "next/image";
import searchIcon from "@/assets/images/search.png";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search countries..." }: SearchBarProps) {
  return (
    <Input
      placeholder={placeholder}
      prefix={<Image src={searchIcon} alt="Search" width={20} height={20} />}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-11 rounded-full"
      styles={{ affixWrapper: { border: "1px solid #E0E0E0", borderRadius: "16px", padding: "0 10px" } }}
    />
  );
}
