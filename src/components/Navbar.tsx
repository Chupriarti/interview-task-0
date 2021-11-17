import {Layout, Row} from 'antd';
import React, {FC} from 'react'

const Navbar: FC = () => {
  return (
    <Layout.Header>
      <Row justify="end">
      Navbar
      </Row>
    </Layout.Header>
  )
}

export default Navbar;