import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { librarianPaths } from "../../routes/librarian.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser, TUser } from "../../redux/features/auth/authSlice";
import { memberPaths } from "../../routes/member.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  LIBRARIAN: "librarian",
  MEMBER: "member",
};
const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  let sidebarItems;

  switch (user!.role) {
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
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
