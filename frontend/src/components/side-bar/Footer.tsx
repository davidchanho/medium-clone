import React from "react";
import { Button } from "react-bootstrap";

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
          <Button key={item} variant="light" className="mr-2 mb-2">
            {item}
          </Button>
        );
      })}
    </div>
  );
}

export default Footer;
