import React from "react";
import styled from "styled-components";
import Button from "../../../../components/buttons";
import { IPublication } from "../../../../types";

const PublicationItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function PublicationItem({ ...publication }: IPublication) {
  return (
    <PublicationItemContainer>
      <div>
        <img src={publication.icon} alt="" width={20} height={20} />
        {publication.name}{" "}
      </div>

      <Button>Follow</Button>
    </PublicationItemContainer>
  );
}

export default PublicationItem;
