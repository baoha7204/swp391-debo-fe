import { Grid } from "@mui/material";

export type CardList<T extends object> = {
  Card: React.ComponentType<T>;
  cards: T[];
};

const CardList = <T extends object>({ cards, Card }: CardList<T>) => {
  return (
    <Grid container spacing={5}>
      {cards.map((card) => (
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
