import Image from "next/image";
import GithubIcon from "../../../public/icons/github-mark.svg";
import LinkedinIcon from "../../../public/icons/linkedin-mark.svg";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-muted-foreground space-y-4 p-4 pb-10 text-center">
      <p>&copy; {currentYear} Babak Taghizadeh. All rights reserved.</p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://github.com/Babak-Taghizadeh"
          target="_blank"
          className="transition duration-150 hover:scale-110"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="GitHub" width={20} height={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/babak-taghizadeh/"
          target="_blank"
          className="transition duration-150 hover:scale-110"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinIcon} alt="LinkedIn" width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
