import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateUser from "../pages/admin/user-management/CreateUser";
import EditUser from "../pages/admin/user-management/EditUser";
import ManageRole from "../pages/admin/user-management/ManageRole";
import AddBook from "../pages/admin/book-management/AddBook";
import AllBooks from "../pages/admin/book-management/AllBooks";
import AddVan from "../pages/admin/van-management/AddVan";
import AllVans from "../pages/admin/van-management/AllVans";
import ViewBorrows from "../pages/admin/borrow-records/ViewBorrows";
import OverdueRecords from "../pages/admin/borrow-records/OverdueRecords";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create User",
        path: "create-user",
        element: <CreateUser />,
      },
      {
        name: "View/Edit Users",
        path: "edit-users",
        element: <EditUser />,
      },
      {
        name: "Roles & Permissions",
        path: "manage-roles",
        element: <ManageRole />,
      },
    ],
  },
  {
    name: "Book Management",
    children: [
      {
        name: "Add Book",
        path: "add-book",
        element: <AddBook />,
      },
      {
        name: "Manage Books",
        path: "manage-books",
        element: <AllBooks />,
      },
    ],
  },
  {
    name: "Van Management",
    children: [
      {
        name: "Add Van",
        path: "add-van",
        element: <AddVan />,
      },
      {
        name: "Manage Vans",
        path: "manage-vans",
        element: <AllVans />,
      },
    ],
  },
  {
    name: "Borrowing Records",
    children: [
      {
        name: "View All Borrowing Records",
        path: "view-all-borrows",
        element: <ViewBorrows />,
      },
      {
        name: "Overdue Records",
        path: "overdue-records",
        element: <OverdueRecords />,
      },
    ],
  },
];
