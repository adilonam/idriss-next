'use client'
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];



function ProfileMenu() {




  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
        placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} 
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} 
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      
      <MenuList placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')}  className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} 
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
              placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} 
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>

    
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} >
        <Typography  placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} as="a" href="#" variant="small" className="font-normal">
            <MenuItem placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} 
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} 
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export function ComplexNavbar() {


  const [isNavOpen, setIsNavOpen] = React.useState(false);


  
  const [isDarkMode, setIsDarkMode] = useState(false)
useEffect(() => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  setIsDarkMode(prefersDarkMode)
}, [])

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [isDarkMode])
 


const toggleColorMode = () => {
  setIsDarkMode(!isDarkMode)
}

 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} className="mb-4 w-full p-2 lg:rounded-xl lg:px-12 right-0"> 
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')}
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Code 212
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')}
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
 
        <Button placeholder="d" onPointerEnterCapture={()=>console.log('pointer')} onPointerLeaveCapture={()=>console.log('pointer')} onClick={()=>signIn()} size="sm" variant="text">
          <span>Log In</span>
        </Button>
        <button
                    type='button'
                    onClick={toggleColorMode}
                    className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Toggle Dark Mode</span>
                    {isDarkMode ? (
                      <SunIcon className='h-6 w-6' />
                    ) : (
                      <MoonIcon className='h-6 w-6' />
                    )}
                  </button>
        <ProfileMenu />
      </div>
      <Collapse  open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse >
    </Navbar>
  );
}