import { useGetAllBooksQuery } from "../../../redux/features/book/bookApi";

const AllBooks = () => {
  const { data } = useGetAllBooksQuery(undefined);
  console.log(data);
  return <div>AllBooks</div>;
};

export default AllBooks;
