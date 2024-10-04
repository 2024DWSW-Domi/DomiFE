import react from "react";
import * as C from "../styles/CommonStyle";
import * as MP from "../styles/MainPageStyle";

function Mainpage() {
    return (
        <C.Page>
            <C.Center>
                <C.PageSpace>
                    <MP.Mainpage>
                        <div>메인페이지입니다</div>
                    </MP.Mainpage>
                </C.PageSpace>
            </C.Center>
        </C.Page>
    );
}

export default Mainpage;
