import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";
import StaggeredMenu from "./StaggeredMenu";

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
    <div style={{background: '#1a1a1a' }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="#5c7eae"
        changeMenuColorOnOpen={true}
        colors={['transparent', 'transparent']}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#5c7eae"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  );
}
