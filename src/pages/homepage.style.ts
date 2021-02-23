import { makeStyles } from "@material-ui/core/styles";

const homepageStyle = makeStyles((theme) => ({
  mainContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardView: {
    padding: theme.spacing(8, 0, 6),
    display: "flex",
    justifyContent: "center",
  },
}));

export default homepageStyle;
