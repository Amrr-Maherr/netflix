import Image from "next/image";
import LogoImg from "../../../Assets/Netflix_Logo_PMS.png";

export default function Logo({ mobile, height, width }) {
  return (
    <div className={`${mobile ? "mb-3.5" : ""}`}>
      <Image
        src={LogoImg}
        alt="Netflix Logo"
        width={width ? width : 120}
        height={height ? height : 50}
      />
    </div>
  );
}
