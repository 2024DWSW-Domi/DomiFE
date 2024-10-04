import styled from "styled-components";

export const Posting = styled.div``;
export const Posttitle = styled.div`
    .postedtitle {
        font-size: 20px;
        font-weight: 600;
    }
`;
export const Postbox = styled.div`
    .postedbox {
        display: flex;
        flex-direction: column;
        margin: 10%;
    }
    .postedimgtxt,
    .postednametxt,
    .postedcategolryselectionboxtxt,
    .postedconditionselectiontxt,
    .postedconditionexplaintxt,
    .postedconditioncosttxt,
    .posteddatetxt,
    .postedwheretxt {
        font-size: 10px;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .postednametype {
        display: flex;
        flex-direction: row;
    }
    .postednametype div {
        margin-right: 10px;
    }

    /*카테고리*/

    /*버튼 색상 변경*/
    .condition-btn {
        padding: 10px;
        margin-right: 10px;
        border: 1px solid #ddd;
        cursor: pointer;
        background-color: white;
    }
    .condition-btn.active {
        background-color: #4caf50; /* Color when selected */
        color: white;
    }
`;
export const Postnextpage = styled.div``;
