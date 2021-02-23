import { makeStyles } from "@material-ui/core/styles";

const prototypeCardStyle = makeStyles((theme) => ({
  card: {
    margin: "15px",
  },
  cardHeader: {
    margin: theme.spacing(2, 0, 2, 2),
  },
  cardText: {
    margin: theme.spacing(2, 0, 2, 2),
  },
  image: {
    display: "flex",
    flexDirection: "column-reverse",
  },
}));

export default prototypeCardStyle;
