import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/CommonStyle";
import * as PI from "../styles/PostingStyle";
import plus from "../assets/chatplus.png";

function Posting() {
    const navigate = useNavigate();

    // 임시저장 버튼 클릭 시 호출
    const handleSave = () => {
        alert("임시 저장되었습니다.");
        navigate("/"); // '/' 경로로 이동
    };

    // 등록하기 버튼 클릭 시 호출
    const handleUpload = () => {
        alert("상품이 등록되었습니다.");
        navigate("/posted"); // '/posted' 경로로 이동
    };

    // 이미지 업로드
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);

        if (files.length + imagePreviews.length > 10) {
            alert("이미지는 최대 10장까지 업로드 가능합니다.");
            return;
        }

        const newPreviews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews((prev) => [...prev, ...newPreviews]);
    };

    // 글자수
    const [productName, setProductName] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.length <= 40) {
            setProductName(value);
        }
    };

    // 카테고리 선택 박스
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = ["의류", "잡화", "식료품"];

    const handleCategoryClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    // 상품 상태 선택
    const [selectedCondition, setSelectedCondition] = useState(null);

    const conditions = [
        { id: "new", label: "새상품" },
        { id: "noWear", label: "사용감 없음" },
        { id: "lightWear", label: "사용감 적음" },
        { id: "heavyWear", label: "사용감 많음" },
        { id: "damaged", label: "고장/파손 상품" },
    ];

    const handleConditionSelect = (conditionId) => {
        setSelectedCondition(conditionId);
    };

    // 요일 및 장소 선택 상태 관리
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [locations, setLocations] = useState([
        { name: "1관 로비 테이블", isNew: false },
        { name: "2관 1층 테이블", isNew: false },
    ]);
    const [newLocation, setNewLocation] = useState("");

    const days = ["월", "화", "수", "목", "금", "토", "일"];

    const toggleDay = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const selectLocation = (locationName) => {
        if (selectedLocation === locationName) {
            setSelectedLocation(""); // 선택 취소
        } else {
            setSelectedLocation(locationName); // 선택
        }
    };

    // 새 장소 추가 핸들러
    const handleAddLocation = () => {
        if (!newLocation.trim()) {
            alert("장소를 입력하세요.");
            return;
        }

        if (locations.find((loc) => loc.name === newLocation)) {
            alert("이미 추가된 장소입니다.");
            return;
        }

        setLocations([...locations, { name: newLocation, isNew: true }]); // 새 장소 추가
        setNewLocation(""); // 입력 필드 초기화
    };

    // 거래 가능 시간 관련 상태 관리
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    // 시간대 추가 핸들러
    const handleAddTimeSlot = () => {
        if (!startTime || !endTime) {
            alert("시간대를 모두 선택하세요.");
            return;
        }

        const timeSlot = `${startTime} ~ ${endTime}`;
        setAvailableTimeSlots([...availableTimeSlots, timeSlot]);
        setStartTime("");
        setEndTime("");
    };

    // 시간대 삭제 핸들러
    const handleRemoveTimeSlot = (index) => {
        setAvailableTimeSlots(availableTimeSlots.filter((_, i) => i !== index));
    };

    return (
        <C.Page>
            <C.Center>
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
                                                    className="postedinput"
                                                    onChange={handleInputChange}
                                                    maxLength={40}
                                                />
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
                                                            "카테고리 선택"}
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
                                                placeholder="브랜드, 모델명, 구매 시기, 하자 유무 등 상품 설명을 자세히 적어주세요."
                                                className="postedtextarea"
                                            />
                                        </div>
                                    </div>

                                    <div className="postedconditioncost">
                                        <div className="postedconditioncosttxt">
                                            가격
                                        </div>
                                        <div className="postedconditioncostbox">
                                            <input
                                                placeholder="가격을 입력해주세요"
                                                className="postedinput"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 거래 가능 시간 추가 */}
                                <div className="postedwhere">
                                    <div className="postedwheretxt">
                                        거래 가능 시간
                                    </div>
                                    <div className="postedtimebox">
                                        <div className="time-inputs">
                                            <label>
                                                시작 시간:
                                                <input
                                                    type="time"
                                                    value={startTime}
                                                    onChange={(e) =>
                                                        setStartTime(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </label>
                                            <label>
                                                종료 시간:
                                                <input
                                                    type="time"
                                                    value={endTime}
                                                    onChange={(e) =>
                                                        setEndTime(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </label>
                                            <button
                                                onClick={handleAddTimeSlot}
                                                className="timeplus"
                                            >
                                                <img src={plus} alt="추가" />
                                            </button>
                                        </div>

                                        <div className="time-slots">
                                            {availableTimeSlots.map(
                                                (timeSlot, index) => (
                                                    <div
                                                        key={index}
                                                        className="time-slot"
                                                    >
                                                        {timeSlot}
                                                        <button
                                                            onClick={() =>
                                                                handleRemoveTimeSlot(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            삭제
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* 거래 가능 장소 추가 */}
                                <div className="postedwhere">
                                    <div className="postedwheretxt">
                                        거래 가능 장소
                                    </div>
                                    <div className="postedwherebox">
                                        {locations
                                            .reduce(
                                                (
                                                    result,
                                                    location,
                                                    index,
                                                    array
                                                ) => {
                                                    // 두 개씩 묶기
                                                    if (index % 2 === 0) {
                                                        result.push(
                                                            array.slice(
                                                                index,
                                                                index + 2
                                                            )
                                                        );
                                                    }
                                                    return result;
                                                },
                                                []
                                            )
                                            .map((locationPair, pairIndex) => (
                                                <div
                                                    key={pairIndex}
                                                    className="location-pair-container"
                                                >
                                                    {locationPair.map(
                                                        (location) => (
                                                            <button
                                                                key={
                                                                    location.name
                                                                }
                                                                onClick={() =>
                                                                    selectLocation(
                                                                        location.name
                                                                    )
                                                                }
                                                                style={{
                                                                    backgroundColor:
                                                                        selectedLocation ===
                                                                        location.name
                                                                            ? "#FFACAC"
                                                                            : "white",
                                                                    border:
                                                                        selectedLocation ===
                                                                        location.name
                                                                            ? "1px solid #FFACAC"
                                                                            : "1px solid #ccc",
                                                                }}
                                                                className={
                                                                    location.isNew
                                                                        ? "new-location"
                                                                        : ""
                                                                }
                                                            >
                                                                {location.name}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                    <div className="location-inputs">
                                        <input
                                            type="text"
                                            placeholder="장소를 입력하세요"
                                            value={newLocation}
                                            onChange={(e) =>
                                                setNewLocation(e.target.value)
                                            }
                                            className="postedwhereinput"
                                        />
                                        <button
                                            onClick={handleAddLocation}
                                            className="locationplus"
                                        >
                                            <img src={plus} alt="추가" />
                                        </button>
                                    </div>
                                </div>
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
                    </PI.Posting>
                </C.PageSpace>
            </C.Center>
        </C.Page>
    );
}

export default Posting;
