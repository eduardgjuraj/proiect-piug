import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <React.Fragment>
        <div style={{ minHeight: '10vh', display: 'flex', flexDirection: 'column' }}>: </div>
        <Divider>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'right', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              
              aria-label="GitHub"
              sx={{ alignSelf: 'right' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              
              aria-label="X"
              sx={{ alignSelf: 'right' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              
              aria-label="LinkedIn"
              sx={{ alignSelf: 'right' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
          </Divider>
    </React.Fragment>
  );
}