import { VscSettings } from "react-icons/vsc";

function Header() {
  return (
    <section className="h-[10vh] flex items-center justify-between px-8 fixed top-0 bg-white w-full">
      <h1>CROSS PATH LOGO</h1>
      <div className="flex gap-6 text-[24px]">
        <VscSettings />
      </div>
    </section>
  );
}

export default Header;
