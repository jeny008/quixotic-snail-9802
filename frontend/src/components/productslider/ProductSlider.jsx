import { Box, Progress } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProdData } from "../../pages/Product page/ProductPage";
import { GetProductsData } from "../../redux/actions/action";
const Logo =
  "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg";

export const ProductSlider = () => {
  const ProductsData = useSelector((state) => state.Products.ProductsData);
  console.log(ProductsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div style={{ margin: "1% 7%", border: "solid gainsboro 1px" }}>
      {ProductsData.length == 0 ? (
        <Progress size="lg" isIndeterminate />
      ) : (
        <Carousel breakPoints={breakPoints}>
          {ProductsData.map((item) => (
            <Box
              onClick={() => navigate(`/produts/productDetails/${item._id}`)}
              style={{ margin: "0px 3px" }}
            >
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
            </Box>
          ))}
        </Carousel>
      )}
    </div>
  );
};
