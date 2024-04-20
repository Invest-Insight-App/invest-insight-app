import Link from "next/link";
import Image from "next/image";
import Logo from "./invetment_logo.png";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src={Logo}
          alt="finance-Buddy-Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
      </Link>
      <div className="grid">
        <h1 className="text-secondary text-xl">Investment Buddy</h1>
        <p className="text-primary">AI-driven Market Sentiment Analysis</p>
      </div>
    </nav>
  );
};

export default Navbar;
