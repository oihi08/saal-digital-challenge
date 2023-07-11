import { Button, Form, Input, Modal, Select } from 'antd';
import { useState } from 'react';
import objectTypes from 'utils/objectTypes.constants';

type Types = typeof objectTypes;

const TableActions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        <button className="button" onClick={() => setModalOpen(true)}>
          Add new object
        </button>
      </div>
      <Modal
        title="Add new object"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" onClick={() => {}}>
            Submit
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          //onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Name is required!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Description is required!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Type">
            <Select>
              {Object.keys(objectTypes).map((key) => (
                <Select.Option value={key}>
                  {objectTypes[key as keyof Types]}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default TableActions;
