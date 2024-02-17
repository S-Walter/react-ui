import React from "react";
import "../scss/Home.scss";

import Grid from "@mui/material/Grid"; // Grid version 2
import { Avatar, Box, Divider, Paper } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Tesla from "../assets/logos/tesla.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock Data
const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 9800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 3800,
  },
  {
    name: "Page G",
    pv: 4300,
  },
  {
    name: "Page G",
    pv: 4800,
  },
  {
    name: "Page G",
    pv: 2300,
  },
  {
    name: "Page G",
    pv: 1300,
  },
  {
    name: "Page G",
    pv: 1500,
  },
  {
    name: "Page G",
    pv: 2300,
  },
  {
    name: "Page G",
    pv: 2000,
  },
  {
    name: "Page G",
    pv: 2200,
  },
  {
    name: "Page G",
    pv: 2300,
  },
  {
    name: "Page G",
    pv: 3300,
  },
  {
    name: "Page G",
    pv: 4300,
  },
  {
    name: "Page G",
    pv: 5400,
  },
  {
    name: "Page G",
    pv: 6400,
  },
  {
    name: "Page G",
    pv: 8700,
  },
  {
    name: "Page G",
    pv: 9400,
  },
];

function StatCard({ logo, data, name, code, progress }) {
  let arrow;
  if (progress > 0) {
    arrow = <ArrowUpwardIcon sx={{ color: "#95FF9F" }} fontSize="smaller" />;
  } else {
    arrow = <ArrowDownwardIcon sx={{ color: "#FF8787" }} fontSize="smaller" />;
  }
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Paper className="statCard">
          <Grid container p={1}>
            <Grid item xs={3}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  container
                  justifyContent="center"
                  alignContent="center"
                >
                  <div className="compLogo">
                    <img alt="Tesla" src={logo} />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  pt={1}
                  container
                  justifyContent="center"
                  alignContent="center"
                >
                  <div className="stockTitle">{name}</div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  justifyContent="center"
                  alignContent="center"
                >
                  <div className="stockCode">{code}</div>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={1}
              container
              justifyContent="center"
              alignContent="center"
            >
              <Divider
                className="gridDivider"
                orientation="vertical"
                variant="middle"
              />
            </Grid>

            <Grid item xs={8}>
              <ResponsiveContainer width="100%" aspect="2">
                <LineChart width={300} height={100} data={data}>
                  <Line
                    type="linear"
                    dataKey="pv"
                    stroke="#6FD0FA"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Grid>

            <Grid item xs={12} container justifyContent="right">
              <Grid item xs={1}>
                {arrow}
              </Grid>
              <Grid item xs={2} container alignContent="center">
                <div className="valuePointChange">{progress}%</div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

// Stat Row
function StatRow({ logo, data, name, code, progress, price }) {
  let arrow;
  if (progress > 0) {
    arrow = <ArrowUpwardIcon sx={{ color: "#95FF9F" }} fontSize="smaller" />;
  } else {
    arrow = <ArrowDownwardIcon sx={{ color: "#FF8787" }} fontSize="smaller" />;
  }
  return (
    <>
      <Grid item xs={12}>
        <Paper className="statCard">
          <Grid container p={1}>
            <Grid item xs={1}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  container
                  justifyContent="center"
                  alignContent="center"
                >
                  <div className="compLogo">
                    <img alt="Tesla" src={logo} />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={1}
              container
              justifyContent="center"
              alignContent="center"
            >
              <Divider
                className="gridDivider"
                orientation="vertical"
                variant="middle"
              />
            </Grid>

            <Grid
              sx={{ color: "#9EFFFD", fontSize: "1.4rem" }}
              item
              xs={10}
              container
              justifyContent="right"
            >
              <Grid xs={6} item container>
                <Grid item xs={12} pt={1} container alignContent="center">
                  <div className="stockTitleL">{name}</div>
                </Grid>
                <Grid item xs={12} container alignContent="center">
                  <div className="stockCodeL">{code}</div>
                </Grid>
              </Grid>

              <Grid item xs={6} container justifyContent="right">
                TShs. {price}
              </Grid>

              <Grid item xs={12} container justifyContent="right">
                <Grid item xs={1} container alignContent="center">
                  {arrow}
                </Grid>
                <Grid item xs={2} container alignContent="center">
                  <div className="valuePointChange">{progress}%</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
////////

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Popular Companies section */}
      <Grid
        className="bigTitle"
        container
        spacing={2}
        justifyContent="center"
        p={2}
      >
        Popular Companies
      </Grid>
      <Grid container spacing={1} justifyContent="center">
        <StatCard
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
        />
        <StatCard
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
        />
        <StatCard
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={-5.8}
        />
      </Grid>

      {/* Stat Rows */}
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        sx={{ color: "white", fontSize: "1.5rem" }}
        pt={4}
      >
        Market trends
      </Grid>
      <Grid container spacing={2} justifyContent="center" p={2}>
        <StatRow
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
          price={82}
        />
        <StatRow
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
          price={82}
        />
        <StatRow
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
          price={82}
        />
        <StatRow
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
          price={82}
        />
        <StatRow
          name="TESLA"
          code="TSLA"
          logo={Tesla}
          data={data}
          progress={5.8}
          price={82}
        />
      </Grid>
    </Box>
  );
}
