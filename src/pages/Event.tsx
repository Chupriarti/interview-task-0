import { Button, Layout, Modal, Row } from 'antd';
import React, {FC} from 'react'
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {fetchGuests, createEvent, fetchEvents} = useActions();
  const {guests} = useTypedSelector(state => state.event)
  const {user} = useTypedSelector(state => state.auth)

  React.useEffect(() => {
    fetchEvents(user.username);
    fetchGuests();
  }, [])
  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  }

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
        <EventForm  
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </Layout>
  )
}

export default Event;