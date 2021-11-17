import {Layout, Menu, Row} from 'antd';
import React, {FC} from 'react'
import {useHistory} from 'react-router-dom';
import { RouteName } from '../routes';

const Navbar: FC = () => {
  const router = useHistory();
  const auth = false;
  return (
    <Layout.Header >
      <Row justify="end">
        {auth
          ?
            <Menu  theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item 
                onClick={() => console.log("Exiting...")}
                key={1}>
                  Выйти
                </Menu.Item>
            </Menu>
          :
            <Menu  theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item 
                onClick={() => router.push(RouteName.LOGIN)}
                key={1}>
                  Логин
                </Menu.Item>
            </Menu>
        }
 
      </Row>
    </Layout.Header>
  )
}

export default Navbar;