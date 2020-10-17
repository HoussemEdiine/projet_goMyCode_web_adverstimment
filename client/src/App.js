import React from 'react';
import './App.css';
import './Routes'
import { Container } from 'reactstrap'
import Routes from './Routes';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        selling onlin0e
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
  }
 
function App() {
    return (
    <div className='grid-container'>
  
       <Routes/>
       <footer class="w3-container w3-padding-64 w3-center  w3-light-grey w3-xlarge">
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  
  <Copyright/>
</footer>
     
    </div>
     
    
     
  
  );
}

export default App;
