import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-10">
      {title && (
        <Cover
          img={coverImg}
          title={title}
          description="Would you like to try a dish?"
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-4 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-2">
          Order Now 
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
