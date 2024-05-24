import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import { ManageAccounts } from '@mui/icons-material';
import './BranchHeader.css';

function BranchHeader() {
    return (
        <div className="branchHeader-container">
            <div className="left-header">
                Branch
            </div>
            <div className="center-header">
                DEBO Clinic
            </div>
            <div className="right-header" >
                <div className="small-info">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <ul>
                        <li>Hi Duong</li>
                        <li>Admin</li>
                    </ul>
                    <Fab size="small" color="primary" aria-label="add" >
                        <ManageAccounts />
                    </Fab>
                </div>
            </div>
        </div>

    );
}

export default BranchHeader;
