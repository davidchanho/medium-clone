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
  const renderFooter = () => {
    return items.map((item) => {
      return (
        <p className="mx-3" key={item}>
          {item}
        </p>
      );
    });
  };

  return <div className="d-flex flex-wrap">{renderFooter()}</div>;
}

export default Footer;
