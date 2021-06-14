import React from "react";


const Footer = () => {

  return (
    <footer>
      <Row>
        <Col span={2}>col one</Col>

        <Col span={4}>
          <Menu >
              <Space size="small" direction="vertical">
              <Item>About Us</Item>
              <Item>Contact</Item>
              <Item>Terms & Conditions</Item>
              </Space>
          </Menu>
        </Col>

        <Col span={4} style={{ background: "lightblue" }}>
          col 3
        </Col>

        <Col span={4} style={{ background: "blue" }}>
          col 4
        </Col>

        <Col span={10} style={{ background: "blue" }}>
          col 4
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
