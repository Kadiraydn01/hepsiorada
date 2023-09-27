import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Logo from "../Logo";

const ProductPage = () => {
  return (
    <>
      <div>
        <div className="flex items-center">
          <h1>Home</h1>
          <SlArrowRight />
          <h2>Shop</h2>
        </div>
      </div>
      <div>
        <div>sol resim</div>
        <div>sağ alan</div>
      </div>
      <div>
        <div>
          <h5>Description</h5>
          <h5>Additional Information</h5>
          <h5>Reviews (0)</h5>
        </div>
      </div>
      <div>
        <div>foto</div>
        <div>
          <div>
            <h5>the quick fox jumps over</h5>
          </div>
          <div>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis lobortis lacus, vel lacinia odio. Phasellus sodales, nisl
              eget tincidunt consectetur, nunc nisl condimentum nisi, id aliquet
              nunc nulla eget nisi. Phasellus sodales, nisl eget tincidunt
              consectetur, nunc nisl condimentum nisi, id aliquet nunc nulla
              eget nisi.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis lobortis lacus, vel lacinia odio. Phasellus sodales, nisl
              eget tincidunt consectetur, nunc nisl condimentum nisi, id aliquet
              nunc nulla eget nisi. Phasellus sodales, nisl eget tincidunt
              consectetur, nunc nisl eget tincidunt consectetur, nunc nisl
              condimentum nisi,id aliquet nunc nulla eget nisi.
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis lobortis lacus, vel lacinia odio. Phasellus sodales, nisl
              eget tincidunt consectetur, nunc nisl condimentum nisi, id aliquet
              nunc nulla eget nisi. Phasellus sodales, nisl eget tincidunt
              consectetur, nunc nisl eget tincidunt consectetur, nunc nisl
              condimentum nisi,id aliquet nunc nulla eget nisi.
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>the quick fox jumps over</div>
            <div>
              <div>maddeler</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Logo />
    </>
  );
};

export default ProductPage;
