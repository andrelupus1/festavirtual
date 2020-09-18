import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
// Sections for this page Site

// Sections for this page - Demo
import ProductSection from "pages-sections/Site-Sections/information.js";
import TeamSection from "pages-sections/Site-Sections/Depoiments.js";
import WorkSection from "pages-sections/Site-Sections/Contact.js";
// import Map from "pages-sections/Site-Sections/Map.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function SitePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Casamento de Júlia e Marcos"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/julia-e-marcos.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Conheça a nossa linda História.</h1>
              <h4>
                Iremos nos casar e queremos compartilhar um pouco da nossa História de amor,
                esperamos que você possa fazer parte dela, contribuindo com uma mensagem ou um presente.
                Desde já agradecemos a sua visita no nosso site.
              <Favorite className={classes.icon} />{" "}
              </h4>
                <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
