import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const NotFound = (props) => {
  return (
    <Grid container>
    	<Grid item xs={12}>
    		<Typography variant="h2" gutterBottom>
    			Error 404 Page Not Found
    		</Typography>
    		<Typography variant="body1" gutterBottom>
    			Sorry, that page does not exist :( 
    		</Typography>
    	</Grid>
    </Grid>
  )
}

export default NotFound;