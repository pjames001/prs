'use client'
import Image from "next/image";
import StaggeredMenu from "./StaggeredMenu";
import logo from '../../public/logo-png.png'
import Link from "next/link";

export default function Navbar() {
  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

  return (
    <>
      <div className="bg-white fixed top-0 left-0 z-[9999] w-full shadow-md shadow-black">
        <nav className="md:flex hidden justify-between items-center h-[80px] max-w-7xl mx-auto">
          <Link href='/'>
            <Image src={logo} width={220} alt="logo" />
          </Link>
          
          <ul className="h-full flex items-stretch gap-4 text-gray-800 text-lg">
            <Link href='/about' className="h-full flex items-center px-4 hover:bg-blue-accent hover:text-[#fff] transition duration-300 ease">
              <li>About Us</li>
            </Link>

            <Link href='/services' className="h-full flex items-center px-4 hover:bg-blue-accent hover:text-[#fff] transition duration-300 ease">
              <li>Services</li>
            </Link>

            <Link href='/contact' className="h-full flex items-center px-4 hover:bg-blue-accent hover:text-[#fff] transition duration-300 ease">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <nav className="bg-[#1a1a1a]">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={false}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#5c7eae"
          changeMenuColorOnOpen={true}
          colors={['transparent', 'transparent']}
          logoUrl='/logo-crop.png'
          accentColor="#5c7eae"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </nav>
    </>
  );
}
