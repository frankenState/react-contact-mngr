import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Clear from '@material-ui/icons/Clear';
import ViewList from '@material-ui/icons/ViewList';
import { blue, pink } from '@material-ui/core/colors';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
	paper: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	root: {
		width: '100%',
    	maxWidth: 360,
		margin: `${theme.spacing(0)}px auto`,
		padding: theme.spacing(0),
	},
		icon: {
	    margin: theme.spacing(0),
	    fontSize: 16,
	},
	avatarIcon: {
		width: 20,
		height: 20,
		margin: 10,
		color: '#fff',
		backgroundColor: pink[500]
	},
	avatarIcon1: {
		width: 20,
		height: 20,
		margin: 10,
		color: '#fff',
		backgroundColor: blue[500]
	}
}))

const onDeleteClick = () => { 

	console.log("DELETE CLICKED!");

	
}

const Contact = (props) => {
  const classes = useStyles();
  const { id, name, phone, email } = props.contact;
  
  return (
	<Grid container>
		<Grid item xs={8}>
			<List className={classes.root}>
		    	<ListItem>
			    	<ListItemAvatar>
			          <Avatar>{name.toUpperCase().charAt(0)}</Avatar>
			        </ListItemAvatar>
			        <ListItemText 
			        	primary={name} 
			        	secondary={
			        		<React.Fragment>
			        			<Typography component="span">{phone}</Typography>
			        			<br />
			        			<Typography component="span">{email}</Typography>
			        		</React.Fragment>
			        	} 
			        />
		    	</ListItem>
		    	<Divider variant="inset" component="li" />
		    </List>
		</Grid>
		<Grid item xs={4}>
			<Avatar onClick={onDeleteClick} className={classes.avatarIcon} >
				<Clear className={classes.icon} />
			</Avatar>
			<Link component={RouterLink} to={`/contact/edit/${id}`} >
				<Avatar className={classes.avatarIcon1} >
	    			<ViewList className={classes.icon} />
	    		</Avatar>
			</Link>
		</Grid>
	</Grid>
	)
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired
}

export default Contact;