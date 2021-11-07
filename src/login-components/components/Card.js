import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  card: {
    minWidth: 220,
    maxWidth: 220,
    minHeight: 320,
    borderRadius: 10,
    padding: 5,
  },
  content: {
    padding: 5,
  },
  media: {
    padding: 10,
    borderRadius: 10,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginBottom: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    paddingTop: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
    textAlign: "left",
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800],
    },
  },
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <CardMedia
          component="img"
          alt={props.name}
          className={classes.media}
          height="140"
          image={props.picture}
          title={props.name}
        />
        <br />
        <Typography className={classes.title} color="textSecondary">
          {props.name}
        </Typography>
        <br />
        <Typography className={classes.pos} color="textSecondary">
          <div>{props.address}</div>
          {props.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
