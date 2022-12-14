import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/header";
import LootboxCarousel from "../components/lootboxcarousel";
import AnimatedPage from "../components/AnimatedPage";
export default function Home() {
  return (
    <AnimatedPage>
      <Header />
      <div className="container">
        <Head>
          <title>Prime Nine - Calculator</title>
          <meta name="description" content="Prime Nine" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="calculator-page"
        >
          <Grid container spacing={2}>
            <Grid className="calculator-all" xs={12}>
              <div className="header">
                <h1>Calculator</h1>
                <img src="/image/div.svg" className="divider" />
                <h3 style={{maxWidth:"1000px"}}>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English.
                </h3>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="calculator-items"
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <div className="pn-input">
                <h2>Amount of PFP’s held</h2>
                <input type="text" name="name" className="standard-input" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="calculator-items"
        >
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <div className="pn-input">
                <h2>Tokens Airdroped</h2>
                <input type="text" name="name" className="standard-input" />
              </div>
            </Grid>
            <Grid xs={12} md={6} >
              <div className="pn-input">
                <h2>Fragments Generated</h2>
                <input type="text" name="name" className="standard-input" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="calculator-items"
        >
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <div className="pn-input">
                <h2>Tokens Airdroped</h2>
                <input type="text" name="name" className="standard-input" />
              </div>
            </Grid>
            <Grid xs={12} md={6}>
              <div className="pn-input">
                <h2>Fragments Generated</h2>
                <input type="text" name="name" className="standard-input" />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="calculator-items"
        >
          <Grid container spacing={2}>
            <Grid xs={12}>
              <div className="pn-input">
                <h2>Amount of PFP’s held</h2>
                <input type="text" name="name" className="standard-input" style={{marginBottom:"30px"}}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <img
        src="/image/paragons-picture.png"
        width="25%"
        className="paragon-left"
      />
      <img
        src="/image/echoes-picture.png"
        width="25%"
        className="echo-right"
      />
    </AnimatedPage>
  );
}
