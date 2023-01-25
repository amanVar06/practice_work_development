import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  const renderMenuItems = Menus.map((item) => (
    <li
      key={item.title}
      className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
        item.gap ? "mt-9" : "mt-2"
      }`}
    >
      <img src={`./src/assets/${item.src}.png`} alt={item.title} />
      <span
        className={`${!open ? "hidden" : "block"} origin-left duration-200`}
      >
        {item.title}
      </span>
    </li>
  ));

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } h-screen bg-dark-purple relative p-5 pt-8 duration-300`}
      >
        <img
          src="./src/assets/control.png"
          alt="control"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen((prevState) => !prevState)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            alt="logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">{renderMenuItems}</ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default App;
