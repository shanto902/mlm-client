import MyProfile from "../pages/member/account-management/MyProfile";
import PaymentHistory from "../pages/member/account-management/PaymentHistory";
import MyBorrowBooks from "../pages/member/borrow-operations/MyBorrowBooks";
import ReturnRequest from "../pages/member/borrow-operations/ReturnRequest";
import MemberDashboard from "../pages/member/MemberDashboard";
import BrowseBook from "../pages/member/search-books/BrowseBook";
import LocateVan from "../pages/member/search-books/LocateVan";

export const memberPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <MemberDashboard />,
  },
  {
    name: "Search Books",
    children: [
      {
        name: "Browse Books",
        path: "browse-books",
        element: <BrowseBook />,
      },
      {
        name: "Locate Vans",
        path: "locate-vans",
        element: <LocateVan />,
      },
    ],
  },
  {
    name: "Borrowing Operations",
    children: [
      {
        name: "My Borrowed Books",
        path: "borrowed-books",
        element: <MyBorrowBooks />,
      },
      {
        name: "Return Request",
        path: "return-request",
        element: <ReturnRequest />,
      },
    ],
  },
  {
    name: "Account Management",
    children: [
      {
        name: "Profile",
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        name: "Payment History",
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
];
