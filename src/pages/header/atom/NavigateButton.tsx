import * as React from "react";
import { PageDestination } from "data/types/PageDestination";
import styled from "styled-components";
import { Color } from "data/Value";

const NavigateButtonRoot = styled.div`
  background: ${Color.mediumGray};
  display: inline-block;
  height: 100%;
  transition: all 0.25s;
  :hover {
    background-color: ${Color.whitishGray};
  }
`;

const LinkText = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  color: ${Color.white};
  font-size: 80%;
  text-decoration: none;
  transition: all 0.25s;
  :hover {
    color: ${Color.blackishGray};
  }
`;

export function NavigateButton(props: PageDestination): JSX.Element {
  return (
    <NavigateButtonRoot>
      <LinkText href={props.url}>{props.caption}</LinkText>
    </NavigateButtonRoot>
  );
}
