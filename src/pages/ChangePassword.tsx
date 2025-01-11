import { Button, Row } from "antd";

import { FieldValues, SubmitHandler } from "react-hook-form";

import { TResponse } from "../types";

import { logout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <CustomForm onSubmit={onSubmit}>
        <CustomInput type="text" name="oldPassword" label="Old Password" />
        <CustomInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </CustomForm>
    </Row>
  );
};

export default ChangePassword;
