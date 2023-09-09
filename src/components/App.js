import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "./Home";

const navItemsArr = [
  {
    name: "Home",
    icon: "home",
    selected: true,
  },
  {
    name: "Discover",
    icon: "compass",
  },
  {
    name: "My Library",
    icon: "albums",
  },
  {
    name: "My Profile",
    icon: "person",
  },
];

export default function App() {
  const [navItems, setNavItems] = useState(navItemsArr);
  const [sideStatus, setSideStatus] = useState(false);

  function handleItem(curItem) {
    setNavItems((items) =>
      items.map((item) =>
        item.name === curItem.name
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }

  return (
    <>
      <Sidebar
        items={navItems}
        handleItem={handleItem}
        sideStatus={sideStatus}
        setSideStatus={setSideStatus}
      />
      <Navbar
        items={navItems}
        handleItem={handleItem}
        sideStatus={sideStatus}
        setSideStatus={setSideStatus}
      />
      <Home />
    </>
  );
}
