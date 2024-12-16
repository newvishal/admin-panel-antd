import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';

const FormButtonWrapper = (props) => {
    const {
        label,
        icon,
        variant,
        show = true,
        className,
        disabled,
        form
    } = props;

    return (
        <>
            {
                show ? (
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                icon={icon}
                                loading={disabled}
                                type={variant}
                                htmlType='submit'
                                className={className}
                                disabled={
                                    !!form.getFieldsError().filter(({errors}) => errors.length)
                                }
                            >
                                {label}
                            </Button>
                        )}
                    </Form.Item>
                ): ('')
            }
        </>
    );
};

FormButtonWrapper.propTypes = {
    form: PropTypes.object,
    icon: PropTypes.object,
    disabled: PropTypes.bool,
    show: PropTypes.bool,
    variant: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
  };

export default FormButtonWrapper;