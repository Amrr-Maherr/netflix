import Image from "next/image";
import LogoImg from "../../../Assets/Netflix_Logo_PMS.png";

export default function Logo({ mobile }) {
  return (
    <div className={`${mobile ? "mb-3.5" : ""}`}>
      <Image src={LogoImg} alt="Netflix Logo" width={120} height={50} />
    </div>
  );
}
