import { MdInsights } from "react-icons/md";
import {
  ContentHeading,
  ContentHeadWrap,
  ContentHeadWrapper,
  ContentSubHeading,
  ContentWrapper,
  InsightIconWrapepr,
  Wrapper,
  Notification,
} from "./ContentElement";
import Row1 from "./Row1";
const Content = () => {
  return (
    <ContentWrapper>
      <ContentHeadWrap>
        <ContentHeading>Google Analytic Home</ContentHeading>
        <Wrapper>
          <InsightIconWrapepr>
            <MdInsights />
            <Notification>9+</Notification>
          </InsightIconWrapepr>

          <ContentSubHeading>Insights</ContentSubHeading>
        </Wrapper>
      </ContentHeadWrap>

      <Row1 />
    </ContentWrapper>
  );
};

export default Content;
