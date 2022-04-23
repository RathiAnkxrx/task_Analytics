import {
  BoxHeadWrapper,
  ContentRow,
  SubDiv,
  Box,
  Number,
  SubDivHeading,
  Gain,
  GraphImage,
  LinkVisit,
  BoxFooter,
  BoxContainer,
  ActiveNumber,
  DataHeading,
  HexBarContainer,
  HexBarWrapper,
  HexBar,
  HexBarCap,
  ActivePageList,
  ListItems,
  Sitename,
  UserCount,
} from "./ContentElement";
import { MdArrowUpward } from "react-icons/md";
import { AiOutlineArrowDown, AiOutlineRight } from "react-icons/ai";
import graph from "../../assets/graph.png";
import { COLORS } from "../../constant";
import { MdInsights } from "react-icons/md";
const RandomEntry = [
  5, 10, 45, 25, 67, 34, 67, 32, 89, 44, 9, 58, 34, 72, 43, 27, 69, 81, 23, 39,
  45, 32, 23, 54, 67, 32, 99, 54,
];

const PageArray = [
  { name: "Top Active Page", user: "Active User" },
  { name: "/google+redesign/drikware", user: 9 },
  { name: "/store.htmk", user: 4 },
  { name: "/Google+Redes..rand?Youtube", user: 3 },
  { name: "/home", user: 3 },
  { name: "/Google+Redes..tube+Play+Mug", user: 1 },
];
console.log(RandomEntry.length);
const Row1 = () => {
  return (
    <>
      <ContentRow>
        <Box>
          <BoxContainer>
            <BoxHeadWrapper>
              <SubDiv>
                <SubDivHeading>Users</SubDivHeading>
                <Number>15K</Number>
                <Gain increase={true}>
                  <MdArrowUpward />
                  44.2%
                </Gain>
              </SubDiv>
              <SubDiv>
                <SubDivHeading>Revenue</SubDivHeading>
                <Number>$1.6K</Number>
                <Gain increase={true}>
                  <MdArrowUpward /> 44.2%
                </Gain>
              </SubDiv>
              <SubDiv>
                <SubDivHeading>Conversion Rate</SubDivHeading>
                <Number>0.16%</Number>
                <Gain increase={false}>
                  <AiOutlineArrowDown /> 44.2%
                </Gain>
              </SubDiv>
              <SubDiv>
                <SubDivHeading>Sessions</SubDivHeading>
                <Number>19K</Number>
                <Gain increase={true}>
                  <MdArrowUpward /> 44.2%
                </Gain>
              </SubDiv>
            </BoxHeadWrapper>

            {/* using graph Image as data is not avaliable */}
            <GraphImage src={graph} />
          </BoxContainer>

          <BoxFooter>
            <select style={{ border: "none" }}>
              <option value="7 day">7 Days</option>
              <option value="14 day">14 Days</option>
              <option value="1 month">1 Month</option>
              <option value="3 month">3 Months</option>
            </select>

            <LinkVisit>
              Audiance Overview <AiOutlineRight />{" "}
            </LinkVisit>
          </BoxFooter>
        </Box>

        <Box color={COLORS.blue}>
          <BoxContainer>
            <SubDivHeading color="true">Active User right now</SubDivHeading>
            <ActiveNumber>35</ActiveNumber>
            <DataHeading> Page view per minute</DataHeading>
            <HexBarContainer>
              {RandomEntry.map((item) => {
                return (
                  <HexBar
                    width={100 / (1.5 * RandomEntry.length)}
                    height={item}
                    key={Math.random() * RandomEntry.length}
                  >
                    <HexBarCap height={item} />
                  </HexBar>
                );
              })}
            </HexBarContainer>

            <ActivePageList>
              {PageArray.map((item) => {
                return (
                  <ListItems key={item.name}>
                    <Sitename>{item.name}</Sitename>
                    <UserCount>{item.user}</UserCount>
                  </ListItems>
                );
              })}
            </ActivePageList>
          </BoxContainer>
          <BoxFooter>
            <LinkVisit color="true" style={{ justifySelf: "flex-end" }}>
              Real Time Report <AiOutlineRight />
            </LinkVisit>
          </BoxFooter>
        </Box>
        <Box>
          <BoxContainer>
            <MdInsights /> Site spped issue: a top page loads slower now
          </BoxContainer>
          <BoxFooter>
            <LinkVisit color="true" style={{ justifySelf: "flex-end" }}>
              More Insights
              <AiOutlineRight />
            </LinkVisit>
          </BoxFooter>
        </Box>
      </ContentRow>
    </>
  );
};

export default Row1;
