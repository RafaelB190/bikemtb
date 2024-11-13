import { useParams } from "react-router-dom";
import bhAtom from "../assets/images/mtb/bh-atom.jpeg";
import bhLynx from "../assets/images/mtb/bh-lynx.jpeg";
import bhUltimate from "../assets/images/mtb/bh-ultimate.jpeg";
import scottAspect from "../assets/images/mtb/scott-aspect.jpeg";
import scottScale from "../assets/images/mtb/scott-scale.jpeg";
import scottSpark from "../assets/images/mtb/scott-spark.jpeg";
import slpR5 from "../assets/images/mtb/slp-r5.jpeg";
import slpS6 from "../assets/images/mtb/slp-s6.jpeg";
import slpX3 from "../assets/images/mtb/slp-x3.jpeg";
import trekMarlin from "../assets/images/mtb/trek-marlin.jpeg";
import trekProcaliber from "../assets/images/mtb/trek-procaliber.jpeg";
import trekXCaliber from "../assets/images/mtb/trek-x-caliber.jpeg";
import vairoStorm from "../assets/images/mtb/vairo-storm.jpeg";
import vairoX3 from "../assets/images/mtb/vairo-x3.jpeg";
import vairoXr from "../assets/images/mtb/vairo-xr.jpeg";
import venzoNitro from "../assets/images/mtb/venzo-nitro.jpeg";
import venzoRaptor from "../assets/images/mtb/venzo-raptor.jpeg";
import venzoRidge from "../assets/images/mtb/venzo-ridge.jpg";
import ProductCard from "./ProductCard";

const modelsByBrand = {
  bh: [
    { model: "Atom", price: 600, image: bhAtom },
    { model: "Lynx", price: 650, image: bhLynx },
    { model: "Ultimate", price: 700, image: bhUltimate },
  ],
  scott: [
    { model: "Aspect", price: 750, image: scottAspect },
    { model: "Scale", price: 800, image: scottScale },
    { model: "Spark", price: 850, image: scottSpark },
  ],
  slp: [
    { model: "R5", price: 500, image: slpR5 },
    { model: "S6", price: 550, image: slpS6 },
    { model: "X3", price: 600, image: slpX3 },
  ],
  trek: [
    { model: "Marlin", price: 700, image: trekMarlin },
    { model: "X-Caliber", price: 750, image: trekXCaliber },
    { model: "Procaliber", price: 800, image: trekProcaliber },
  ],
  vairo: [
    { model: "Storm", price: 500, image: vairoStorm },
    { model: "X3", price: 550, image: vairoX3 },
    { model: "XR", price: 600, image: vairoXr },
  ],
  venzo: [
    { model: "Nitro", price: 550, image: venzoNitro },
    { model: "Raptor", price: 600, image: venzoRaptor },
    { model: "Ridge", price: 650, image: venzoRidge },
  ],
};

const BrandDetail = () => {
  const { brandName } = useParams();
  const brandModels = modelsByBrand[brandName.toLowerCase()] || [];

  return (
    <section>
      <h2>{brandName.toUpperCase()}</h2>
      <div className="product-grid">
        {brandModels.map((model, index) => (
          <ProductCard key={index} brand={brandName} {...model} />
        ))}
      </div>
    </section>
  );
};

export default BrandDetail;
