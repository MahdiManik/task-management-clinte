import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GrowUp | Home</title>
      </Helmet>

      <Container>
        <Banner></Banner>
      </Container>
    </div>
  );
};

export default Home;
