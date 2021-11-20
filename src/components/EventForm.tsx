import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import React, {FC} from 'react'
import { rules } from '../utils/rules';

const EventForm: FC = () => {
  return (
    <Form>  
      <Form.Item
        label="Описание события"
        name="description" 
        rules={[rules.required()]}
      >
        <Input 

        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date" 
        rules={[rules.required()]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Пользователь"
        name="user" 
        rules={[rules.required()]}
      >
        <Select>
          <Select.Option value="user">User</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="alex">Alex</Select.Option>
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm;