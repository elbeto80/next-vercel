import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item) => (
        <Link href={item.href} key={item.href}>
          <a className={router?.pathname == item.href ? styles.link : undefined}>
            {item.text}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
