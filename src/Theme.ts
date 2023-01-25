import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#045E92',
        },
        secondary: {
            main: '#0C415F',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#0C415F',
            paper: '#FAFAFA'
        },

    },
});

export default theme;