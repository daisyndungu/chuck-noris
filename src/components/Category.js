import React, { Component } from 'react';
import { Modal } from 'antd';
import { Spin } from 'antd';


class Category extends Component {

  render() {
    const {joke, visible, closeModal, category, loading} =this.props;
    return (
      <div>
        <Modal
          title={`Random ${category} joke`}
          visible={visible}
          onCancel={closeModal}
          footer={null}
        > { loading === true ? (
            <Spin size="large" />
          ):
            <p>{joke}</p>
          }
          
        </Modal>
      </div>
    );
  }
}

export default Category;
