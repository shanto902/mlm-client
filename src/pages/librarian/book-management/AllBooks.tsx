import { Button, Pagination, Table, TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParam } from "../../../types";
import { TBook } from "../../../types/book.type";
import { useGetAllBooksQuery } from "../../../redux/features/admin/bookManagement";

export type TTableData = Pick<
  TBook,
  "title" | "description" | "author" | "publishedYear"
>;

const AllBooks = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: bookData,
    isLoading,
    isFetching,
  } = useGetAllBooksQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },

    ...params,
  ]);

  console.log({ isLoading, isFetching });

  console.log(bookData);
  const tableData = bookData?.data?.map(
    ({ _id, title, description, author, publishedYear }: TBook) => ({
      key: _id,
      title,
      description,
      author,
      publishedYear,
    })
  );

  const metaData = bookData?.meta;

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Author",
      key: "author",
      dataIndex: "author",
    },
    {
      title: "Published Year",
      key: "publishedYear",
      dataIndex: "publishedYear",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
            <Button>Delete</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "title", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "publishedYear", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default AllBooks;
