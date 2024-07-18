import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectLanguage() {
  return (
    <div>
      <Select defaultValue="english">
        <SelectTrigger className="w-[130px] h-[36px] bg-transparent text-white border-[1px] hover:border-[1px]">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectLanguage;
