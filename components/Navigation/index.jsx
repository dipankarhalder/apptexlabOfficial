import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import { Contacts } from "@/components/Contacts";

export const Navigation = () => {
  return (
    <div className="fullWidth">
      <Logo />
      <NavBar />
      <Contacts />
    </div>
  );
};
