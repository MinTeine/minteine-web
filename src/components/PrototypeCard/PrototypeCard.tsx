import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import prototypeCardStyle from "./prototypeCard.style";

interface IPrototypeCard {
  image?: string;
  title?: string;
  text?: string;
}

const PrototypeCard: React.FC<IPrototypeCard> = ({ image, title, text }) => {
  const classes = prototypeCardStyle();
  return (
    <Paper className={classes.card}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.cardHeader}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.cardText}
      >
        {text}
      </Typography>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
    </Paper>
  );
};

export default PrototypeCard;
