/** @format */

import styled from "styled-components";

export const Aside = styled.aside`
  background: #182444;
`;

export const Navigation = styled.ul`
  background: #364250;
  color: #fff;
  margin: 0px;
  padding: 0px;
  min-width: 235px;
  list-style: none;
  display: flex;
  height: 100%;
  flex-direction: column;

  li {
    &:not(:last-child) {
      border-bottom: 1px solid #b4bcc8;
    }

    &:hover {
      text-decoration: none;
      background: #09102361;
    }
    a {
      font-weight: 100;
      display: block;
      padding: 10px 15px;
      color: #fff;
      text-decoration: none;

      &.active {
        background: #ce1f21;
        color: #fff;
        font-weight: 400;
      }

      svg {
        font-size: 13px;
        margin-right: 11px;
      }
    }
  }
`;
