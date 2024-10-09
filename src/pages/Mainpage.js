import react, { useState } from "react";

import * as C from "../styles/CommonStyle";
import * as MP from "../styles/MainPageStyle";

import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button1";
import { Card, CardContent } from "../components/ui/card";
import { Home, Users, MessageCircle, User, Heart, Search } from "lucide-react";
import styled from "styled-components";

import logo from "../assets/domititle.png";
import HeartFill from "../assets/heart.png";
import bucket from "../assets/bucket.png";
import fishing from "../assets/fishing.png";
import chat from "../assets/chat.png";
import user from "../assets/user.png";
import postingdomi from "../assets/postingdomi.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";

function Mainpage() {
  const [likedItems, setLikedItems] = useState(Array(7).fill(false));

  const items = [
    {
      name: "퍼퓸 샤쉐 방향제",
      user: "코딩하는 덕우",
      image: product1,
      price: 10000,
    },
    {
      name: "보조 배터리 팔아요",
      user: "빨래하는 덕새",
      image: product2,
      price: 20000,
    },
    {
      name: "프로틴쉐이크 사세요",
      user: "과자 먹는 복단이",
      image: product3,
      price: 30000,
    },
    {
      name: "리 아이패드 파우치 새 거",
      user: "도미 먹는 덕우",
      image: product4,
      price: 40000,
    },
    {
      name: "치이카와 입양하세요",
      user: "식빵 굽는 덕조",
      image: product5,
      price: 50000,
    },
    {
      name: "록시땅 핸드크림 미스트",
      user: "노래하는 희주",
      image: product6,
      price: 60000,
    },
    {
      name: "접이식 빨래 건조대",
      user: "까칠한 복단이",
      image: product7,
      price: 15000,
    },
  ];

  const toggleLike = (index) => {
    const updatedLikes = [...likedItems];
    updatedLikes[index] = !updatedLikes[index];
    setLikedItems(updatedLikes);
  };
  const FloatingButton = styled.button`
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 10;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    @media (hover: hover) and (pointer: fine) {
      right: calc(50% - 180px + 20px);
    }
  `;

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <MP.Mainpage>
            <div className="flex flex-col h-screen w-full max-w-md mx-auto">
              <header className="p-3">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "140px", height: "60px" }}
                  className="rounded mx-auto my-5"
                />
                <div className="p-2 relative">
                  <Input
                    className="rounded-full text-sm bg-gray-100 py-1 px-3 h-8"
                    placeholder=""
                  />
                  <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"></Search>
                </div>
              </header>

              <MP.MainContainer>
                <div className="space-y-3">
                  <div className="space-y-3">
                    {items.map((item, i) => (
                      <Card
                        key={i}
                        className="rounded-xl overflow-hidden cursor-pointer"
                        onClick={() => (window.location.href = `/posted`)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <img
                              src={item.image}
                              alt={`상품 ${i + 1}`}
                              style={{ width: "60px", height: "60px" }}
                              className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-base">
                                {item.name}
                              </h3>
                              <p className="text-xs text-gray-500">
                                {item.price.toLocaleString()}원
                              </p>
                              <p className="text-xs text-gray-400">
                                {item.user}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:bg-white"
                              onClick={(e) => {
                                e.stopPropagation(); // 카드 클릭 이벤트와 분리
                                toggleLike(i); // 좋아요 상태 토글
                              }}
                            >
                              {likedItems[i] ? (
                                <img
                                  src={HeartFill}
                                  alt="heart"
                                  className="h-4 w-4 text-red-500"
                                /> // 채워진 하트
                              ) : (
                                <Heart className="h-4 w-4" /> // 빈 하트
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </MP.MainContainer>

              <nav className="bg-gray-100 rounded-3xl m-3">
                <div className="flex justify-around p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex flex-col items-center"
                    onClick={() => (window.location.href = "/")}
                  >
                    <img src={fishing} alt="fishing" className="h-6 w-6" />
                    <span className="text-xs font-bold text-moreOrange">
                      홈
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex flex-col items-center"
                  >
                    <img src={bucket} alt="bucket" className="h-6 w-6" />
                    <span className="text-xs">커뮤니티</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex flex-col items-center"
                    onClick={() => (window.location.href = "/chat")}
                  >
                    <img src={chat} alt="" className="h-5 w-5" />
                    <span className="text-xs">채팅</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex flex-col items-center"
                  >
                    <img src={user} alt="" className="h-5 w-5" />
                    <span className="text-xs">마이페이지</span>
                  </Button>
                </div>
              </nav>

              <FloatingButton
                onClick={() => (window.location.href = "/posting")}
              >
                <img
                  src={postingdomi}
                  alt="상품 등록"
                  style={{ width: "100px", height: "70px" }}
                />
              </FloatingButton>
            </div>
          </MP.Mainpage>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Mainpage;
