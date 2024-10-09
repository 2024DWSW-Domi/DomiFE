import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as PD from "../styles/PostedStyle";
import sample from "../assets/product7.png";
import backbtn from "../assets/backbtn.png";
import logo from "../assets/domititle.png";
import heart from "../assets/heart.png";
import { Heart } from "lucide-react";

// Slide Up Modal Component
function SlideUpModal({ onClose }) {
  const [selectedLocation, setSelectedLocation] = useState("1관 로비 테이블");
  // 선택 가능한 요일 (월, 수, 금)
  const availableDays = ["월", "수", "금"];
  // 선택된 요일 (하나만 선택 가능)
  const [selectedDay, setSelectedDay] = useState("");

  // 요일 선택 처리 함수
  const handleDayClick = (day) => {
    if (availableDays.includes(day)) {
      setSelectedDay(day); // 선택한 요일을 상태에 저장
    }
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <div className="modalOverlay" onClick={onClose} />
      <div className="slideUpModal">
        <div className="datetitle">거래 요일</div>
        {/* 첫 번째 줄: 월, 화, 수, 목 */}
        <div className="modalRowTop">
          {["월", "화", "수", "목"].map((day) => (
            <button
              key={day}
              className={
                availableDays.includes(day)
                  ? selectedDay === day
                    ? "dayBtnSelected"
                    : "dayBtn"
                  : "dayBtnDisabled"
              }
              onClick={() => handleDayClick(day)}
              disabled={!availableDays.includes(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* 두 번째 줄: 금, 토, 일 */}
        <div className="modalRowBottom">
          {["금", "토", "일"].map((day) => (
            <button
              key={day}
              className={
                availableDays.includes(day)
                  ? selectedDay === day
                    ? "dayBtnSelected"
                    : "dayBtn"
                  : "dayBtnDisabled"
              }
              onClick={() => handleDayClick(day)}
              disabled={!availableDays.includes(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="datetitle">거래 장소</div>
        <div className="locationButtons">
          {["1관 로비 테이블"].map((location) => (
            <button
              key={location}
              className={
                selectedLocation === location
                  ? "locationBtnSelected"
                  : "locationBtn"
              }
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </button>
          ))}
        </div>

        <div className="datetitle">거래 가능 시간대</div>
        <div className="postedcenter">
          <select className="timeSelect">
            <option>오후 6시 ~ 오후 7시</option>
            <option>오전 10시 ~ 오전 11시</option>
          </select>
        </div>

        <div className="postedcenter">
          <button
            className="submitBtn"
            onClick={() => (window.location.href = `/payment`)}
          >
            결제하기
          </button>
        </div>
      </div>
    </>
  );
}

function Posted() {
  // 네비게이션 훅
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <PD.Posted>
            <PD.PostedPage>
              <header>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "140px", height: "60px" }}
                  className="rounded mx-auto my-5"
                />
              </header>
              <div className="postedbackbtn">
                <button>
                  <img src={backbtn} alt="Back" onClick={() => navigate(-1)} />
                </button>
              </div>
              <div className="postedmainpage">
                <div className="postedimgbox">
                  <img className="postedimg" src={sample} alt="Sample" />
                </div>
                <div className="postedmaininfo">
                  <div className="postedtitle">접이식 빨래 건조대</div>
                  <div className="postedtitleinfo">
                    <div className="postedtitleinfowho">까칠한 복단이</div>
                    <div className="postedtitleinfoloved">
                      <Heart className="hearimg" /> 0
                    </div>
                  </div>
                  <div className="postedcost">15,000원</div>
                </div>

                <div className="postedinfomation my-1">
                  <div className="postedinfomationbox">
                    <div className="categorly">
                      <div className="infomationtitle">카테고리 :</div>
                      <div className="infomationtitleinfo">잡화</div>
                    </div>
                    <div className="state">
                      <div className="infomationtitle">상품 상태 :</div>
                      <div className="infomationtitleinfo">사용감 적음</div>
                    </div>
                    <div className="availabledate">
                      <div className="infomationtitle">가능 거래 요일 :</div>
                      <div className="infomationtitleinfo">월, 수, 금</div>
                    </div>
                    <div className="where">
                      <div className="infomationtitle">거래 가능 장소 :</div>
                      <div className="infomationtitleinfo">1관 로비 테이블</div>
                    </div>
                    <div className="detailinfo">
                      <div className="infomationtitles">상품 설명 :</div>
                      <div className="infomationtitleinfo">
                        건조대 새 거입니다! 쿠팡에서 샀는데 튼튼하고 기숙사
                        나가게 되어서 팔아요.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PD.PostedPage>
            <PD.PostedPay>
              <button className="BuyBtn" onClick={openModal}>
                구매하기
              </button>
              {isModalOpen && <SlideUpModal onClose={closeModal} />}
            </PD.PostedPay>
          </PD.Posted>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Posted;
