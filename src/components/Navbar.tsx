import {Layout, Menu, Row} from 'antd';
import React, {FC} from 'react'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteName } from '../routes';
import { AuthActionCreators } from '../store/reducers/auth/action-creator';

const Navbar: FC = () => {
  const router = useHistory();
  const {isAuth, user} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <Layout.Header >
      <Row justify="end">
        {isAuth
          ?
            <>
              <div style={{color: 'white'}}>
                {user.username}
              </div>
              <Menu  theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item 
                  onClick={() => dispatch(AuthActionCreators.logout())}
                  key={1}
                >
                    Выйти
                  </Menu.Item>
              </Menu>
            </>
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