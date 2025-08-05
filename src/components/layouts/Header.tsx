import MainNavigation from "./MainNavigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mr-4 flex flex-1 items-center justify-end space-x-4 lg:mr-0">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
