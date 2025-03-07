import React from 'react';
import { TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Checklist = ({ data, updateData }) => {

  const handleChange = (e, id, field) => {
    const { value } = e.target;

    // Update the checklist items in the state
    const updatedItems = data.items.map((item) => 
      (item.id === id || item._id === id) ? { ...item, [field]: value } : item
    );

    updateData('checklist', { items: updatedItems });
  };
  
  return (
    <Grid container spacing={4}>  
      { data && data.items.map((item, index) => (
        <Grid 
          container 
          spacing={4} 
          key={item.id || item._id || index}  // Support for both `id` and `_id`
          sx={{ width: '100%' }}
        >
          {/* Name field */}
          <Grid item size={3} sx={{ alignItems:"center" }}>
            <Typography>{`${index + 1}. ${item.name || 'New Item'}`}</Typography>
          </Grid>

          {/* Status field */}
          <Grid item size={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select 
                defaultValue="" 
                label="Status" 
                value={item.status || ''} 
                onChange={(e) => handleChange(e, item.id || item._id || index, 'status')}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="NA">NA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          {/* EnclosureNo field */}
          <Grid item size={3}>
            <TextField
              fullWidth
              label="EnclosureNo"
              variant="outlined"
              value={item.enclosureNo || ''}
              onChange={(e) => handleChange(e, item.id || item._id || index, 'enclosureNo')}
            />
          </Grid>

          {/* Remarks field */}
          <Grid item size={3}>
            <TextField
              fullWidth
              label="Remarks"
              variant="outlined"
              value={item.remarks || ''}
              onChange={(e) => handleChange(e, item.id || item._id || index, 'remarks')}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Checklist;
