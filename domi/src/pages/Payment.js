import react from "react";
import * as C from "../styles/CommonStyle";
import * as P from "../styles/PaymentStyle";

import { useState } from "react";
import { CreditCard, X } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button1";

import kakao from "../assets/kakao.png";
import naver from "../assets/naver.png";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const productPrice = 50000; // 상품 가격을 50,000원으로 가정

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
                    결제
                  </h2>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">결제 상품</h3>
                  </div>

                  <Card className="mb-6 border-customOrange">
                    <CardContent className="flex items-center p-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-md mr-4"></div>
                      <div>
                        <h4 className="font-bold text-m">상품명</h4>
                        <p className="text-sm text-gray-600">판매자 닉네임</p>
                        <p className="font-semibold mt-2">
                          {productPrice.toLocaleString()}원
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">결제 방식</h3>
                    <RadioGroup
                      onValueChange={setPaymentMethod}
                      className="flex space-x-2"
                    >
                      <div>
                        <RadioGroupItem
                          value="account"
                          id="account"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="account"
                          className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-customOrange [&:has([data-state=checked])]:border-customOrange"
                        >
                          <CreditCard size={20} className="mb-2" />
                          <p className="text-xs">계좌이체</p>
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
                          <img src={kakao} alt="" width={40} height={40} />
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

                  {paymentMethod === "account" && (
                    <div className="mb-6">
                      <p className="mb-2 font-semibold">
                        아래 계좌로 입금해주세요!
                      </p>
                      <Input className="mb-2" placeholder="신한은행" readOnly />
                      <Input placeholder="1010101011010" readOnly />
                    </div>
                  )}

                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 text-center mb-2">
                      결제 내용 확인 및 결제처리를 위한 개인정보 제공에
                      동의해요.
                    </p>

                    <Button className="w-full bg-customOrange hover:bg-[#FE6150] text-white">
                      {productPrice.toLocaleString()}원 결제하기
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
