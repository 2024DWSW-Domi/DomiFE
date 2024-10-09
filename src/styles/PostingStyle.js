import styled from "styled-components";

export const Posting = styled.div`
    margin: 4%;
`;
export const Posttitle = styled.div`
    .postedtitle {
        font-size: 12px;
        font-weight: 600;
        margin-left: 6%;
        margin-right: 6%;
        margin-top: 10%;
    }
`;
export const Postbox = styled.div`
    .postedbox {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 4%;
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
        margin-top: 5%;
        margin-bottom: 2%;
    }
    .postedupload input {
        font-size: 10px;
    }
    .postenamelimit {
        font-size: 10px;
        display: flex;
        align-items: center;
    }
    .postedinput {
        width: 240px;
        height: 20px;
        font-size: 10px;
    }
    .postednametype {
        display: flex;
        flex-direction: row;
    }
    .postednametype div {
        margin-right: 10px;
    }
    .custom-file-upload {
        display: inline-block;
        padding: 5px;
        cursor: pointer;
        border: 0.3px solid #d9d9d9;
        border-radius: 5px;
        text-align: center;
        font-size: 8px;
    }

    .postedupload input[type="file"] {
        display: none; /* Hide the actual input */
    }
    .image-preview-container {
        display: flex;
        flex-direction: row;
    }
    /*카테고리*/
    .postedcategolryselection {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .postedcategolryselectionboxborder {
        border: 0.3px solid #d9d9d9;
        border-radius: 3px;
        padding: 7px;
        font-size: 10px;
    }
    .categoryDropdown {
        margin-top: 4%;
    }
    /*버튼 색상 변경*/
    .postedconditionselectionboxes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .condition-btn {
        padding: 5px;
        margin: 2px;
        width: 150px;
        border: 1px solid #949191;
        cursor: pointer;
        background-color: white;
        border-radius: 10px;
        font-size: 10px;
    }
    .condition-btn.active {
        background-color: #ffacac; /* Color when selected */
        border: 2px solid #ffacac;
    }
    .postedtextarea {
        width: 270px;
        height: 80px;
        font-size: 10px;
        border-radius: 5px;
        border: 0.3px solid #d9d9d9;
    }
    .postedinput {
        border-radius: 5px;
        border: 0.3px solid #d9d9d9;
    }
    //날짜
    .posteddate {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .posteddaysbuttons {
        display: flex;
        justify-content: center;
    }
    .posteddaysbuttons button {
        background-color: white;
        border-radius: 100%;
        font-size: 10px;
        padding: 8px;
        border: 1px solid;
        width: 30px;
        margin-left: 3px;
    }
    .postedwherebox {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .postedwherebox button {
        background-color: white;
        border-radius: 10px;
        width: 90px;
        padding: 6px;
        font-size: 10px;
        margin-left: 5px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .time-inputs {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }

    .time-slots {
        margin-top: 10px;
    }

    .time-slot {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    .time-slot button {
        background-color: #ff6b6b;
        color: white;
        border: none;
        padding: 3px 6px;
        border-radius: 3px;
        cursor: pointer;
    }
    .time-inputs,
    .time-slot {
        font-size: 10px;
        display: flex;
        align-items: center;
    }
    .timeplus,
    .locationplus img {
        width: 20px;
    }
    .postedtimebox {
        margin: 7px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .postedconditioncostbox {
        margin-bottom: 10px;
    }
    .location-inputs {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 6px;
    }
    .postedwhereinput {
        border-radius: 5px;
        border: 0.3px solid #d9d9d9;
        width: 150px;
        height: 25px;
        font-size: 10px;
        margin-right: 5px;
    }
`;
export const Postnextpage = styled.div`
    .postednextpage {
        display: flex;
        justify-content: center;
    }
    .save,
    .upload {
        padding: 10px;
        width: 100px;
        margin: 2%;
        font-size: 10px;

        background-color: white;
        border-radius: 10px;
    }
    .save {
        border: 1px solid #949191;
        background-color: white;
    }
    .upload {
        background-color: #f2b8b5; /* Color when selected */
        border: 2px solid #ffacac;
    }
`;
