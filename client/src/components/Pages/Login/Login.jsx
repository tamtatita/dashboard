import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { API as url } from "../../../API";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.error("Sai tài khoản mật khẩu");
  };

  const onFinish = async (values) => {

    const res = await axios.post(`${url}/login`, values);
    if (res.data.success == false) {
      info()
    } else {
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex  items-center justify-start h-screen w-full">
      {contextHolder}
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-ecommerce-banner-planning-segmentation-selection-image_1375247.jpg"
        alt=""
        className="h-screen w-screen absolute object-cover"
      />
      <div className="ml-10 w-1/3 h-1/2 text-white bg-white/20 p-4 relative   rounded-lg shadow-sm  flex items-center justify-center">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="User Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="employeeNumber"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
