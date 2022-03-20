import { FooterHelp, Link } from "@shopify/polaris";

const Footer = () => {
  return (
    <FooterHelp>
      Link to Github repo Next{" "}
      <Link url="https://help.shopify.com/manual" external>
        Frontend
      </Link>
      Link to Github repo Express{" "}
      <Link url="https://help.shopify.com/manual" external>
        Backend
      </Link>
    </FooterHelp>
  );
};

export default Footer;
