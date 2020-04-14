import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';
import routes from '../router';
import { RouteWithSubRoutes } from '../assets/common';
import { RouteInterface } from '../assets/interface'
import { Layout, Menu } from "antd";
import './App.css';


const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo"> <img src="/logo.png"/></div>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'><Link to="/home">首页</Link></Menu.Item>
                        <Menu.Item key='2'><Link to="/">最新表情</Link></Menu.Item>
                        <Menu.Item key='3'><Link to="/">表情搜索</Link></Menu.Item>
                        <Menu.Item key='4'><Link to="/">关于爱发表情</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
                        <Switch>
                            {routes.map((route: RouteInterface, i: number) => {
                                return RouteWithSubRoutes(route, i)
                            })}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant</Footer>
            </Layout>
        </Router>
    );
}

export default App;