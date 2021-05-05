import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

interface Props {
  show: boolean;
}

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input<Props>`
  width: ${(props) => (props.show ? "120px" : 0)};
  display: ${(props) => (props.show ? "block" : "none")};
  transition: width 1s;
`;

function Search() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <SearchForm>
      <BsSearch className="pointer" onClick={toggleShow} />{" "}
      <SearchInput show={show} placeholder="Search Medium" />
    </SearchForm>
  );
}

export default Search;
