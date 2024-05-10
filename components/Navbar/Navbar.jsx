import React from "react";
import Link from "next/link";
import Style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Style.navbar}>
      <Link href={"/"}>Accueil</Link>
      <Link href={"/listes"}>Listes</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/add"}>ADD FoRm</Link>
    </nav>
  );
}
