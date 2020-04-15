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
const Items = [
    { index: 1, link: '/home', title: '首页' },
    { index: 2, link: '/', title: '最新表情' },
    { index: 3, link: '/', title: '表情搜索' },
    { index: 4, link: '/', title: '关于爱发表情' },
];

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo"> <img src="/logo.png" alt=""/></div>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        { Items.map((val: any, key: number) => (
                            <Menu.Item key={ val.index } >
                                <Link to={ val.link }>{ val.title }</Link>
                            </Menu.Item>
                        ))}
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