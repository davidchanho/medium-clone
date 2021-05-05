import React from "react";
import { NavLink } from "react-router-dom";
import MediumLogo from "../../components/medium-logo";
import img from "./404.png";

function NotFoundPage() {
  return (
    <div>
      <header>
        <MediumLogo />
      </header>

      <div>
        <img src={img} alt="" />
        <div>
          <p>PAGE NOT FOUND</p>
          <p>404</p>
          <p>Out of nothing, something.</p>
          <p>
            You can find (just about) anything on Medium — apparently even a
            page that doesn’t exist. Maybe these stories about finding what you
            didn’t know you were looking for will take you somewhere new?
          </p>
          <NavLink to="/">Home</NavLink>
        </div>
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
          <p></p>
          <div>
            <img src="" alt="" />
            <div>
              <p>name</p>
              <div>date &middot; 6 min read</div>
            </div>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
          <p></p>
          <div>
            <img src="" alt="" />
            <div>
              <p>name</p>
              <div>date &middot; 6 min read</div>
            </div>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
          <p></p>
          <div>
            <img src="" alt="" />
            <div>
              <p>name</p>
              <div>date &middot; 6 min read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
