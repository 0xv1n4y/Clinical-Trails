import React from 'react';
import { TextField, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import Grid from '@mui/material/Grid2';

const BenefitsAndRisks = ({ data = {}, updateData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData('benefitsRisks', { ...data, [name]: value });
  };
  return (
    <Grid container spacing={2}>
      <Grid item size={3}>
        <TextField fullWidth label="Anticipated Risks" variant="outlined" name='anticipatedRisks' value={data.anticipatedRisks || ""} onChange={handleChange}/>
      </Grid>
      <Grid item size={3}>
        <TextField fullWidth label="Risk Management Strategy" variant="outlined" name='riskManagement' value={data.riskManagement || ""} onChange={handleChange} />
      </Grid>
      <Grid item size={3}>
        <FormControl fullWidth>
          <InputLabel >Participant Benefits</InputLabel>
          <Select label="Potential Benefits" name='participantBenefit' value={data.participantBenefit || ""} onChange={handleChange}  >
            <MenuItem value="Direct">Direct</MenuItem>
            <MenuItem value="Indirect">Indirect</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item size={3}>
        <FormControl fullWidth>
          <InputLabel >Society Benefits</InputLabel>
          <Select label="Society Benefits" name='societalBenefits' value={data.societalBenefits || ""} onChange={handleChange}  >
            <MenuItem value="Direct">Direct</MenuItem>
            <MenuItem value="Indirect">Indirect</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item size={3}>
        <FormControl fullWidth>
          <InputLabel >Science Benefits</InputLabel>
          <Select label="Science Benefits" name='scientificBenefits' value={data.scientificBenefits || ""} onChange={handleChange}  >
            <MenuItem value="Direct">Direct</MenuItem>
            <MenuItem value="Indirect">Indirect</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item size={3}>
        <TextField fullWidth label="Advertisement Details" variant="outlined" name='advertisementBenfits' value={data.advertisementBenfits || ""} onChange={handleChange}/>
      </Grid>
    </Grid>
  );
};

export default BenefitsAndRisks;