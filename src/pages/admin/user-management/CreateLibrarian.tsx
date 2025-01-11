/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Col, Divider, Form, Input, Row } from "antd";
import CustomForm from "../../../components/form/CustomForm";
import CustomInput from "../../../components/form/CustomInput";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomDatePicker from "../../../components/form/CustomDatePicker";
import { useAddLibrarianMutation } from "../../../redux/features/admin/userManagement";
import { genderOptions } from "../../../constants/global.constant";

//! This is only for development
//! Should be removed

const CreateLibrarian = () => {
  const [addLibrarian, { data, error }] = useAddLibrarianMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const librarianData = {
      password: "123",
      librarian: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(librarianData));
    formData.append("file", data.image);

    addLibrarian(formData);
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <CustomForm onSubmit={onSubmit}>
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput
                type="text"
                name="name.firstName"
                label="First Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomSelect
                options={genderOptions}
                name="gender"
                label="Gender"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomDatePicker name="dateOfBirth" label="Date of birth" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput type="text" name="contactNo" label="Contact" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CustomInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </CustomForm>
      </Col>
    </Row>
  );
};

export default CreateLibrarian;
