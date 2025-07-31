import Logo from "../Header/Elements/Logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Link from "next/link";
export default function AuthHeder() {
    return (
      <>
        <header className="fixed z-10 px-[100px] md:px-[442.5px] py-[5px] w-full hidden md:block">
          <nav className="flex items-center justify-between">
            <Logo width={285} height={50} />
            <div className="flex items-center justify-center gap-2">
              <Select>
                <SelectTrigger className="w-[150px] h-10 bg-black/80 text-white border border-gray-500 hover:border-white rounded-sm px-4 text-sm">
                  <SelectValue placeholder="اللغة" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 text-white border border-gray-600 rounded-sm shadow-lg">
                  <SelectItem
                    value="ar"
                    className="hover:bg-white/10 focus:bg-white/10 cursor-pointer px-4 py-2"
                  >
                    العربية
                  </SelectItem>
                  <SelectItem
                    value="en"
                    className="hover:bg-white/10 focus:bg-white/10 cursor-pointer px-4 py-2"
                  >
                    English
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
                <Link href="/Register">Sign in</Link>
              </Button>
            </div>
          </nav>
        </header>
      </>
    );
}