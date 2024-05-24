import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import { ManageAccounts } from '@mui/icons-material';
import './BranchHeader.css'

function BranchHeader() {
    return (
        <div className="container">
            <div className="left-header">
                Branch
            </div>
            <div className="right-header">
                <Fab className='add-icon' size="small" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <div className="small-info">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <ul>
                        <li>Hi Duong</li>
                        <li>Admin</li>
                    </ul>
                    <ManageAccounts />
                </div>
            </div>
        </div>
    );
}

export default BranchHeader;
