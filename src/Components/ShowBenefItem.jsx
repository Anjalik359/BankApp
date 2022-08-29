import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const ShowBenefItem = ({ item }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              {item.accno}
            </Grid>
            <Grid item xs={2}>
              {item.bankname}
            </Grid>
            <Grid item xs={2}>
              {item.branchname}
            </Grid>
            <Grid item xs={2}>
              {item.amnt}
            </Grid>
            <Grid item xs={2}>
              {item.bname}
            </Grid>
            <Grid item xs={2}>
              {item.isActive}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
