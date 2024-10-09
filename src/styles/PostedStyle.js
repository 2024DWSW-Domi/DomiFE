import styled from "styled-components";

export const Posted = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const PostedPage = styled.div`
    margin: 4%;
    .postedbackbtn button {
        all: unset;
    }
    .postedbackbtn img {
        width: 30px;
    }
    .postedmainpage {
        display: flex;
        flex-direction: column;
        margin: 1%;
        margin-left: 10%;
        margin-right: 10%;
    }

    //이미지 사이즈
    .postedimgbox {
        display: flex;
        justify-content: center;
    }
    .postedimg {
        width: 280px;
        height: 141px;
        border-radius: 20px;
    }
    //제목
    .postedtitle {
        font-size: 20px;
        font-weight: 600;
        margin-top: 15px;
    }
    .postedtitleinfowho,
    .postedtitleinfoloved {
        font-size: 12px;
        margin: 3px;
    }
    .postedtitleinfoloved {
        display: flex;
        align-items: center;
    }
    .hearimg {
        width: 15px;
        height: 15px;
        margin-top: 1px;
    }
    .postedcost {
        display: flex;
        justify-content: end;
        font-size: 20px;
        font-weight: 600;
    }
    .postedinfomation {
        width: 100%;
        margin-top: 8%;
    }
    .postedinfomationbox {
        border: 1px solid #cbcbcb;
        border-radius: 15px;
        padding: 20px;
        font-size: 10px;
    }
    .postedinfomationbox div {
        display: flex;
        flex-direction: row;
    }
    .infomationtitle {
        color: #cbcbcb;
    }
    .infomationtitles {
        color: #cbcbcb;
        width: 100px;
    }
`;

export const PostedPay = styled.div`
    .BuyBtn {
        all: unset;
        width: -webkit-fill-available;
        background-color: #ffacac;
        padding: 19px;
        color: white;
        display: flex;
        justify-content: center;
        margin-top: 20%;
    }
    .slideUpModal {
        position: fixed;
        bottom: -100%;
        width: 100%;
        background-color: white;
        border-radius: 20px 20px 0 0;
        box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        max-width: 360px;
        animation: slideUp 0.4s ease forwards;
        z-index: 1000;
        box-sizing: content-box;
    }

    @keyframes slideUp {
        from {
            bottom: -100%;
        }
        to {
            bottom: 0;
        }
    }

    .modalOverlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .modalRow {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    .modalRowTop,
    .modalRowBottom {
        display: flex;
        justify-content: center;
    }
    .modalRowTop {
        margin-top: 16px;
    }
    .datetitle {
        font-weight: 900;
        margin-top: 16px;
    }
    .dayBtn {
        background-color: #fff; /* 선택 가능한 버튼 - 하얀색 */
        border: 1px solid #000;
        border-radius: 50px;
        padding: 5px;
        font-size: 10px;
        cursor: pointer;
        width: 40px;
        height: max-content;
        margin: 5px;
    }

    .dayBtnSelected {
        background-color: #ffacac; /* 선택된 버튼 - 빨간색 */
        border: #ffacac;
        color: #fff;
        border-radius: 50px;
        padding: 5px;
        font-size: 10px;
        cursor: pointer;
        width: 40px;
        height: max-content;
        margin: 5px;
    }

    .dayBtnDisabled {
        background-color: #d9d9d9; /* 선택 불가능한 버튼 - 회색 */
        color: black;
        border: #d9d9d9;
        border-radius: 50px;
        padding: 5px;
        font-size: 10px;
        cursor: pointer;
        width: 40px;
        height: max-content;
        margin: 5px;
        cursor: not-allowed; /* 선택 불가능한 버튼에 마우스 아이콘 변경 */
    }

    .locationButtons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        margin-top: 16px;
    }

    .locationBtn {
        border-radius: 20px;
        font-size: 10px;
        padding: 10px;
        border: none;
        background-color: #e5e7eb;
    }
    .locationBtnSelected {
        border-radius: 20px;
        font-size: 10px;
        padding: 10px;
        border: none;
        background-color: #ffacac; /* 선택된 버튼 - 빨간색 */
        border: #ffacac;
    }

    .timeSelect {
        width: 80%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 30px;
        border: 1px solid #000;
        font-size: 10px;
    }

    .submitBtn {
        padding: 10px;
        background-color: #ffacac;
        color: #fff;
        border: none;
        border-radius: 50px;
        width: 200px;
        cursor: pointer;
        font-size: 10px;
    }
    .postedcenter {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }
`;
