import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FooterNav from "./FooterNav";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.2rem 7.625rem;
  background-color: ${(props) => props.theme.colors.darkBackground};
  color: ${(props) => props.theme.colors.white};
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  padding-bottom: 20px;
`;

const Article = styled.article`
  flex: 0.3;
`;

const Header = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: ${(props) => props.theme.colors.white};
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

function Footer() {
  return (
    <Container>
      <Section>
        <Article>
          <Header to="#">Learn More.</Header>
          <p>
            Medium is an open platform where 170 million readers come to find
            insightful and dynamic thinking. Here, expert and undiscovered
            voices alike dive into the heart of any topic and bring new ideas to
            the surface. <Link to="#">Learn more</Link>
          </p>
        </Article>
        <Article>
          <Header to="#">Make Medium yours.</Header>
          <p>
            Follow the writers, publications, and topics that matter to you, and
            you’ll see them on your homepage and in your inbox.{" "}
            <Link to="#">Explore</Link>
          </p>
        </Article>
        <Article>
          <Header to="#">Share your thinking.</Header>
          <p>
            If you have a story to tell, knowledge to share, or a perspective to
            offer — welcome home. It’s easy and free to post your thinking on
            any topic. <Link to="#">Write on Medium</Link>
          </p>
        </Article>
      </Section>
      <FooterNav />
    </Container>
  );
}

export default Footer;
