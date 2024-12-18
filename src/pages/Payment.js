import react from "react";
import * as C from "../styles/CommonStyle";
import * as P from "../styles/PaymentStyle";

import { useState } from "react";
import { CreditCard, X } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button1";

import kakao from "../assets/kakao.png";
import naver from "../assets/naver.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import sample from "../assets/두루마리 휴지.jpg";

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const productPrice = 1000; // 상품 가격
    const [selectedCard, setSelectedCard] = useState(null);
    const [installment, setInstallment] = useState(null);
    const history = useNavigate();

    const handlePayment = async () => {
        if (paymentMethod === "kakaopay") {
            try {
                const params = {
                    cid: "TC0ONETIME",
                    partner_order_id: "partner_order_id",
                    partner_user_id: "partner_user_id",
                    item_name: "상품명",
                    quantity: 1,
                    total_amount: productPrice,
                    vat_amount: Math.round(productPrice * 0.1),
                    tax_free_amount: 0,
                    approval_url: "https://domi2024.netlify.app/chat",
                    fail_url: "https://domi2024.netlify.app/chat",
                    cancel_url: "https://domi2024.netlify.app/chat",
                };

                // 카카오페이 결제 요청
                const response = await axios({
                    url: "https://kapi.kakao.com/v1/payment/ready",
                    method: "POST",
                    headers: {
                        Authorization:
                            "KakaoAK 87f6b7f24780d1278eb25a068a52c63b", // 앱 키 설정 필요
                        "Content-type":
                            "application/x-www-form-urlencoded;charset=utf-8",
                    },
                    params,
                });

                const { next_redirect_pc_url, tid } = response.data;
                window.localStorage.setItem("tid", tid); // 결제 승인 시 사용할 tid 저장
                window.location.href = next_redirect_pc_url; // 결제 페이지로 리디렉션
            } catch (error) {
                console.error("결제 요청 중 오류 발생:", error);
                alert("결제 처리 중 오류가 발생했습니다.");
            }
        } else {
            alert("카카오페이 결제만 지원합니다.");
        }
    };

    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <P.Paymentpage>
                            <div className="w-full min-h-screen bg-gray-100">
                                <div className="max-w-[360px] mx-auto bg-white min-h-screen shadow-lg p-6 relative">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-4 right-4"
                                    >
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">닫기</span>
                                    </Button>

                                    <h2 className="text-2xl font-semibold text-customOrange mb-6 text-center">
                                        도미 페이
                                    </h2>

                                    <div className="mb-4">
                                        <h3
                                            className="text-lg font-semibold"
                                            style={{ fontSize: "17px" }}
                                        >
                                            결제 상품
                                        </h3>
                                    </div>

                                    <Card className="mb-6 border-customOrange">
                                        <CardContent className="flex items-center p-4">
                                            <img
                                                src={sample}
                                                className="w-20 h-20 bg-gray-200 rounded-md mr-4"
                                            />
                                            <div>
                                                <h4 className="font-bold text-m">
                                                    두루마리 휴지
                                                </h4>
                                                <p className="text-xs text-gray-600">
                                                    까칠한 도미
                                                </p>
                                                <p className="font-semibold mt-2">
                                                    {productPrice.toLocaleString()}
                                                    원
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="mb-6">
                                        <h3
                                            className="text-lg font-semibold mb-2"
                                            style={{ fontSize: "17px" }}
                                        >
                                            결제 방식
                                        </h3>
                                        <RadioGroup
                                            onValueChange={setPaymentMethod}
                                            className="flex space-x-2 flex outline-none justify-center items-center space-x-2"
                                        >
                                            <div>
                                                <RadioGroupItem
                                                    value="card"
                                                    id="card"
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor="card"
                                                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    <CreditCard className="mb-1 w-5 h-5" />
                                                    카드 결제
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem
                                                    value="kakaopay"
                                                    id="kakaopay"
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor="kakaopay"
                                                    className="flex items-center justify-center rounded-md border-2 border-muted bg-[#FADF38] p-4 hover:bg-[#FADF38] hover:text-accent-foreground peer-data-[state=checked]:border-customOrange [&:has([data-state=checked])]:border-customOrange"
                                                >
                                                    <img
                                                        src={kakao}
                                                        alt=""
                                                        width={40}
                                                        height={40}
                                                    />
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem
                                                    value="naverpay"
                                                    id="naverpay"
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor="naverpay"
                                                    className="flex items-center justify-center rounded-md border-2 border-muted bg-[#01DE59] p-4 hover:bg-[#01DE59] hover:text-accent-foreground peer-data-[state=checked]:border-customOrange [&:has([data-state=checked])]:border-customOrange"
                                                >
                                                    <img
                                                        src={naver}
                                                        alt="네이버페이"
                                                        width={40}
                                                        height={40}
                                                    />
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    {paymentMethod === "card" && (
                                        <div
                                            className="mb-6 space-y-4"
                                            style={{ margin: "10px" }}
                                        >
                                            <p
                                                className="font-semibold"
                                                style={{ fontSize: "15px" }}
                                            >
                                                결제할 카드를 선택해주세요.
                                            </p>
                                            <Select
                                                onValueChange={setSelectedCard}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="카드 선택" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="samsung">
                                                        삼성카드
                                                    </SelectItem>
                                                    <SelectItem value="bc">
                                                        비씨카드
                                                    </SelectItem>
                                                    <SelectItem value="kb">
                                                        국민카드
                                                    </SelectItem>
                                                    <SelectItem value="shinhan">
                                                        신한카드
                                                    </SelectItem>
                                                    <SelectItem value="hyundai">
                                                        현대카드
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Select
                                                onValueChange={setInstallment}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="일시불 및 할부 선택" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="0">
                                                        일시불
                                                    </SelectItem>
                                                    <SelectItem value="2">
                                                        2개월
                                                    </SelectItem>
                                                    <SelectItem value="3">
                                                        3개월
                                                    </SelectItem>
                                                    <SelectItem value="4">
                                                        4개월
                                                    </SelectItem>
                                                    <SelectItem value="5">
                                                        5개월
                                                    </SelectItem>
                                                    <SelectItem value="6">
                                                        6개월
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    <div
                                        className="mt-auto"
                                        style={{ marginTop: "40%" }}
                                    >
                                        <p
                                            className="text-xs text-gray-500 text-center mb-2"
                                            style={{ fontSize: "10px" }}
                                        >
                                            결제 내용 확인 및 결제처리를 위한
                                            개인정보 제공에 동의해요.
                                        </p>

                                        <Button
                                            className="w-full bg-customOrange hover:bg-[#FE6150] text-white"
                                            onClick={handlePayment}
                                        >
                                            {productPrice.toLocaleString()}원
                                            결제하기
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </P.Paymentpage>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default Payment;
