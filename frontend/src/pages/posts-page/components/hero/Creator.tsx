import React, { HTMLAttributes } from "react";
import { clampText } from "../../../../helpers/clampText";
import { IUser } from "../../../../types";

function Creator({
  photo,
  name,
  about,
  className,
  ...props
}: IUser & HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={className} {...props}>
      <img src={photo} alt="creator avatar" width="60" height="60" />

      <div>
        <p>{name}</p>
        <p>{about && clampText(about, 35)}</p>
      </div>

      <button>Follow</button>
    </li>
  );
}

export default Creator;
