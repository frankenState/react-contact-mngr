import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Store from '@material-ui/icons/Store';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function Header(){
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="primary">
				<Toolbar>
					<Typography className={classes.root} variant="h6" color="inherit">
						Contact Manager
					</Typography>
					<Link 
						className={classes.root}
						style={{color:'#fff'}} 
						component={RouterLink} 
						to="/"
					>
					<Store />
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	)
}