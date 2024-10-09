import React, { useEffect } from "react";
import * as C from "../styles/CommonStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import text from "../assets/logotext.jpg";
import fish from "../assets/logofish.png";
import "animate.css";

function LoadingScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/main");
        }, 5000); // 시간 조정 가능

        return () => clearTimeout(timer);
    }, [navigate]);

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
    right: 32px;
    width: 60%;
    z-index: 2;
`;

const TextImage = styled.img`
       position: absolute;
    top: 94%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 60%;
    z-index: 1;
}
`;