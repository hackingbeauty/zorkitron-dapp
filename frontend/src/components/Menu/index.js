import * as React from 'react';
import { 
    Menu as MaterialUIMenu,
    MenuItem,
    Button,
    Fade
} from '@material-ui/core'

export default function Menu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Dashboard
        </Button>
        <MaterialUIMenu
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>DAI</MenuItem>
            <MenuItem onClick={handleClose}>USDT</MenuItem>
            <MenuItem onClick={handleClose}>ETH</MenuItem>
            <MenuItem onClick={handleClose}>RETH</MenuItem>
            <MenuItem onClick={handleClose}>USDC</MenuItem>
            <MenuItem onClick={handleClose}>WSTETH</MenuItem>
            <MenuItem onClick={handleClose}>USDS</MenuItem>
            <MenuItem onClick={handleClose}>UNI</MenuItem>
            <MenuItem onClick={handleClose}>UDSC.E</MenuItem>
            <MenuItem onClick={handleClose}>WBTC</MenuItem>
            <MenuItem onClick={handleClose}>WETH</MenuItem>
            <MenuItem onClick={handleClose}>LDO</MenuItem>
            <MenuItem onClick={handleClose}>LINK</MenuItem>
            <MenuItem onClick={handleClose}>MKR</MenuItem>
            <MenuItem onClick={handleClose}>COMP</MenuItem>
            <MenuItem onClick={handleClose}>ARB</MenuItem>
            <MenuItem onClick={handleClose}>WEETH</MenuItem>
            <MenuItem onClick={handleClose}>USDE</MenuItem>
            <MenuItem onClick={handleClose}>CBBTC</MenuItem>
        </MaterialUIMenu>
        </div>
    );
}