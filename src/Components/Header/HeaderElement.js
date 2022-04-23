import styled from "styled-components";
import { COLORS } from "../../constant";

export const HeaderWrapper = styled.section`
  max-width: 100%;
  display: flex;
  align-content: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid #ccc;
  height: 6rem;
`;

export const LogoWrapper = styled.div`
  width: 12rem;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 60%;
    background-color: #ddd;
    right: -0.6rem;
  }
`;
export const LogoImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const LogoTitle = styled.p`
  font-size: 1.8rem;
  color: ${COLORS.headingBlack};
  font-weight: 500;
`;

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 100%;
  margin-left: 1.8rem;
  justify-content: center;
`;

export const AccountDropDown = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const AccountTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #aaa;
`;

export const InputField = styled.input`
  background-color: #ddd;
  width: 40rem;
  height: 3.6rem;
  border: none;
  border-radius: 6px;
  align-self: center;
  padding-left: 3.6rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin-left: auto;
  margin-right: 1.8rem;
`;

export const UserImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100%;

  background-size: cover;
`;
