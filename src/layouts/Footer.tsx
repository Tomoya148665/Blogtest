import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div>
          <img src="/logo.png" className="max-w-[10vw] rounded-lg" />
        </div>
        <p>
          Wrexiv株式会社
          <br />
          Providing reliable tech since 2022
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover" href="/">
          jetGee
        </a>
        <a className="link link-hover" href="/media">
          jetGee Media
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="https://www.wrexiv.com/" className="link link-hover">
          About us
        </a>
        <a
          href="https://share.hsforms.com/1-bDCbAKUQfC4ZOIDAD6nhgnndjo"
          className="link link-hover"
        >
          Contact
        </a>
        {/* <a className="link link-hover">Jobs</a> */}
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <p>利用規約（準備中）</p>
        {false && (
          <>
            <a className="link link-hover">利用規約（準備中）</a>
            <a className="link link-hover">プライバシーポリシー</a>
            <a className="link link-hover">Cookie policy</a>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
