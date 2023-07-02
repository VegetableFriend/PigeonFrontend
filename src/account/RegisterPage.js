import { LockOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Layout, Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import AccountService from "./AccountService";
import { useLocation } from "react-router-dom";

const RegisterPage = () => {
    const location = useLocation();
    console.log(location);

    const backgroundStyle = {
        style: {
            height: '100%',
            backgroundColor: 'rgb(0, 21, 41)',
        },
    }

    return (
        <Layout {...backgroundStyle}>
            <PigeonIcon></PigeonIcon>
            <PigeonLabel></PigeonLabel>
            <AccountInput></AccountInput>
            <PasswordInput></PasswordInput>
            <RegisterAccountButton></RegisterAccountButton>
        </Layout>
    );
}

function PigeonIcon() {
    const pigeonIconStyle = {
        style: {
            color: 'white',
        }
    }

    return (
        <TwitterOutlined {...pigeonIconStyle}></TwitterOutlined>
    )
}

function PigeonLabel() {
    const pigeonLabelStyle = {
        style: {
            color: 'white',
        }
    }

    return (
        <Paragraph {...pigeonLabelStyle}>账号注册</Paragraph>
    );
}

function AccountInput() {
    const accountInputProps = {
        size: 'large',
        placeholder: '请输入账号',
        prefix: <UserOutlined/>
    }

    return (
        <Input {...accountInputProps}></Input>
    );
}

function PasswordInput() {
    const passwordInputProps = {
        size: 'large',
        placeholder: '请输入密码',
        prefix: <LockOutlined/>
    }

    return (
        <Input {...passwordInputProps}></Input>
    );
}

function RegisterAccountButton() {
    const registerAccountButtonProps = {
        onClick: (event) => {
            AccountService.register();
        }
    }

    return (
        <Button {...registerAccountButtonProps}>注册</Button>
    );
}

export default RegisterPage;