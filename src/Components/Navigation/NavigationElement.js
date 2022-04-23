import styled from "styled-components";
import { COLORS } from "../../constant";
export const NavigationWrapper = styled.section`
  width: 20rem;
  height: calc(100vh - 6rem);
  min-height: min-content;
  padding-right: 1.2rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 6rem;
  background-color: ${COLORS.greyBackgorund};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavWrapper = styled.div`
  width: 90%;
  color: #888;
  display: flex;
  align-items: center;
  padding: 0.6rem 1.8rem;
  position: relative;
  background-color: ${(props) =>
    props["active"] == true ? COLORS.blueBackGround : ""};
  color: ${(props) => (props["active"] == true ? COLORS.blue : "")};
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;
export const NavTitle = styled.p`
  font-size: 1rem;
  color: ${(props) => (props["active"] == true ? COLORS.blue : "#888")};
  font-weight: bold;
  margin-left: 1rem;
  letter-spacing: 0.6px;
`;

export const NavSubTitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 1.8rem;
  color: #888;
`;

export const ExtraSpace = styled.div`
  width: 90%;
  border-top: 1px solid #ccc;
  justify-content: end;
  align-items: center;
  display: flex;
  height: 4.2rem;
`;
