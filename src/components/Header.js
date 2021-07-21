import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="wl" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="og" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="mv" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="sr" />
          <span>Series</span>
        </a>
      </NavMenu>
      <ProfilePic src="/images/farzad.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled.img`
  width: 5rem;
  object-fit: contain;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 1.25rem;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 1.25rem;
    }

    span {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.18rem;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const ProfilePic = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
