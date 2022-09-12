import "./topbar.css"
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function topbar() {
  return (
    <>
    <Typography className="typo"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'nome', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#d1ff33',
              textDecoration: 'none',
              margin:4
              
            }}
          >
            lrl4x
            <IconButton className="iconb">
              <ClearAllIcon className="icon"/>
            </IconButton>
          </Typography>
    </>
  )
}
