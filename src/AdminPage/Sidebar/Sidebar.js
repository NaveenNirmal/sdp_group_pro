import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import "./script.js";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle m-2">Admin Panel</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <NavLink to="/adminmasterpage/dashboard" className="NavLink" activeClassName="active">
                  <i className="bi bi-house-door-fill mx-2"></i>
                  Home
                </NavLink>
              </li>
              <hr></hr>
              <li className="sidebarListItem">
                <NavLink to="#" id="dropdownBtn" className="NavLink">
                  <i className="bi bi-people-fill mx-2"></i>
                  User Management
                  <i className="bi bi-chevron-down arrow" id="arrow"></i>
                </NavLink>
              </li>
              <div className="dropdown-container" id="dropdown_box">
                <NavLink to="/adminmasterpage/addnewuser" className="NavLink">
                  Add New User
                </NavLink>

                <NavLink to="/adminmasterpage/updateuser" className="NavLink">
                  Modify Existing User
                </NavLink>

                <NavLink to="/adminmasterpage/removeeuser" className="NavLink">
                  Remove User
                </NavLink>

                <NavLink to="/adminmasterpage/registeredusers" className="NavLink">
                  Registered User List
                </NavLink>
              </div>

              <hr></hr>

              <li className="sidebarListItem">
                <NavLink to="#" className="NavLink" id="dropdownBtn2">
                  <i className="bi bi-gear-fill mx-2"></i>
                  Package Management
                  <i className="bi bi-chevron-down arrow" id="arrow2"></i>
                </NavLink>
              </li>
              <div className="dropdown-container" id="dropdown_box2">
                <NavLink to="/adminmasterpage/viewallorders" className="NavLink">
                  View All Orders
                </NavLink>

                <NavLink to="#" className="NavLink">
                  Track Order
                </NavLink>
              </div>

              <hr></hr>

              <li className="sidebarListItem">
                <NavLink to="#" className="NavLink" id="dropdownBtn3">
                  <i className="bi bi-cash mx-2"></i>
                  Payment Management
                  <i className="bi bi-chevron-down arrow" id="arrow3"></i>
                </NavLink>
              </li>
              <div className="dropdown-container" id="dropdown_box3">
                <NavLink to="/adminmasterpage/viewallpayments" className="NavLink">
                  View All Payments
                </NavLink>
              </div>

              <hr></hr>
              <li className="sidebarListItem" id="dropdownBtn4">
                <NavLink to="#" className="NavLink">
                  <i className="bi bi-bar-chart-line-fill mx-2"></i>
                  Reports Management
                  <i className="bi bi-chevron-down arrow" id="arrow4"></i>
                </NavLink>
              </li>

              <div className="dropdown-container" id="dropdown_box4">
                <NavLink to="#" className="NavLink">
                  User Report
                </NavLink>

                <NavLink to="#" className="NavLink">
                  Transactions Report
                </NavLink>

                <NavLink to="#" className="NavLink">
                  Orders Report
                </NavLink>
              </div>

              <hr></hr>

              <li className="sidebarListItem" id="dropdownBtn5">
                <NavLink to="#" className="NavLink">
                  <i className="bi bi-truck mx-2"></i>
                  Vehicle Management
                  <i className="bi bi-chevron-down arrow" id="arrow5"></i>
                </NavLink>
              </li>

              <div className="dropdown-container" id="dropdown_box5">
                <NavLink to="/adminmasterpage/addvehicle" className="NavLink">
                  Add Vehicle Details
                </NavLink>

                <NavLink to="/adminmasterpage/updatevehicle" className="NavLink">
                  Update Vehicle Details
                </NavLink>

                <NavLink to="/adminmasterpage/removevehicle" className="NavLink">
                  Remove Vehicle Details
                </NavLink>

                <NavLink to="/adminmasterpage/registeredvehicle" className="NavLink">
                  Registered Vehicle
                </NavLink>
              </div>

              <hr></hr>


            </ul>
          </div>
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <NavLink  to="/customerdashboard/user" className="NavLink ">
                <li className="sidebarListItem">
                <i class="bi bi-people-fill"></i>
                  Users Management
                </li>
              </NavLink >
              <NavLink  to="/customerdashboard/products" className="NavLink ">
                <li className="sidebarListItem">
                <i class="bi bi-gear-fill"></i>
                  Package Management
                </li>
              </NavLink >
              <li className="sidebarListItem">
              <i class="bi bi-cash"></i>
                Payment Management
              </li>
              <li className="sidebarListItem">
              <i class="bi bi-bar-chart-line-fill"></i>
                Reports Management
              </li>
            </ul>
          </div> */}
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div> */}
          {/* <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
