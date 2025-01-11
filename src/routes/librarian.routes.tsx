import AddBook from "../pages/librarian/book-management/AddBook";
import AllBooks from "../pages/librarian/book-management/AllBooks";

import IssueBook from "../pages/librarian/borrow-operation/IssueBook";
import ReturnBook from "../pages/librarian/borrow-operation/ReturnBook";
import TrackOverdue from "../pages/librarian/borrow-operation/TrackOverdue";
import LibrarianDashboard from "../pages/librarian/LibrarianDashboard";

export const librarianPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <LibrarianDashboard />,
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
    name: "Borrowing Operations",
    children: [
      {
        name: "Issue Book",
        path: "issue-book",
        element: <IssueBook />,
      },
      {
        name: "Return Book",
        path: "return-book-records",
        element: <ReturnBook />,
      },
      {
        name: "Track Overdue Books",
        path: "track-overdue-books",
        element: <TrackOverdue />,
      },
    ],
  },
];
