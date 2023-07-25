import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./side.css";
import { IconContext } from "react-icons";
import "./Navbar.css";
function Sbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className="wra">
    <div class="icon">
        <h2 class="logo">Scheduler</h2>
           
    </div>
        <div className="side">
            <ol>
                <li>
                 Add Task
                </li>
                <li>Edit Task</li>
                <li>Delete Task</li>

            </ol>
        </div>
    </div>
    </>
  );
}

export default Sbar;