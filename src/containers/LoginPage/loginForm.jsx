import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Typography, message } from 'antd';
import FormWrapper from '../../components/FormWrapper';
import FormInputWrapper from '../../components/FormInputWrapper';
import { Link } from 'react-router';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import { useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { makeErrorSelector, makeInitialValuesSelector, makeIsLoadingSelector } from './selectors';

const { Title } = Typography;

const stateSelector = createStructuredSelector({
  initialValues: makeInitialValuesSelector(),
  isLoading: makeIsLoadingSelector(),
  errors: makeErrorSelector()
})

const LoginForm = () => {
    const {errors, initialValues, isLoading} = useSelector(stateSelector);

    const [form] = Form.useForm();

    useEffect(() => {
      if(errors?.length) {
        form.setFields(errors);
      }
    }, [errors]);

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

        <FormInputWrapper 
          name={'username'}
          id={'username'}
          type={'text'}
          rules={[
            {
              required: true,
              whitespace: true,
              message: "email is required"
            }
          ]}
          icon={<UserOutlined className='site-form-item-icon' />}
          placeholder={'user@school.com'}
        />

        <FormInputWrapper 
          passwordInput
          rules={[
            {
              required: true,
              whitespace: true,
              message: "password is required"
            }
          ]}
          name={'password'}
          id={'password'}
          type={'password'}
          icon={<LockOutlined className='site-from-item-icon' />}
          placeholder={'****'}
        />

        <Form.Item>
          <div className='d-flex'>
            <Form.Item name={'remember'} valuePropName='checked' noStyle>
              <Checkbox>
               Remember me
              </Checkbox>
            </Form.Item>
            <div className="ml-auto">
              <Link className='login-form-forgot' to={'/forgot-password'}>
                Lost password?
              </Link>
            </div>
          </div>
        </Form.Item>

        <FormButtonWrapper 
          variant='primary'
          form={form}
          disabled={isLoading}
          label={'Sign in'}
        />

        <Link className='link' to={'/register'}>
          register now!
        </Link>
        
      </FormWrapper>
      );
}

export default LoginForm;