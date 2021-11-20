import { Form, Input } from 'antd';
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
    </Form>
  )
}

export default EventForm;