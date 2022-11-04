import React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

// import Image from '../../assets/landingpage.jpeg'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/landingpage.jpeg"})`,
        height:600,
        width:600
    }
};

export default function Home (){
        return(
            <Paper style={styles.paperContainer}>
                Test Landing page
            </Paper>
        )
    }
