import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/form/CustomForm";
import CustomInput from "../../../components/form/CustomInput";
import { Button } from "antd";
import CustomSelect from "../../../components/form/CustomSelect";
import { useAddBookMutation } from "../../../redux/features/admin/bookManagement";
import { TResponse } from "../../../types";
import { TBook } from "../../../types/book.type";
import { useGetAllLibraryVansQuery } from "../../../redux/features/admin/libraryVanManagement";

const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const { data } = useGetAllLibraryVansQuery(undefined);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const libraryVans = Object.entries(data)
      .filter(([key, value]) => key.startsWith("van_") && value > 0)
      .map(([key, value]) => ({
        libraryVanId: key.replace("van_", ""),
        stock: Number(value),
      }));

    const book = {
      title: data.title,
      author: data.author,
      categories: ["675c9e854f1a1373c623fc78"],
      description: data.description,
      price: 200,
      publishedYear: data.publishedYear,
      ISBN: data.ISBN,
      language: data.language,
      libraryVans,
    };

    console.log(book);

    try {
      const res = (await addBook(book)) as TResponse<TBook>;
      console.log("AddBook", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const libraryVansOptions =
    data?.data?.map((van: { _id: string; libraryVanId: string }) => van) || [];

  const languages = [
    { value: "english", label: "English" },
    { value: "bangla", label: "Bangla" },
    { value: "hindi", label: "Hindi" },
  ];

  return (
    <CustomForm onSubmit={onSubmit}>
      <CustomInput name="title" type="text" label="Title" />
      <CustomInput name="author" type="text" label="Author" />
      <CustomInput name="description" type="text" label="Description" />
      <CustomSelect name="language" label="Language" options={languages} />
      {libraryVansOptions.map((van: Record<string, string>) => (
        <CustomInput
          key={van._id}
          name={`van_${van._id}`}
          type="number"
          label={`Stock for ${van.libraryVanId}`}
        />
      ))}
      <CustomInput name="ISBN" type="text" label="ISBN" />
      <CustomInput name="publishedYear" type="text" label="Published Year" />
      <Button htmlType="submit">Submit</Button>
    </CustomForm>
  );
};

export default AddBook;
