import { useState } from "react";

import { NavbarBrand } from "./components/NavbarBrand";
import { DesktopNav } from "./components/DesktopNav";
import { NavbarActions } from "./components/NavbarActions";
import { MobileMenu } from "./components/MobileMenu";
/* import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";
 */
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#04130c]/90 backdrop-blur-md">
        <div className="container-custom flex h-17 items-center justify-between">
          <NavbarBrand />
          <DesktopNav />
          <NavbarActions
            menuOpen={menuOpen}
            onToggle={() => setMenuOpen((v) => !v)}
          />
          {/*   <DesktopNav />

          <NavbarActions
            menuOpen={menuOpen}
            onToggle={() => setMenuOpen((prev) => !prev)}
          /> */}
        </div>
      </nav>

    <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      /> 
    </>
  );
};
