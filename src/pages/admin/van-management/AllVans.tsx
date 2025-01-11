import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { TLibraryVan } from "../../../types/libraryVan.type";
import {
  useGetAllLibraryVansQuery,
  useUpdateVanStatusMutation,
} from "../../../redux/features/admin/libraryVanManagement";

export type TTableData = Pick<TLibraryVan, "libraryVanId" | "status">;

const items = [
  {
    label: "Active",
    key: "active",
  },
  {
    label: "Inactive",
    key: "inactive",
  },
  {
    label: "On Maintenance",
    key: "in-maintenance",
  },
];

const AllVans = () => {
  const { data: vanData, isFetching } = useGetAllLibraryVansQuery(undefined);
  const [updateVanStatus] = useUpdateVanStatusMutation();

  const tableData = (vanData?.data as TLibraryVan[])?.map(
    ({ _id, libraryVanId, status }) => ({
      key: _id,
      name: libraryVanId,
      status,
    })
  );

  const handleStatusUpdate = (data, vanId: string) => {
    const updatedData = {
      id: vanId,
      data: {
        status: data.key,
      },
    };

    console.log(updatedData);

    updateVanStatus(updatedData);
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color;
        if (status === "active") color = "green";
        else if (status === "inactive") color = "grey";
        else if (status === "in-maintenance") color = "yellow";

        return (
          <Tag
            style={{
              textTransform: "uppercase",
            }}
            color={color}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "x",
      render: (record) => {
        const menuProps = {
          items,
          onClick: (data: any) => handleStatusUpdate(data, record.key),
        };
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      rowKey="key"
    />
  );
};

export default AllVans;
