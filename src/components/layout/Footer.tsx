import { Layout } from "antd";

const { Footer: FooterComponent } = Layout;
const Footer = () => {
  return (
    <FooterComponent style={{ textAlign: "center" }}>
      Mobile Library Management Application ©{new Date().getFullYear()} Created
      by Ashik Ali Shanto
    </FooterComponent>
  );
};

export default Footer;
