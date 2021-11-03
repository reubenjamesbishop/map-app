// Menu icons from https://icons.getbootstrap.com/

import React from 'react';
import { push as Menu } from 'react-burger-menu';

import './Sidebar.css';

export default (props) => {
  return (
    <Menu disableAutoFocus>
      <a id="home" className="menu-item" href="/">
        <i class="bi bi-activity"></i> Home
      </a>
      <a id="about" className="menu-item" href="/about">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-activity"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
          />
        </svg>
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};
