import app from "./src/app";

const stasrtServer = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

stasrtServer();
