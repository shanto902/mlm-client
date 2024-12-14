import AddBookVan from "../pages/librarian/book-management/AddBookVan";
import ManageBookVan from "../pages/librarian/book-management/ManageBookVan";
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
        name: "Add Books to Van",
        path: "add-books-van",
        element: <AddBookVan />,
      },
      {
        name: "Manage Books in Van",
        path: "manage-books-van",
        element: <ManageBookVan />,
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
