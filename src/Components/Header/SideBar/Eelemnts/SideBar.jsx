import { useState } from "react";
import HeaderLinks from "../../Elements/HeaderLinks";
import Logo from "../../Elements/Logo";
import UserList from "../../Elements/UserList";
import { motion } from "framer-motion";
import { CircleX, Menu } from "lucide-react";

export default function SideBar({ mobile }) {
  const [Close, setClose] = useState(true);

  const toggleSideBar = () => {
    setClose(!Close);
  };

  return (
    <>
      {Close && (
        <Menu
          className="text-white w-8 h-8 fixed top-4 left-4 z-30 cursor-pointer md:hidden"
          onClick={toggleSideBar}
        />
      )}

      {!Close && (
        <motion.header
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 bg-black text-white fixed z-20 h-full w-[250px] block md:hidden"
        >
          <CircleX
            className="absolute top-2 right-2 cursor-pointer"
            onClick={toggleSideBar}
          />
          <nav className="flex items-center justify-between flex-col min-h-screen">
            <Logo mobile={mobile} />
            <HeaderLinks mobile={mobile} />
            <UserList mobile={mobile} />
          </nav>
        </motion.header>
      )}
    </>
  );
}
