
import HeaderLinks from "../../Elements/HeaderLinks";
import Logo from "../../Elements/Logo";
import UserList from "../../Elements/UserList";
import { motion } from "framer-motion";
export default function SideBar({mobile}) {
  return (
    <>
      <motion.header
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="p-4 bg-black/50 text-white fixed z-20 h-full w-[250px] block md:hidden"
      >
        <nav className="flex items-center justify-between flex-col min-h-screen">
          <Logo mobile={mobile} />
          <HeaderLinks mobile={mobile} />
          <UserList mobile={mobile} />
        </nav>
      </motion.header>
    </>
  );
}
