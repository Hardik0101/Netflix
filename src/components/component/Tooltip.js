import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function TooltipMessage({ button, message }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent className="h-5 py-0 px-1">
          <p className="text-[12px]">{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipMessage;
