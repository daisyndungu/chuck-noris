import React, { Component } from 'react';
import { List, Card } from 'antd';

class Categories extends Component {
  render() {
    const {categories,  loadCategory} = this.props;
    
    return (
      <div>
        <List 
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={categories}
          renderItem={item => (
            <List.Item>
              <Card onClick={loadCategory}>{item}</Card>
            </List.Item>
          )}
          
        />
      </div>
    );
  }
}

export default Categories;
