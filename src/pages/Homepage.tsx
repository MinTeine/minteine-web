import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import homepageStyle from "./homepage.style";
import PrototypeCard from "../components/PrototypeCard/PrototypeCard";
import prototype1 from "../img/p1-1.png";
import prototype2 from "../img/p1-2.png";
import prototype3 from "../img/p1-3.png";

const Homepage: React.FC = () => {
  const classes = homepageStyle();
  return (
    <div>
      <Container maxWidth="sm" component="main" className={classes.mainContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Hva er MinTeine?
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          MinTeine er en applikasjon som lar deg lagre lokasjonen til din teine
          i et sjøkart for å enkelt finne igjen din teine eller melde denne
          savnet hvis du minster den.
        </Typography>
        <div className={classes.cardView}>
          <PrototypeCard
            image={prototype1}
            title={"Forside"}
            text={"Oversikt med nyttige widgets"}
          />
          <PrototypeCard
            image={prototype2}
            title={"Kart"}
            text={"Sjøkart med oversikt over egne teiner"}
          />
          <PrototypeCard
            image={prototype3}
            title={"Teine liste"}
            text={
              "Listevisning med oversikt over teiner, dato satt ut eller tømt"
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
