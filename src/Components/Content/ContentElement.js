import styled from "styled-components";
import { COLORS } from "../../constant";

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
`;

export const ContentWrapper = styled.section`
  position: fixed;
  top: 6rem;
  width: calc(100% - 20rem);
  left: 20rem;
  background-color: ${COLORS.greyBackgorund};
  min-height: calc(100vh - 6rem);
  padding-right: 1.8rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentHeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

export const ContentHeading = styled.p`
  font-size: 1.8rem;
  color: #888;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Notification = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  bottom: -10%;
  right: 0;
  background-color: ${COLORS.blue};
  font-size: 0.8rem;
  color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InsightIconWrapepr = styled.div`
  position: relative;
`;
export const ContentSubHeading = styled.p`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #888;
  margin-left: 0.6rem;
`;

export const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1.2rem;
  background-color: white;
`;

export const BoxFooter = styled.div`
  display: flex;
  border-top: 1px solid #888;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
`;

export const Box = styled.div`
  box-shadow: 0.5px 1px 2px #888;
  height: 100%;
  background-color: ${(props) => (props["color"] ? props.color : "White")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxContainer = styled.div`
  padding: 1.6rem;
`;

export const BoxHeadWrapper = styled.div`
  display: flex;
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
`;

export const SubDivHeading = styled.p`
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
  color: ${(props) => (props["color"] ? "White" : "black")};
`;

export const Number = styled.p`
  font-size: 2.4rem;
  padding-bottom: 0.6rem;
`;

export const Gain = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => (props["increase"] == true ? COLORS.green : COLORS.red)};
`;

export const GraphImage = styled.img`
  width: 100%;
`;

export const LinkVisit = styled.a`
  color: ${COLORS.blue};
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${(props) => (props["color"] ? "White" : COLORS.blue)};
`;

export const ActiveNumber = styled.p`
  font-size: 3.4rem;
  color: white;
  padding-bottom: 1.2rem;
`;

export const DataHeading = styled.p`
  color: ${COLORS.blueText};
  padding-bottom: 0.4rem;
  font-size: 1.2rem;
  border-bottom: 1px solid ${COLORS.blueText};
`;

export const HexBarContainer = styled.div`
  display: flex;
  gap: 1%;
  justify-content: space-between;
  transform: rotate(180deg);
  margin-top: 1.2rem;
  height: 6.4rem;
  flex-direction: row-reverse;
`;

export const HexBar = styled.div`
  position: relative;
  width: ${(props) => props.width}%;
  background-color: ${COLORS.blueText};
  height: ${(props) => props.height}%;
`;

export const HexBarCap = styled.div`
  position: absolute;
  width: 100%;
  height: 1.5px;
  top: calc(100% + 1px);
  background-color: white;
`;

export const ActivePageList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
`;

export const ListItems = styled.li`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  color: ${COLORS.blueText};
  padding: 0.6rem 0;
  border-bottom: 0.8px solid ${COLORS.blueText};
`;
export const Sitename = styled.p``;
export const UserCount = styled.p``;
