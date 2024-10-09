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

function Mainpage() {
  const [likedItems, setLikedItems] = useState(Array(10).fill(false)); // 각 카드의 좋아요 상태를 추적하는 배열

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
                    {[...Array(10)].map((_, i) => (
                      <Card
                        key={i}
                        className="rounded-xl overflow-hidden cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/product/${i + 1}`)
                        }
                      >
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <img
                              src={`https://via.placeholder.com/60x60?text=상품${
                                i + 1
                              }`}
                              alt={`상품 ${i + 1}`}
                              style={{ width: "60px", height: "60px" }}
                              className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-base">
                                상품 {i + 1}
                              </h3>
                              <p className="text-xs text-gray-500">
                                {(10000 * (i + 1)).toLocaleString()}원
                              </p>
                              <p className="text-xs text-gray-400">
                                user{i + 1}
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
