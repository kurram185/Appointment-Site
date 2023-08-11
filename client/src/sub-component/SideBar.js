import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import "../styles/SideBar.css";
import { Turn as Hamburger } from "hamburger-react";

function Sidebar({ prop }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    if (window.innerWidth < 768 && !isCollapsed) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(!isCollapsed);
    }
    prop(isCollapsed);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!isCollapsed && <h3>Sidebar</h3>}
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Hamburger onToggle={handleCollapse} toggled={!isCollapsed} rounded />
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="listItems">
          <AiFillDashboard size={isCollapsed ? 40 : 30} />
          {!isCollapsed && <h4>Dashboard</h4>}
        </li>
        <li className="listItems">
          <MdPerson size={isCollapsed ? 40 : 30} />
          {!isCollapsed && <h4>Pending Patients</h4>}
        </li>
        <li className="listItems">
          <FaHistory size={isCollapsed ? 40 : 30} />
          {!isCollapsed && <h4>Patients History</h4>}
        </li>
        <li className="listItems">
          <IoMdSettings size={isCollapsed ? 40 : 30} />
          {!isCollapsed && <h4>Settings</h4>}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
