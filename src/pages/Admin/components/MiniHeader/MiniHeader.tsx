import { Box } from "@mui/material";
import AdminAppBar from "../../components/AdminAppBar/AdminAppBar";
import { SvgIconComponent } from "@mui/icons-material";

type MiniHeaderProps = {
    content: string;
    IconComponent: SvgIconComponent;
};

function MiniHeader({ content, IconComponent }: MiniHeaderProps) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '46px' }}>
            <Box sx={{ display: 'inline-block' }}>
                <AdminAppBar>
                    <IconComponent sx={{ display: { md: 'flex' }, mr: 1 }} />
                    {content}
                </AdminAppBar>
            </Box>
        </Box>
    );
}

export default MiniHeader;