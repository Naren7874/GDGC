import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="gray-200" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">Pages</a>
      </Typography>
      <Typography as="li" variant="small" color="gray-200" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">Account</a>
      </Typography>
      <Typography as="li" variant="small" color="gray-200" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">Blocks</a>
      </Typography>
      <Typography as="li" variant="small" color="gray-200" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">Docs</a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-gray-900/80 backdrop-blur-md px-4 py-2 lg:px-8 lg:py-4 shadow-md">
      <div className="flex items-center justify-between text-white">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium text-gray-100">
          Material Tailwind
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block text-gray-200 hover:text-white">
              <span>Log In</span>
            </Button>
            <Button variant="gradient" size="sm" className="hidden lg:inline-block bg-blue-500 text-white hover:bg-blue-600">
              <span>Sign in</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-white lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav} className="bg-gray-900/90 backdrop-blur-md text-gray-100">
        {navList}
        <div className="flex flex-col gap-2">
          <Button fullWidth variant="text" size="sm" className="text-gray-200 hover:text-white">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="bg-blue-500 text-white hover:bg-blue-600">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default StickyNavbar;
