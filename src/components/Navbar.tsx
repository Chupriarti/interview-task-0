import {Layout, Menu, Row} from 'antd';
import React, {FC} from 'react'

const Navbar: FC = () => {
  return (
    <Layout.Header >
      <Row justify="end">
        <Menu  theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key={1}>Логин</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  )
}

export default Navbar;