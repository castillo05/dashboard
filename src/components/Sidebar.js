import React from 'react';

function Sidebar () {
    return (
      
<aside className="left-sidebar">
  {/* Sidebar scroll*/}
  <div className="scroll-sidebar">
    {/* Sidebar navigation*/}
    <nav className="sidebar-nav">
      <ul id="sidebarnav">
        <li className="user-profile">
          
        </li>
        <li className="nav-devider" />
        <li className="nav-small-cap">PERSONAL</li>
        
      </ul>
    </nav>
    {/* End Sidebar navigation */}
  </div>
  {/* End Sidebar scroll*/}
</aside>

    );
}

export default Sidebar;