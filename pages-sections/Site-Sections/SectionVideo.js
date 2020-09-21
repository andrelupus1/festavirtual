import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Video from "components/Video/Video.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/slideStyle.js";

const useStyles = makeStyles(styles);

export default function SectionVideo() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer align="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Nosso Vídeo</h2>
          <Card>
            <Video />
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
