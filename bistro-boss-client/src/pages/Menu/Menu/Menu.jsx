import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import dessartImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <section>
        <Cover
          img={coverImg}
          title="our menu"
          description="Would you like to try a dish?"
        ></Cover>
        <SectionTitle
          subHeading="Don't miss"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        {/* offered section */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessart section */}
        <MenuCategory items={dessert} title={"dessert"} coverImg={dessartImg}></MenuCategory>
        {/* pizza section */}
        <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
         {/* pizza section */}
         <MenuCategory items={salad} title={"salads"} coverImg={saladImg}></MenuCategory>
          {/* soups section */}
        <MenuCategory items={soup} title={"soups"} coverImg={soupImg}></MenuCategory>
        
      </section>
    </div>
  );
};

export default Menu;
