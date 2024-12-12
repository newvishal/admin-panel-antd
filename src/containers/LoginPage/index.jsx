import { Col, Row } from "antd";
import LoginForm from "./loginForm";

export default function LoginPage() {
    return (
        <div className="login-page mh-100">
            <Row className="login-center">
                <Col xl={6} lg={10} md={10} xs={16} className="m-auto">
                    <LoginForm />
                </Col>
            </Row>
        </div>
    )
}