"use client";

import { Button } from "@/Components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../Components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserList({ mobile }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("userInfo") || "null");
      setUsers(storedUser);
  }, []);

  return (
    <div
      className={`flex items-center justify-center gap-4 ${
        mobile ? "mt-auto h-full mb-[30px]" : ""
      }`}
    >
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/Search" passHref>
              <Button
                variant="default"
                className="bg-red-500 hover:bg-red-700 cursor-pointer"
              >
                Search
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            {users ? (
              <p>You can use search</p>
            ) : (
              <p>You need to sign up to use search</p>
            )}
          </TooltipContent>
        </Tooltip>
      </div>

      {!users && (
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/Register" passHref>
                <Button
                  variant="default"
                  className="bg-red-500 hover:bg-red-700 cursor-pointer"
                >
                  Register
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Sign up to browse</p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
