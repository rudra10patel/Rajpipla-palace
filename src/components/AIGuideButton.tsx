
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const AIGuideButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          className="fixed bottom-4 right-4 z-50 rounded-full h-16 w-16 shadow-lg"
        >
          <Link to="/ai-guide">
            <Bot className="h-8 w-8" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>AI Guide</p>
      </TooltipContent>
    </Tooltip>
  );
};
