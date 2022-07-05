import React from 'react';
import AdminBanner from '../../components/DashboardComponent/AdminBanner/AdminBanner';
import Chart from '../../components/DashboardComponent/Chart/Chart';
import StartMenuBar from '../../components/DashboardComponent/StartMenuBar/StartMenuBar';
import TotallLead from '../../components/DashboardComponent/TotallLead/TotallLead';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <AdminBanner></AdminBanner>
            <TotallLead></TotallLead>
            <Chart></Chart>
            
        </div>
    );
};

export default Dashboard;