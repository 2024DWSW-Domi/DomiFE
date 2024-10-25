import react from "react";
import * as C from "../styles/CommonStyle";
import * as Lo from "../styles/LoginStyle";

import React from "react";
import styled from "styled-components";
import { MessageCircle, Mail } from "lucide-react";
import logo from "../assets/domititle.png";
import naver from "../assets/navericon.png";
import kakao from "../assets/kakaoicon.png";

import "./Doyeon.css";
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  width: 100%;
  max-width: 320px;
  margin: 2rem auto;
`;

const Logo = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  font-size: 12px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 10px;

  ${(props) =>
    props.primary &&
    `
    background-color: #3b82f6;
    color: white;
  `}

  ${(props) =>
    props.outline &&
    `
    background-color: white;
    border: 1px solid #e2e8f0;
  `}
`;

const SignUpText = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
  text-align: center;
  margin-top: 1rem;
`;

function Login() {
  return (
    <div>
      <C.Page>
        <C.Center>
          <C.PageSpace>
            <Lo.Loginpage>
              <LoginContainer>
                <Logo className="mt-11">
                  <img src={logo} alt="Logo" width={200} />
                </Logo>

                <Input className="mt-10" placeholder="아이디를 입력하세요" />
                <Input type="password" placeholder="비밀번호를 입력하세요" />

                <Button className="bg-moreOrange text-white">로그인</Button>

                <Button className="bg-[#FEE500]">
                  <img
                    src={kakao}
                    style={{
                      width: "15px", // 원하는 너비 설정
                      height: "auto",
                      marginRight: "0.5rem",
                    }}
                  />
                  카카오계정으로 로그인하기
                </Button>
                <Button className="bg-[#03C75A]">
                  <img
                    src={naver}
                    style={{
                      width: "12px", // 원하는 너비 설정
                      height: "auto",
                      marginRight: "0.5rem",
                    }}
                  />
                  네이버계정으로 로그인하기
                </Button>

                <SignUpText>
                  아직 계정이 없으신가요?{" "}
                  <a
                    className="ml-1"
                    href="/signup"
                    style={{ fontWeight: "bold", color: "#FE6150" }}
                  >
                    회원가입 하러가기
                  </a>
                </SignUpText>
              </LoginContainer>
            </Lo.Loginpage>
          </C.PageSpace>
        </C.Center>
      </C.Page>
    </div>
  );
}

export default Login;
