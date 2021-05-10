import React from "react";
import BabyDove from "../../images/products/baby/baby-dove.jpg";
import Cerelac from "../../images/products/baby/cerelac.jpg";
import Mamy from "../../images/products/baby/mamy.jpg";
import Pampers from "../../images/products/baby/pampers.jpg";
import RedWipes from "../../images/products/baby/red-wipes.jpg";
import Shampoo from "../../images/products/baby/shampoo.jpg";
import Wipes from "../../images/products/baby/wipes.jpg";
import Bread from "../../images/products/bakery-cakes-dairy/bread.jpg";
import Paneer from "../../images/products/bakery-cakes-dairy/paneer.jpg";
import YogurtBlue from "../../images/products/bakery-cakes-dairy/yogurt-blue.jpg";
import YogurtRed from "../../images/products/bakery-cakes-dairy/yogurt-red.jpg";
import Closeup from "../../images/products/beauty-hygiene/closeup.jpg";
import Dove from "../../images/products/beauty-hygiene/dove.jpg";
import Listerine from "../../images/products/beauty-hygiene/listerine.jpg";
import ShampooBeauty from "../../images/products/beauty-hygiene/shampoo.jpg";
import Tissues from "../../images/products/beauty-hygiene/tissues.jpg";
import Bournvita from "../../images/products/beverages/bournvita.jpg";
import Coke from "../../images/products/beverages/coke.jpg";
import RedLabel from "../../images/products/beverages/red-label.jpg";
import TataTea from "../../images/products/beverages/tata-tea.jpg";
import Apple from "../../images/products/fruit-n-veg/apple.jpg";
import CapsicumGreen from "../../images/products/fruit-n-veg/capsicum-green.jpg";
import KiwiGreen from "../../images/products/fruit-n-veg/kiwi-green.jpg";
import Pomegrante from "../../images/products/fruit-n-veg/pomegrante.jpg";
import Tomato from "../../images/products/fruit-n-veg/tomato.jpg";

let data = {
  "5b6c758301a7c38429530899": BabyDove,
  "5b6c753c01a7c38429530898": Cerelac,
  "5b6c74d101a7c38429530896": Mamy,
  "5b6c746801a7c38429530895": Pampers,
  "5b6c761801a7c3842953089b": RedWipes,
  "5b6c75e101a7c3842953089a": Shampoo,
  "5b6c750701a7c38429530897": Wipes,
  "5b6c6d3201a7c38429530888": Bread,
  "5b6c6d6201a7c38429530889": Paneer,
  "5b6c6d9e01a7c3842953088a": YogurtBlue,
  "5b6c6dd701a7c3842953088b": YogurtRed,
  "5b6c727801a7c38429530894": Closeup,
  "5b6c71e601a7c38429530892": Dove,
  "5b6c715f01a7c38429530890": Listerine,
  "5b6c71a101a7c38429530891": ShampooBeauty,
  "5b6c721d01a7c38429530893": Tissues,
  "5b6c6fbf01a7c3842953088e": Bournvita,
  "5b6c6fed01a7c3842953088f": Coke,
  "5b6c6f8301a7c3842953088d": RedLabel,
  "5b6c6f4a01a7c3842953088c": TataTea,
  "5b6c6aeb01a7c38429530884": Apple,
  "5b6c6bdc01a7c38429530886": CapsicumGreen,
  "5b6c6a7f01a7c38429530883": KiwiGreen,
  "5b6c6b7001a7c38429530885": Pomegrante,
  "5b6c6c1801a7c38429530887": Tomato
};

export const getImage = id => {
  return data[id];
};
