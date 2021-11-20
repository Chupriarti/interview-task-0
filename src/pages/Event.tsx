import { Button, Layout, Modal, Row } from 'antd';
import React, {FC} from 'react'
import EventCalendar from '../components/EventCalendar';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  console.log(modalVisible)
  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
        >
          Добавить событие
        </Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
      </Modal>
    </Layout>
  )
}

export default Event;