import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import MenuStyle from "../../Components/MenuStyle/MenuStyle";

const MenuCategory = ({ items, title }) => {
	//console.log(title);
  return (
    <div className="mb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items?.map((item) => (
            <MenuStyle key={item._id} item={item}></MenuStyle>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to={`/order/${title}`}>
            <button className="btn-outline btn-ghost border-b-4  text-black btn mt-4 rounded">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MenuCategory;
