import { Button } from "@/Components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../Components/ui/tooltip";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../Components/ui/navigation-menu";
export default function UserList() {
    return (
      <>
        <div className="flex items-center justify-center gap-4">
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-800 cursor-pointer">
                  Search
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>You need to sign up to use search</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-800 cursor-pointer">
                  Register
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sign up to browse</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </>
    );
}