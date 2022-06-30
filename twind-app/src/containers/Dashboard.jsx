import * as React from 'react';
import Container from '../components/Container';
import DashboardItem from '../components/DashboardItem';

const Dashboard = () => {
    return (
        <Container>
            <h1>Your Dashboard</h1>
            <div className="item-list">
                <DashboardItem title="Money" data="123000" />
                <DashboardItem title="People" data="8" />
                <DashboardItem title="Number of projects" data="6" />
                <DashboardItem title="Number of customers" data="6" />
                <DashboardItem title="Cups of coffee" data="256" />
                <DashboardItem title="Cans of beer" data="128" />
            </div>
        </Container>
    );
};

export default Dashboard;
