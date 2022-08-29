import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import axios from "axios";

export const AddBank = () => {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [city, setCity] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleCancel = () => {
    setName("");
    setBranch("");
    setCity("");
  };
  const handlesubmit = async () => {
    const url = "http://localhost:4040/api/addbank";
    const payload = {
      name,
      branch,
      city,
    };
    const result = await axios.post(url, payload);
    if (result.status === 200) {
      setIsSuccess(true);
      setName("");
      setBranch("");
      setCity("");
    }
  };
  useEffect(() => {
    setIsValid(name.length >= 3 && branch.length >= 3 && city.length >= 3);
  }, [name, branch, city]);

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              Bank Name:
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Enroll Bank Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={4}>
              Bank Branch Name:
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Enter Branch"
                variant="outlined"
                value={branch}
                onChange={(e) => setBranch(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid item xs={4}>
              City Name:
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Enter City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value.toUpperCase())}
              />
            </Grid>
            <Grid xs={4}></Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                disabled={!isValid}
                onClick={handlesubmit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
            <Grid xs={12}>
              {isSuccess && (
                <Alert severity="success">Bank is successfully added!!!</Alert>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
