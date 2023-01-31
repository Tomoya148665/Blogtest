import type { ReactNode } from "react";

type PropsType = {
  pathname: string;
  children: ReactNode;
};

const Layout = ({ pathname, children }: PropsType) => {
  const firstPath = pathname.split("/")[1];
  return (
    <div>
      <div className="navbar bg-white shadow-sm">
        <div className="flex-1">
          {firstPath === "media" && (
            <img src="/logo.png" className="max-h-[40px] rounded-lg" />
          )}
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            {firstPath === "media" && (
              <li>
                <a href="/">プロダクトページへ</a>
              </li>
            )}
            {firstPath !== "media" && (
              <li>
                <a href="/media">ブログへ</a>
              </li>
            )}
            {false && (
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
