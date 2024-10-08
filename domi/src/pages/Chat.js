import React, { useState } from "react";
import * as C from "../styles/CommonStyle";
import * as CH from "../styles/ChatStyle";
import { useNavigate } from "react-router-dom";
import example from "../assets/chating.png";
import send from "../assets/Send.png";
import sendcolor from "../assets/Sendcolor.png";
import plus from "../assets/chatplus.png";

function Chat() {
    // 네비게이션 훅
    const navigate = useNavigate();
    // 채팅 메시지를 관리할 상태
    const [messages, setMessages] = useState([
        {
            type: "received",
            text: "안녕하세요 제가 일이 생겨서 오늘 저녁에 거래를 못 할 것 같아요",
            time: "오전 11:05",
        },
        {
            type: "sent",
            text: "그럼 내일 저녁 6시에 거래할까요?",
            time: "오전 11:56",
        },
        {
            type: "received",
            text: "네 이해해주셔서 감사해요 😊",
            time: "오후 12:01",
        },
    ]);

    // 사용자가 입력한 메시지를 관리할 상태
    const [inputMessage, setInputMessage] = useState("");

    // 메시지 전송 처리 함수
    const handleSendMessage = () => {
        if (inputMessage.trim() === "") return; // 빈 메시지 방지

        const newMessage = {
            type: "sent",
            text: inputMessage,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            }),
        };

        setMessages([...messages, newMessage]); // 새 메시지를 추가
        setInputMessage(""); // 입력창 비우기
    };

    return (
        <C.Page>
            <C.Center>
                <C.PageSpace>
                    <CH.Chat>
                        <CH.Chatpage>
                            <div className="chatbox">
                                {/* 채팅 상단 바 */}
                                <div className="chatbar">
                                    <div
                                        className="back"
                                        onClick={() => navigate(-1)} // 뒤로가기 기능
                                    >
                                        뒤로가기
                                    </div>
                                    <div className="chatwho">까칠한 복단이</div>
                                    <div></div>
                                </div>

                                {/* 상품 정보 */}
                                <div className="product">
                                    <div className="productimgbox">
                                        <img
                                            src={example}
                                            className="productimg"
                                        />
                                    </div>
                                    <div className="productinfo">
                                        <div className="productname">
                                            접이식 빨래 건조대
                                        </div>
                                        <div className="productprice">
                                            15,000 원
                                        </div>
                                    </div>
                                </div>
                                <div className="chating">
                                    <div className="chatdate">
                                        2024년 9월 29일
                                    </div>
                                    <div className="chatting">
                                        {messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`chatingtext ${
                                                    message.type === "sent"
                                                        ? "sent"
                                                        : "received"
                                                }`}
                                            >
                                                {/* sent인 경우와 received인 경우의 렌더링 방식이 다름 */}
                                                {message.type === "sent" ? (
                                                    <>
                                                        <div className="time">
                                                            {message.time}
                                                        </div>
                                                        <div className="message-box">
                                                            {message.text}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="message-box">
                                                            {message.text}
                                                        </div>
                                                        <div className="time">
                                                            {message.time}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <CH.Send>
                                {/* 채팅 내용 */}

                                {/* 메시지 입력창 */}
                                <div className="sending">
                                    <div className="sendingfile">
                                        <img src={plus} className="plus"></img>
                                    </div>
                                    <div className="inputtext">
                                        <input
                                            type="text"
                                            value={inputMessage}
                                            onChange={(e) =>
                                                setInputMessage(e.target.value)
                                            }
                                            placeholder="메시지를 입력해 주세요."
                                        />
                                    </div>
                                    <div className="sendingbtn">
                                        <button onClick={handleSendMessage}>
                                            <img
                                                src={
                                                    inputMessage.trim()
                                                        ? sendcolor
                                                        : send
                                                }
                                                alt="send button"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CH.Send>
                        </CH.Chatpage>
                    </CH.Chat>
                </C.PageSpace>
            </C.Center>
        </C.Page>
    );
}

export default Chat;
