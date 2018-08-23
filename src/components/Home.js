import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu,} from 'antd';
import { fetchCategoriesReq } from '../api/categories';
import Categories from './Categories';

class Home extends Component {
    state = {
        category: '',
        visible: false
    }
  componentDidMount() {
    this.props.fetchCategoriesReq();
  }

  render() {
    const { Header, Content } = Layout;
    const {categories} =this.props;      
    return(
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Chuck Noris Jokes</Menu.Item>
    
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
    
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Categories loadCategory={this.loadCategory} categories={categories}/>
          </div>
        </Content>
      </Layout>);
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    categories:state.categories.data
  };
};

export default connect(mapStateToProps,{ fetchCategoriesReq})(Home);
