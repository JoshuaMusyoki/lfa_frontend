import Image from "next/image";
import Link from "next/link";
import Logo from '../images/LFALogo.png';
import { footerLinks } from "@/contants";

// Define the types
type FooterLink = {
  title: string;
  url: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const Footer = () => (
  <footer className="w-full bg-gray-100 border-t border-gray-300 mt-5">
    <div className="flex flex-wrap justify-between items-start sm:px-16 px-6 py-10 max-w-7xl mx-auto">
      <div className="flex items-center gap-12 mb-12">
        <Image src={Logo} alt="LFA Logo" width={118} height={18} className="object-contain" />
        
      </div>

      <div className="flex flex-1 justify-between flex-wrap gap-8">
        {footerLinks.map((section: FooterSection, index: number) => (
          <div key={index} className="w-1/2 md:w-auto text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link: FooterLink, linkIndex: number) => (
                <li key={linkIndex}>
                  <Link href={link.url} className="text-gray-600 hover:text-gray-900 transition duration-200 ease-in-out">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center mt-10 pt-5 border-t border-gray-200 sm:px-16 px-6">
      <p className="text-base text-gray-700">@2024 Lead Foundation Africa. All rights reserved</p>
    
      <div className="flex space-x-4">
        <Link href="/" className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
