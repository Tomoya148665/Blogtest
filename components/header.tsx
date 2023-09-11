import type { NextPage } from "next";
import BlogForm from "./blog-form";

const Header: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-col pt-8 px-4 pb-0 items-center justify-start">
      <BlogForm dimensions="/hamburger-menu.svg" />
    </div>
  );
};

export default Header;
