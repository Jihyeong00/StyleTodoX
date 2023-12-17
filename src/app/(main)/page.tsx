'use client';

import styled from 'styled-components';
import {useState} from 'react';
import SignInForm from "@/app/(main)/_components/SignIn.tsx";
import SignUpForm from "@/app/(main)/_components/SignUp.tsx";
import {flexCenter} from "@/styles/common";

const MainPage = () => {
    const [isFormLogin, setIsFormLogin] = useState<boolean>(true);

    const onClickFormHeader = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as typeof e.target & {
            innerText: string;
        };
        const {innerText} = target;
        if (innerText === 'LOGIN') return setIsFormLogin(true);
        setIsFormLogin(false);
    };

    return (
        <S.Container>
            <S.Header>
                <S.LoginHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
                    LOGIN
                </S.LoginHeader>
                <S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
                    SIGN
                </S.SignUpHeader>
            </S.Header>
            {isFormLogin ? <SignInForm/> : <SignUpForm/>}
        </S.Container>
    );
};
export default MainPage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  ${flexCenter};
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  background-color: ${({theme}) => theme.PALETTE.primary[300]};

  div {
    ${flexCenter};
    width: 50%;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginHeader = styled.div<{ isFormLogin: boolean }>`
  background-color: ${({isFormLogin}) => (isFormLogin ? '#e0e0e0' : '#f5f5f5')};
`;

const SignUpHeader = styled.div<{ isFormLogin: boolean }>`
  background-color: ${({isFormLogin}) => (isFormLogin ? '#f5f5f5' : '#e0e0e0')};
`;

const S = {
    Container,
    Header,
    LoginHeader,
    SignUpHeader,
};
