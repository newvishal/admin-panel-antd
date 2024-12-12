import { Form } from "antd";
import PropTypes from "prop-types";

const FormWrapper = ({
    classname,
    children,
    name,
    values,
    formInstance,
    ...props
}) => (
    <Form
        {...props}
        scrollToFirstError
        name={name}
        initialValues={values}
        form={formInstance}
        className={classname}
    >
        {children}
    </Form>
);

FormWrapper.propTypes = {
    formInstance: PropTypes.object,
    children: PropTypes.node,
    classname: PropTypes.string,
    name: PropTypes.string.isRequired,
    values: PropTypes.object
};

export default FormWrapper;