import HeaderLinks from "./Elements/HeaderLinks";
import Logo from "./Elements/Logo";
import UserList from "./Elements/UserList.jsx"
export default function Header() {
    return (
      <>
        <header className="p-4 bg-black/50 text-white fixed z-20 w-full">
          <nav className="flex items-center justify-between">
           <Logo/>
            <HeaderLinks />
            <UserList/>
          </nav>
        </header>
      </>
    );
}