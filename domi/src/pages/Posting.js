import react, { useState } from "react";
import * as C from "../styles/CommonStyle";
import * as PI from "../styles/PostingStyle";

function Posting() {
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
                                        <input type="file" accept="image/*" />
                                    </div>
                                </div>
                                <div className="postedtocategolry">
                                    <div className="postedname">
                                        <div className="postednametxt">
                                            상품명
                                        </div>
                                        <div className="postednametype">
                                            <div className="postednametypingbox">
                                                <input placeholder="상품명을 입력해주세요"></input>
                                            </div>
                                            <div className="postenamelimit">
                                                0/40
                                            </div>
                                        </div>
                                        <div className="postedcategolryselectionbox">
                                            <div className="postedcategolryselectionboxtxt">
                                                카테고리
                                            </div>
                                            <div
                                                className="postedcategolryselection"
                                                onClick={handleCategoryClick}
                                            >
                                                {selectedCategory ||
                                                    "카테고리 선택"}{" "}
                                                <div
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    {isDropdownOpen ? "▲" : "▼"}
                                                </div>
                                            </div>
                                            {isDropdownOpen && (
                                                <div className="categoryDropdown">
                                                    {categories.map(
                                                        (category) => (
                                                            <div
                                                                key={category}
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
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="postedconditioncost">
                                        <div className="postedconditioncosttxt">
                                            가격
                                        </div>
                                        <div className="postedconditioncostbox">
                                            <input placeholder="가격을 입력해주세요"></input>
                                        </div>
                                    </div>
                                </div>
                                <dic className="posteddatewhere">
                                    <div className="posteddate">
                                        <div className="posteddatetxt">
                                            거래 희망 일자
                                        </div>
                                    </div>
                                    <div className="postedwhere">
                                        <div className="postedwheretxt">
                                            거래 가능 장소
                                        </div>
                                        <div className="postedwherebox"></div>
                                    </div>
                                </dic>
                            </div>
                        </PI.Postbox>
                        <PI.Postnextpage>
                            <div className="postednextpage">
                                <button className="save">임시저장</button>
                                <button className="upload">등록하기</button>
                            </div>
                        </PI.Postnextpage>
                    </PI.Posting>{" "}
                </C.PageSpace>
            </C.Center>
        </C.Page>
    );
}

export default Posting;
