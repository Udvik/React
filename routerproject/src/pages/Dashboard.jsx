import {Link , Outlet} from 'react-router-dom';

function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
            <nav style={{ marginBottom: '15px' }}>
                <Link to="profile" style={{ marginRight: '10px' }}>
                  Profile
                </Link>
                <Link to="settings">
                  Settings
                </Link>
            </nav>
          <hr />

          
          <Outlet />
        </div>
    )
}

export default Dashboard;