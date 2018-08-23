import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Card } from 'antd';
import Category from './Category';
import { fetchCategoryReq } from '../api/category';


class Categories extends Component {

  state = {
    visible: false,
    category: '',
  }
  loadCategory = (event, category) => {    
    this.setState({
        visible: true,
        category: category
      }, () => this.props.fetchCategoryReq(category));
  }

  closeModal = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {categories, joke, loading} = this.props;
    console.log(loading);
        
    
    return (
      <div>
        <List 
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={categories}
          renderItem={category => (
            <List.Item onClick={(event) => this.loadCategory(event, category)}>
              <Card >{category}</Card>
            </List.Item>
          )}
          
        />
        <Category loading={loading} joke={joke} closeModal={this.closeModal} visible={this.state.visible} category={this.state.category} />

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    joke:state.category.data,
    status: state.category.request.status,
    loading: state.category.request.loading
  };
};


export default connect(mapStateToProps, {fetchCategoryReq})(Categories);
