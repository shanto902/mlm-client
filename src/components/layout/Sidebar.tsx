import { Button, Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { librarianPaths } from "../../routes/librarian.routes";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  logout,
  TUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { memberPaths } from "../../routes/member.routes";
import { verifyToken } from "../../utils/verifyToken";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  LIBRARIAN: "librarian",
  MEMBER: "member",
};
const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }
  let sidebarItems;
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  switch ((user! as TUser).role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.LIBRARIAN:
      sidebarItems = sidebarItemsGenerator(librarianPaths, userRole.LIBRARIAN);
      break;
    case userRole.MEMBER:
      sidebarItems = sidebarItemsGenerator(memberPaths, userRole.MEMBER);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
      <Button
        style={{
          position: "absolute",
          bottom: 50,
          left: 50,
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>{" "}
    </Sider>
  );
};

export default Sidebar;
