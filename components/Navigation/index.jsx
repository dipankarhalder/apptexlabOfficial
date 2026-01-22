import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import { Contacts } from "@/components/Contacts";
import navStyles from "./page.module.css";

export const Navigation = () => {
  return (
    <div className={navStyles.fullWidth}>
      <Logo />
      <NavBar />
      <Contacts />
    </div>
  );
};
