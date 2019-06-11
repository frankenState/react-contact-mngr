import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
					<Button className={classes.root} color="inherit">Home</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}