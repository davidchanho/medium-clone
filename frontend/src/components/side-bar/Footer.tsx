import React from "react";
import Publication from "../../shared/publication";

const items = [
  "Help",
  "Status",
  "Writers",
  "Blog",
  "Careers",
  "Privacy",
  "Terms",
  "About",
];

function Footer() {
  return (
    <div className="d-flex flex-wrap">
      {items.map((item) => {
        return <Publication key={item} label={item} />;
      })}
    </div>
  );
}

export default Footer;
