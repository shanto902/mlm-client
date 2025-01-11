import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageRole from "../pages/admin/user-management/ManageRole";
import AddVan from "../pages/admin/van-management/AddVan";
import AllVans from "../pages/admin/van-management/AllVans";
import ViewBorrows from "../pages/admin/borrow-records/ViewBorrows";
import OverdueRecords from "../pages/admin/borrow-records/OverdueRecords";
import CreateLibrarian from "../pages/admin/user-management/CreateLibrarian";
import LibrarianData from "../pages/admin/user-management/LibrarianData";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Librarian Management",
    children: [
      {
        name: "Create Librarian",
        path: "create-librarian",
        element: <CreateLibrarian />,
      },
      {
        name: "Librarians",
        path: "edit-librarians",
        element: <LibrarianData />,
      },
      {
        name: "Members",
        path: "edit-librarians",
        element: <LibrarianData />,
      },
      {
        name: "Roles & Permissions",
        path: "manage-roles",
        element: <ManageRole />,
      },
    ],
  },
  {
    name: "Member Management",
    children: [],
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
