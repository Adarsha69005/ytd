import * as React from 'react';
import { useState } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import { SettingsOverscanOutlined } from '@mui/icons-material';
import moment from 'moment';
import { differenceInDays } from 'date-fns';




const Home: NextPage = () => {
  const [startdate, setValueStartDate] = useState('');
  const [enddate, setValueEndDate] = useState('');
  const [ytd, setValueYtd] = useState('');
  const [grossincome, setValueGrossIncome] = useState('');
  const [annual, setAnnualValue] = useState(0);
  const [totaldays, setTotalDays] = useState(0);
  const [profit, setAnnualProfit] = useState(0);

  function getData(val) {
    if(val.target.id === 'sd') {
      setValueStartDate(val.target.value)
    }
    if(val.target.id === 'ed') {
      setValueEndDate(val.target.value)
    }
    if(val.target.id === 'ytd') {
      setValueYtd(val.target.value)
    }
    if(val.target.id === 'gi') {
      setValueGrossIncome(val.target.value)
    }
  }

  function calculateAll() {
    let ytd_value = parseFloat(grossincome) - parseFloat(ytd);
    let percent_ytd = (ytd_value / ytd)* 100
    setAnnualProfit(percent_ytd);
    let diffIndays = moment(enddate).diff(moment(startdate), 'days');
    setTotalDays(diffIndays);
  }
  

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField id="sd" value={startdate} label="Started Date (yyyy-mm-dd)" variant="outlined" onChange={getData} />
        <br />
        <TextField id="ed" value={enddate} label="End date (yyyy-mm-dd)" variant="outlined" onChange={getData}  />
        <br />
        <TextField id="ytd" value={ytd} label="Invested money" variant="outlined" onChange={getData} />
        <br />
        <TextField id="gi" value={grossincome} label="Assets money" variant="outlined" onChange={getData} />
        <br />

        <Button variant="contained" onClick={calculateAll}>Calculate</Button>

        <h2>YTD return is {profit} %</h2>
        <h2>Total Days : {totaldays} </h2>
        {/* <h2>Annual Payslip YTD figure : $ {annual}</h2> */}

      </Box>
    </Container>
  );
};

export default Home;
