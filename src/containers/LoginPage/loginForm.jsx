import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Typography } from 'antd';
import FormWrapper from '../../components/FormWrapper';

const { Title } = Typography;

const LoginForm = () => {
    const [initialValues, setInitialValues] = useState({});

    const [form] = Form.useForm();

    return (
      <FormWrapper
        classname="login-page-form"
        values={initialValues}
        formInstance={form}
        name="login-form"
      >
        <Title level={3}>
        Log in
        </Title>
      </FormWrapper>
      // <>
     
      //   <Form
      //     name="login"
      //     initialValues={{ remember: true }}
      //     style={{ maxWidth: 360 }}
      //     onFinish={onFinish}
      //   >
      //     <Form.Item
      //       name="username"
      //       rules={[{ required: true, message: 'Please input your Username!' }]}
      //     >
      //       <Input prefix={<UserOutlined />} placeholder="Username" />
      //     </Form.Item>
      //     <Form.Item
      //       name="password"
      //       rules={[{ required: true, message: 'Please input your Password!' }]}
      //     >
      //       <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      //     </Form.Item>
      //     <Form.Item>
      //       <Flex justify="space-between" align="center">
      //         <Form.Item name="remember" valuePropName="checked" noStyle>
      //           <Checkbox>Remember me</Checkbox>
      //         </Form.Item>
      //         <a href="">Forgot password</a>
      //       </Flex>
      //     </Form.Item>
    
      //     <Form.Item>
      //       <Button block type="primary" htmlType="submit">
      //         Log in
      //       </Button>
      //       or <a href="">Register now!</a>
      //     </Form.Item>
      //   </Form>
      //   </>
      );
}

export default LoginForm;