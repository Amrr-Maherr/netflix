"use client"
import HeaderLinks from "./Elements/HeaderLinks";
import Logo from "./Elements/Logo";
import UserList from "./Elements/UserList.jsx"
import { motion } from "framer-motion";
export default function Header() {
    return (
      <>
        <motion.header
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-4 bg-black/50 text-white fixed z-20 w-full hidden md:block"
        >
          <nav className="flex items-center justify-between">
            <Logo />
            <HeaderLinks />
            <UserList />
          </nav>
        </motion.header>
      </>
    );
}