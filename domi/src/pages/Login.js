import react from "react";
import * as C from "../styles/CommonStyle";
import * as Lo from "../styles/LoginStyle";

function Login() {
    return (
        <div>
            <C.Page>
                <C.Center>
                    <C.PageSpace>
                        <Lo.Loginpage>
                            <div>로그인 회원가입 페이지입니다</div>
                        </Lo.Loginpage>
                    </C.PageSpace>
                </C.Center>
            </C.Page>
        </div>
    );
}

export default Login;
