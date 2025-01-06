import React from "react";
import Link from "next/link";

const SideBarNavComponent: React.FC = () => {
  return (
    <div className="fixed left-0">
      <ul>
        <Link href="/home">
          <li></li>
        </Link>
        <Link href="/products">
          <li></li>
        </Link>
        <Link href="/cart">
          <li></li>
        </Link>
        <Link href="/checkout">
          <li></li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarNavComponent;
