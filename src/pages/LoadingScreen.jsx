import React, { useEffect, useState } from "react";
import * as C from "../styles/CommonStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import text from "../assets/logotext.jpg";
import fish from "../assets/logofish.png";
import "animate.css";

function LoadingScreen() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // 여기서 데이터를 로딩하거나 다른 준비 작업을 처리
    useEffect(() => {
        const loadData = async () => {
            // 데이터 로딩이나 준비 작업 수행
            await new Promise((resolve) => setTimeout(resolve, 5000)); // 예시로 5초 지연
            setLoading(false); // 로딩 완료 시 false로 설정
        };

        loadData();
    }, []);

    useEffect(() => {
        if (!loading) {
            navigate("/main2"); // 로딩이 끝나면 main 페이지로 이동
        }
    }, [loading, navigate]);

    return (
        <C.Page>
            <C.Center>
                <C.PageSpace>
                    <ImageContainer>
                        <div className="imgbox">
                            <FishImage
                                src={fish}
                                className="animate__animated animate__bounceInDown animate__slow animate__infinite"
                                alt="Fish Logo"
                            />
                            <TextImage
                                src={text}
                                alt="Logo Text"
                                className="animate__animated animate__swing animate__slow animate__infinite"
                            />
                            <Logologogogo>
                                기숙사 비대면 거래 도우미, 도미
                            </Logologogogo>
                        </div>
                    </ImageContainer>
                </C.PageSpace>
            </C.Center>
        </C.Page>
    );
}

export default LoadingScreen;

// styled-components

const ImageContainer = styled.div`
    position: relative;
    width: 300px; /* 컨테이너 너비 설정 */
    height: 300px; /* 컨테이너 높이 설정 */
`;

const FishImage = styled.img`
    position: absolute;
    top: 89%;
    right: 5%;
    width: 60%;
    z-index: 2;
`;

const TextImage = styled.img`
    position: absolute;
    top: 94%;
    left: 36%;
    transform: translate(-50%, -50%);
    width: 60%;
    z-index: 1;
`;

const Logologogogo = styled.div`
    position: absolute;
    top: 134%;
    right: -42%;
    width: 100%;
    z-index: 2;
    font-size: 11px;
    color: #909090;
`;
