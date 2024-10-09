import styled from "styled-components";

export const Chat = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Chatpage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    /* 채팅 상단 바 */
    .chatbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        position: relative;
        height: 70px;
        background-color: #f8f8f8;
    }

    /* back 버튼을 왼쪽 정렬 */
    .back {
        flex: 1; /* 왼쪽에 고정되도록 설정 */
        text-align: left;
    }

    /* chatwho를 가운데 정렬 */
    .chatwho {
        position: absolute;
        left: 50%;
        transform: translateX(-50%); /* 수평 가운데 정렬 */
        font-weight: bold;
    }

    /* 공간 확보를 위한 빈 div */
    .chatbar > div:last-child {
        flex: 1; /* 오른쪽 공간을 차지할 빈 div */
    }

    .productimg {
        width: 80px;
        height: 70px;
        border-radius: 15px;
    }
    .productinfo {
        display: flex;
        flex-direction: column;
        margin: 10px;
        font-weight: 600;
        font-size: 13px;
    }
    .product {
        display: flex;
        flex-direction: row;
        padding: 4%;
        border-bottom: 1px solid #ddd;
    }
    .chatting {
        margin: 4%;
    }
    /* 채팅 날짜 */
    .chatdate {
        text-align: center;
        margin: 15px 0;
        font-size: 12px;
        color: #888;
    }

    /* 받은 메시지 (왼쪽) */
    .chatingtext.received {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    /* 보낸 메시지 (오른쪽) */
    .chatingtext.sent {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }

    /* 메시지 박스 스타일 */
    .message-box {
        max-width: 60%;
        padding: 10px;
        border-radius: 15px;
        font-size: 14px;
        position: relative;
    }

    /* 받은 메시지 스타일 */
    .chatingtext.received .message-box {
        background-color: #f1f1f1;
        color: black;
        border: 1px solid #ddd;
        border-radius: 15px 15px 15px 0;
        font-size: 10px;
        max-width: 160px;
    }

    /* 보낸 메시지 스타일 */
    .chatingtext.sent .message-box {
        background-color: #ff6b6b;
        color: white;
        border: 1px solid #ff6b6b;
        border-radius: 15px 15px 0 15px;
        font-size: 10px;
        max-width: 160px;
    }

    /* 메시지 시간 표시 */
    .time {
        font-size: 7px;
        color: #888;
        margin-top: 5px;
        text-align: right;
        align-content: end;
        margin-bottom: 5px;
        margin-left: 3px;
        margin-right: 3px;
    }
`;

export const Send = styled.div`
    display: flex;
    justify-content: center;

    /* 채팅 상자 */
    .chatbox {
        background-color: white;
        border-radius: 8px;
        width: 100%;
        padding-bottom: 80px; /* 입력창 영역을 고려하여 패딩 추가 */
        position: relative;
    }

    /* 메시지 입력창을 고정 */
    .sending {
        display: flex;
        align-items: center;
        padding: 10px;

        position: fixed; /* 화면 하단에 고정 */
        bottom: 0; /* 하단에서 0px */
        margin-bottom: 20px;
    }

    /* 입력 필드 */
    .inputtext input {
        width: 250px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 20px;
        outline: none;
    }

    /* 전송 버튼 */
    .sendingbtn button {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
    }
    .sendingbtn button img {
        width: 25px;
    }
    .sendingfile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }
    .plus {
        width: 25px;
    }
`;
