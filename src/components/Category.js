import React, { Component } from 'react';
import { Modal } from 'antd';
import { Spin } from 'antd';


class Category extends Component {

  render() {
    const {joke, visible, closeModal, category, loading} =this.props;
    const upper = category.charAt(0).toUpperCase() + category.substr(1);
    return (
      <div>
        <Modal
          title={upper}
          visible={visible}
          onCancel={closeModal}
          footer={null}
        > <p>Random joke:</p>
          { loading === true ? (
            <Spin size="large" />
          ):
            <div>
              <p>{joke}</p>
            </div>
          }
          
        </Modal>
      </div>
    );
  }
}

export default Category;
