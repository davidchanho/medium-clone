import React from "react";

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
        return (
          <p className="mx-3 pointer" key={item}>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Footer;
