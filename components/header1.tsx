import type { NextPage } from "next";
import BlogForm from "./blog-form";

const Header1: NextPage = () => {
  return (
    <header className="self-stretch bg-white flex flex-col pt-2 px-4 pb-0 items-center justify-center">
      <BlogForm
        dimensions="/hamburger-menu1.svg"
        iconMenuBackgroundImage="url('/fulllogotransparentnobuffer111@3x.png')"
      />
    </header>
  );
};

export default Header1;
