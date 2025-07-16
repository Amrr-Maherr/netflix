import Image from "next/image";
import LogoImg from "../../../Assets/Netflix_Logo_PMS.png";

export default function Logo() {
  return (
    <div>
      <Image src={LogoImg} alt="Netflix Logo" width={120} height={50} />
    </div>
  );
}
