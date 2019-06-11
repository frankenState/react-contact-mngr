import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	dense: {
		marginTop: theme.spacing(2)
	},
	menu: {
		width: 200
	}
}))

const TextInputField = ({type, label, onChange, defaultValue, name}) => {
  
  

  const classes = useStyles();

  return (
     <TextField
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        id="outlined-dense"
        type={type}
        label={label}
        onChange={onChange}
        value={defaultValue}
        name={name}
        required
      />
  )
}

TextInputField.defaultProps = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	defaultValue: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

export default TextInputField;