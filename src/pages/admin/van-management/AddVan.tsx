import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/form/CustomForm";
import CustomInput from "../../../components/form/CustomInput";
import { Button } from "antd";
import { TResponse } from "../../../types";
import { useAddVanMutation } from "../../../redux/features/admin/libraryVanManagement";
import { TLibraryVan } from "../../../types/libraryVan.type";

const AddVan = () => {
  const [addVan] = useAddVanMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const van = {
      libraryVanId: data.libraryVanId,
    };

    try {
      console.log("AddVan", data);
      const res = (await addVan(van)) as TResponse<TLibraryVan>;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <CustomInput name="libraryVanId" type="text" label="Title" />
      <Button htmlType="submit">Submit</Button>
    </CustomForm>
  );
};

export default AddVan;
