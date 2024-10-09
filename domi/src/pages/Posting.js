import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as PI from "../styles/PostingStyle";

function Posting() {
    // 네비게이션 훅
    const navigate = useNavigate();

    // 임시저장 버튼 클릭 시 호출
    const handleSave = () => {
        navigate("/"); // '/' 경로로 이동
    };

    // 등록하기 버튼 클릭 시 호출
    const handleUpload = () => {
        navigate("/posted"); // '/posted' 경로로 이동
    };
    //이미지 업로드
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files); // Get the selected files

        if (files.length + imagePreviews.length > 10) {
            alert("이미지는 최대 10장까지 업로드 가능합니다.");
            return;
        }

        const newPreviews = files.map((file) => {
            return URL.createObjectURL(file); // Create preview URLs
        });

        setImagePreviews((prev) => [...prev, ...newPreviews]); // Append new previews
    };

    //글자수
    const [productName, setProductName] = useState(""); // To track input value

    const handleInputChange = (event) => {
        const value = event.target.value;
        // Update state only if it's within the limit
        if (value.length <= 40) {
            setProductName(value);
        }
    };

    //카테고리 선택 박스
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = ["의류", "잡화", "식료품"];

    const handleCategoryClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    //버튼 선택
    const [selectedCondition, setSelectedCondition] = useState(null);

    const conditions = [
        { id: "new", label: "새상품" },
        { id: "noWear", label: "사용감 없음" },
        { id: "lightWear", label: "사용감 적음" },
        { id: "heavyWear", label: "사용감 많음" },
        { id: "damaged", label: "고장/파손 상품" },
    ];

    const handleConditionSelect = (conditionId) => {
        setSelectedCondition(conditionId); // Set the selected condition ID
        console.log("Selected condition:", conditionId); // You can pass this value as needed
    };
    // 요일과 장소 선택 상태 관리
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");

    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const locations = ["1관 로비 테이블", "2관 1층 테이블"];

    // 요일 선택 처리
    const toggleDay = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day)); // 선택 취소
        } else {
            setSelectedDays([...selectedDays, day]); // 선택
        }
    };

    // 거래 장소 선택 처리
    const selectLocation = (location) => {
        if (selectedLocation === location) {
            setSelectedLocation(""); // 선택 취소
        } else {
            setSelectedLocation(location); // 선택
        }
    };

    return (
        <C.Page>
            <C.Center>
                {" "}
                <C.PageSpace>
                    <PI.Posting>
                        <PI.Posttitle>
                            <div className="postedtitle">상품등록</div>
                        </PI.Posttitle>
                        <PI.Postbox>
                            <div className="postedbox">
                                <div className="postedimgbox">
                                    <div className="postedimgtxt">
                                        상품이미지
                                    </div>
                                    <div className="postedupload">
                                        <div className="image-preview-container">
                                            {imagePreviews.map(
                                                (image, index) => (
                                                    <div
                                                        key={index}
                                                        className="image-preview"
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`미리보기 이미지 ${
                                                                index + 1
                                                            }`}
                                                            style={{
                                                                maxWidth:
                                                                    "150px",
                                                                maxHeight:
                                                                    "70px",
                                                                marginTop:
                                                                    "10px",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <label className="custom-file-upload">
                                            이미지 업로드
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                disabled={
                                                    imagePreviews.length >= 10
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="postedtocategolry">
                                    <div className="postedname">
                                        <div className="postednametxt">
                                            상품명
                                        </div>
                                        <div className="postednametype">
                                            <div className="postednametypingbox">
                                                <input
                                                    placeholder="상품명을 입력해주세요"
                                                    class="postedinput"
                                                    onChange={handleInputChange}
                                                    maxLength={40} // Limit the input to 40 characters
                                                ></input>
                                            </div>
                                            <div className="postenamelimit">
                                                {productName.length}/40
                                            </div>
                                        </div>
                                        <div className="postedcategolryselectionbox">
                                            <div className="postedcategolryselectionboxtxt">
                                                카테고리
                                            </div>
                                            <div className="postedcategolryselectionboxborder">
                                                <div
                                                    className="postedcategolryselection"
                                                    onClick={
                                                        handleCategoryClick
                                                    }
                                                >
                                                    <div>
                                                        {selectedCategory ||
                                                            "카테고리 선택"}{" "}
                                                    </div>

                                                    <div
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {isDropdownOpen
                                                            ? "▲"
                                                            : "▼"}
                                                    </div>
                                                </div>

                                                {isDropdownOpen && (
                                                    <div className="categoryDropdown">
                                                        {categories.map(
                                                            (category) => (
                                                                <div
                                                                    key={
                                                                        category
                                                                    }
                                                                    onClick={() =>
                                                                        handleCategorySelect(
                                                                            category
                                                                        )
                                                                    }
                                                                    style={{
                                                                        cursor: "pointer",
                                                                    }}
                                                                >
                                                                    {category}
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="postedcondition">
                                    <div className="postedconditionselection">
                                        <div className="postedconditionselectiontxt">
                                            상품 상태
                                        </div>
                                        <div className="postedconditionselectionboxes">
                                            {conditions.map((condition) => (
                                                <button
                                                    key={condition.id}
                                                    className={`condition-btn ${
                                                        selectedCondition ===
                                                        condition.id
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleConditionSelect(
                                                            condition.id
                                                        )
                                                    }
                                                >
                                                    {condition.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="postedconditionexplain">
                                        <div className="postedconditionexplaintxt">
                                            설명
                                        </div>
                                        <div className="postedconditionexplainbox">
                                            <textarea
                                                placeholder="브랜드, 모델명, 구매 시기, 하자 유무 등 상품 설명을 최대한 자세히 적어주세요.
전화번호, SNS 계정 등 개인정보 입력은 제한될 수 있어요."
                                                class="postedtextarea"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="postedconditioncost">
                                        <div className="postedconditioncosttxt">
                                            가격
                                        </div>
                                        <div className="postedconditioncostbox">
                                            <input
                                                placeholder="가격을 입력해주세요"
                                                class="postedinput"
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <dic className="posteddatewhere">
                                    <div className="posteddate">
                                        <div className="posteddatetxt">
                                            거래 희망 일자
                                        </div>
                                        <div className="posteddate">
                                            <div className="posteddaysbuttons">
                                                {days.map((day) => (
                                                    <button
                                                        key={day}
                                                        onClick={() =>
                                                            toggleDay(day)
                                                        }
                                                        style={{
                                                            backgroundColor:
                                                                selectedDays.includes(
                                                                    day
                                                                )
                                                                    ? "#FFACAC"
                                                                    : "white",
                                                            border: selectedDays.includes(
                                                                day
                                                            )
                                                                ? "1px solid #FFACAC"
                                                                : "1px solid #ccc",
                                                        }}
                                                    >
                                                        {day}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="postedwhere">
                                        <div className="postedwheretxt">
                                            거래 가능 장소
                                        </div>
                                        <div className="postedwherebox">
                                            {locations.map((location) => (
                                                <button
                                                    key={location}
                                                    onClick={() =>
                                                        selectLocation(location)
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            selectedLocation ===
                                                            location
                                                                ? "#FFACAC"
                                                                : "white",

                                                        border: selectedLocation.includes(
                                                            location
                                                        )
                                                            ? "1px solid #FFACAC"
                                                            : "1px solid #ccc",
                                                    }}
                                                >
                                                    {location}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </dic>
                            </div>
                        </PI.Postbox>
                        <PI.Postnextpage>
                            <div className="postednextpage">
                                <button className="save" onClick={handleSave}>
                                    임시저장
                                </button>
                                <button
                                    className="upload"
                                    onClick={handleUpload}
                                >
                                    등록하기
                                </button>
                            </div>
                        </PI.Postnextpage>
                    </PI.Posting>{" "}
                </C.PageSpace>
            </C.Center>
        </C.Page>
    );
}

export default Posting;
