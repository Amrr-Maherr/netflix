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
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function UserList({ mobile }) {
  const route = useRouter()
    return (
      <>
        <div
          className={`flex items-center justify-center gap-4 ${
            mobile ? "mt-auto h-full mb-[30px]" : ""
          }`}
        >
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/Search" className="bg-red-600 hover:bg-red-800 cursor-pointer">
                  Search
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>You need to sign up to use search</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/Register" className="bg-red-600 hover:bg-red-800 cursor-pointer">
                  Register
                </Link>
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