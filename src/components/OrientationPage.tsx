import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import {StarOutline} from '@mui/icons-material';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';



const tiers = [
  {
    buttonText: 'Enregistrer Un Citoyen',
    buttonVariant: 'outlined',
  },
  {
    buttonText: "Actualiser Un Citoyen",
    buttonVariant: 'outlined',
  },
  {
    buttonText: "Generer carte d'identitée",
    buttonVariant: 'outlined',
  },
];
function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
      >

      </AppBar>
      `{/* Hero unit */}`
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h3" align="center" color="text.secondary" component="p">
          Bienvenue sur le site officiel d'identificantion en RDC
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container disableGutters maxWidth="md" component="main">
        <Grid container alignItems="center" justifyContent={'center'} >
          {tiers.map((tier) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                padding: 1.5
              }}
            >
              <Card
                sx={{
                  bgcolor: '#d3d3d3',
                }}
              >
                <CardHeader
                />
                <CardContent>
                  <ul>
                    <Box>
                      <DocumentScannerIcon/>
                    </Box>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </React.Fragment>
  );
}
export default function Pricing() {
  return <PricingContent />;
}
