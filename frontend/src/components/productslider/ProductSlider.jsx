import React from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { ProdData } from "../../pages/Product page/ProductPage";
import { GetProductsData } from "../../redux/actions/action";
const Logo =
  "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg";

export const ProductSlider = () => {
  const ProductsData = useSelector((state) => state.Products.ProductsData);
  console.log(ProductsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProductsData());
  }, [dispatch]);

  const breakPoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 500, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5, itemsToScroll: 5 },
  ];

  return (
    <div style={{ margin: "1% 7%" }}>
      <Carousel breakPoints={breakPoints}>
        {ProductsData.map((item) => (
          <ProdData
            Id={item._id}
            image={item.Image_url}
            name={item.Title}
            kg={item.kg}
            sprice={item.Price}
            mrp={item.Price}
            Brand={item.Brand}
            Logo={Logo}
          />
        ))}
      </Carousel>
    </div>
  );
};
