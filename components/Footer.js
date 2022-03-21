import { FooterHelp, Link } from "@shopify/polaris";

const Footer = () => {
  return (
    <FooterHelp>
      Link to Github repo{" "}
      <Link url="https://github.com/princephpdev/appcolor" external>
        AppColor
      </Link>
    </FooterHelp>
  );
};

export default Footer;
