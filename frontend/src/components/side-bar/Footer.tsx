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
    <div>
      {items.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
}

export default Footer;
