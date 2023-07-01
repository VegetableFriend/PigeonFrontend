import { LockOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Layout, Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import AccountService from "./AccountService";
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
    console.log(props);

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
            <LoginButton></LoginButton>
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
        <Paragraph {...pigeonLabelStyle}>欢迎使用Pigeon云存储系统</Paragraph>
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

function LoginButton() {
    const navigate = useNavigate();
    function loginResult(result) {
        navigate('/');
    }  

    const loginButtonProps = {
        onClick: (event) => {
            AccountService.login(loginResult);
        }
    }

    return (
        <Button {...loginButtonProps}>登录</Button>
    );
}

function RegisterAccountButton() {
    const navigate = useNavigate();
    const registerAccountButtonProps = {
        onClick: (event) => {
            navigate('/register');
        }
    }

    return (
        <Button {...registerAccountButtonProps}>注册</Button>
    );
}

export default LoginPage;