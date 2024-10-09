import react from "react";
import * as C from "../styles/CommonStyle";
import * as R from "../styles/RatingStyle";

import { useState } from "react";
import {
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  Coffee,
  Smile,
  Heart,
  Star,
  Sun,
  Utensils,
  DollarSign,
  CircleCheckBig,
} from "lucide-react";
import { Button } from "../components/ui/button1";

const likeOptions = [
  {
    icon: <CircleCheckBig className="w-5 h-5" />,
    text: "친절하고 매너가 좋아요",
  },
  {
    icon: <CircleCheckBig className="w-5 h-5" />,
    text: "시간 약속을 잘 지켜요",
  },
  { icon: <CircleCheckBig className="w-5 h-5" />, text: "응답이 빨라요" },
  {
    icon: <CircleCheckBig className="w-5 h-5" />,
    text: "물품 상태가 설명과 같아요",
  },
  { icon: <CircleCheckBig className="w-5 h-5" />, text: "가격이 합리적이에요" },
];

const dislikeOptions = [
  {
    icon: <CircleCheckBig className="w-5 h-5" />,
    text: "불친절하고 매너가 부족해요",
  },
  {
    icon: <CircleCheckBig className="w-5 h-5" />,
    text: "시간 약속을 지키지 않아요",
  },
  { icon: <CircleCheckBig className="w-5 h-5" />, text: "응답이 너무 늦어요" },
  {
    icon: <CircleCheckBig className="w-5 h-5" />,
    text: "물품 상태가 설명과 달라요",
  },
  { icon: <CircleCheckBig className="w-5 h-5" />, text: "가격이 비싸요" },
];

function Rating() {
  const [selectedLikes, setSelectedLikes] = useState([]);
  const [selectedDislikes, setSelectedDislikes] = useState([]);

  const toggleOption = (option, isLike) => {
    if (isLike) {
      setSelectedLikes((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    } else {
      setSelectedDislikes((prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option]
      );
    }
  };

  const isSubmitDisabled =
    selectedLikes.length === 0 && selectedDislikes.length === 0;

  const handleSubmit = async () => {
    const reviewData = {
      likes: selectedLikes.length,
      dislikes: selectedDislikes.length,
    };

    console.log("Submitting review data:", reviewData);

    // API 호출 시뮬레이션
    try {
      // 실제 API 엔드포인트로 대체해야 합니다
      const response = await fetch("/api/submit-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        console.log("Review submitted successfully");
        // 여기에 성공 처리 로직을 추가할 수 있습니다 (예: 성공 메시지 표시)
      } else {
        console.error("Failed to submit review");
        // 여기에 실패 처리 로직을 추가할 수 있습니다 (예: 오류 메시지 표시)
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      // 여기에 에러 처리 로직을 추가할 수 있습니다
    }
  };

  return (
    <div>
      <C.Page>
        <C.Center>
          <C.PageSpace>
            <R.Ratingpage>
              <div className="max-w-md mx-auto p-10 space-y-8">
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold">
                    남기고 싶은 평가를 선택해주세요.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    필수로 1개 이상 선택해야 해요.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <ThumbsUp className="w-6 h-6 mt-1 text-red-500 flex-shrink-0" />
                    <div className="space-y-3 flex-1">
                      {likeOptions.map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-left py-2 px-3 rounded-lg transition-colors duration-200 flex items-center space-x-2 hover:bg-gray-100"
                          onClick={() => toggleOption(option.text, true)}
                        >
                          <span
                            className={
                              selectedLikes.includes(option.text)
                                ? "text-red-500"
                                : ""
                            }
                          >
                            {option.icon}
                          </span>
                          <span className="text-sm">{option.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 justify-end">
                    <div className="space-y-3 flex-1 text-right">
                      {dislikeOptions.map((option, index) => (
                        <button
                          key={index}
                          className="w-full text-right py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-end space-x-2 hover:bg-gray-100"
                          onClick={() => toggleOption(option.text, false)}
                        >
                          <span className="text-sm">{option.text}</span>
                          <span
                            className={
                              selectedDislikes.includes(option.text)
                                ? "text-blue-500"
                                : ""
                            }
                          >
                            {option.icon}
                          </span>
                        </button>
                      ))}
                    </div>
                    <ThumbsDown className="w-6 h-6 mt-1 text-blue-500 flex-shrink-0" />
                  </div>
                </div>

                <Button
                  className="w-full bg-customOrange hover:bg-moreOrange text-white transition-colors duration-200"
                  disabled={isSubmitDisabled}
                  onClick={() => (window.location.href = `/`)}
                >
                  제출하기
                </Button>
              </div>
            </R.Ratingpage>
          </C.PageSpace>
        </C.Center>
      </C.Page>
    </div>
  );
}

export default Rating;
