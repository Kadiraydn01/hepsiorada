import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Logo from "../components/Logo";
import BestSeller from "./BestSeller";
import foto from "../images/foto23.png";
import { AiOutlineHeart, AiFillEye } from "react-icons/ai";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const products = useSelector((state) => state.products.productList);
  const selectedProduct = products.find(
    (product) => product.id === Number(productId)
  );
  console.log("select", selectedProduct);

  if (!selectedProduct) {
    return <div>Ürün bulunamadı.</div>;
  }

  const goBack = () => {
    history.push("/product");
  };

  return (
    <>
      <div className="xl:mt-0 md:mt-60">
        <div>
          <div className="xl:flex xl:items-center xl:px-36 xl:py-10 xl:gap-4 xl:bg-opacity-20 xl:bg-gray-400 md:hidden">
            <h1>Home</h1>
            <SlArrowRight />
            <h2>Shop</h2>
          </div>
          <div className="bg-opacity-20 pl-40 bg-gray-400">
            <Button
              onClick={goBack}
              style={{
                cursor: "pointer",
                backgroundColor: "white",
                color: "black",
              }}
            >
              Back
            </Button>
          </div>
        </div>
        <div className="xl:flex xl:flex-row md:flex md:flex-col px-40 bg-opacity-20 bg-gray-400 gap-8 py-7 h-[600px]">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full active">
              <img
                src={selectedProduct.images[0].url}
                alt={`image-0`}
                className="w-[800px] h-[500px]"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl">
              <h3>{selectedProduct.name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <Rating rating={selectedProduct.rating} />
            </div>
            <div>
              <p className="text-xl font-bold text-cyan-500">
                {selectedProduct.rating}
              </p>
            </div>
            <div className="font-bold text-2xl">
              $ {selectedProduct.price.toFixed(2)}
            </div>
            <div className="flex gap-3">
              <div className="font-bold">Availability :</div>
              <div className="text-blue-400 font-bold">
                {" "}
                {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
              </div>
            </div>
            <div>
              <p className="w-96">{selectedProduct.description}</p>
            </div>
            <hr />
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-sky-400"></div>
              <div className="w-4 h-4 rounded-full bg-emerald-900"></div>
              <div className="w-4 h-4 rounded-full bg-orange-400"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
            <div className="flex gap-4 py-4">
              <button className="bg-blue-400 text-white py-3 px-6 rounded-lg">
                Select Options
              </button>
              <div className="flex gap-4">
                <div className="text-black bg-white rounded-full p-3 justify-center items-center">
                  <AiOutlineHeart />
                </div>
                <div className="text-black bg-white rounded-full p-3">
                  <PiShoppingCartSimpleLight />
                </div>
                <div className="text-black bg-white rounded-full p-3">
                  <AiFillEye />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex px-80 justify-center items-center gap-1 py-6">
          <div className="inline-flex p-6 justify-center items-center gap-2">
            <h5>Description</h5>
          </div>
          <div className="inline-flex p-6 justify-center items-center gap-2">
            <h5>Additional Information</h5>
          </div>
          <div className="inline-flex p-6 justify-center items-center gap-2">
            <h5>Reviews (0)</h5>
          </div>
        </div>
        <hr className="w-4/5 ml-28" />
        <div className="xl:flex xl:flex-row md:flex md:flex-col gap-14 items-center md:w-full px-36 py-6">
          <div className="rounded-lg bg-opacity-20 bg-gray-400 w-80">
            <div>
              <img src={foto} alt="foto" />
            </div>
          </div>

          <div className="flex flex-col w-96 items-start text-start">
            <div>
              <h5 className="font-bold text-2xl">the quick fox jumps over</h5>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sagittis lobortis lacus, vel lacinia odio. Phasellus sodales,
                nisl eget tincidunt consectetur, nunc nisl condimentum nisi, id
                aliquet nunc nulla eget nisi.
              </p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sagittis lobortis lacus, vel lacinia odio. Phasellus sodales,
                nisl eget tincidunt consectetur, nunc nisl condimentum nisi, id
                aliquet nunc nulla eget nisi.
              </p>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sagittis lobortis lacus, vel lacinia odio. Phasellus sodales,
                nisl eget tincidunt consectetur, nunc nisl condimentum nisi, id
                aliquet nunc nulla eget nisi.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="text-xl font-bold">the quick fox jumps over</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-xl font-bold">the quick fox jumps over</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
                <div className="flex items-center gap-4">
                  <SlArrowRight />
                  <p>the quick fox jumps over</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BestSeller />
        <Logo />
      </div>
    </>
  );
};

export default ProductPage;
