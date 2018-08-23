import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu,} from 'antd';
import { fetchCategoriesReq } from '../api/categories';
import Categories from './Categories';
import { Spin } from 'antd';


class Home extends Component {
    state = {
        category: '',
        visible: false
    }
  componentDidMount() {
    this.props.fetchCategoriesReq();
  }

  render() {
    const { Header, Content, Footer } = Layout;
    const {categories, loading } =this.props;       
    return(
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Chuck Norris Jokes</Menu.Item>
    
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
    
          <div style={{ background: '#fff', padding: 24, minHeight: 'inherit' }}>
          {
            loading === true ? (
              <Spin tip="Loading jokes..." size="large"/>
            ):
            <Categories loadCategory={this.loadCategory} categories={categories}/>
          }
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Powered by chuck norris API
        </Footer>
      </Layout>);
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    categories:state.categories.data,
    loading: state.categories.request.loading
  };
};

export default connect(mapStateToProps,{ fetchCategoriesReq})(Home);
