import Book from "./icons/category/book";
import Car from "./icons/category/car";
import Clothes from "./icons/category/clothes";
import Devices from "./icons/category/devices";
import Food from "./icons/category/food";
import Life from "./icons/category/life";
import MoreCategory from "./icons/category/more";
import Music from "./icons/category/music";

import Error from "./icons/error";
import EyeClose from "./icons/eyeClose";
import EyeOpen from "./icons/eyeOpen";
import More from "./icons/more";
import Star from "./icons/star";

export const EyeCloseIcon = () => <EyeClose />;
export const EyeOpenIcon = () => <EyeOpen />;
export const ErrorIcon = () => <Error />;
export const StarIcon = () => <Star />;
export const MoreIcon = () => <More />;

export const CatrgoryIcons = {
  전자기기: <Devices />,
  음악: <Music />,
  책: <Book />,
  차량: <Car />,
  "옷⋅신발": <Clothes />,
  식품: <Food />,
  생활: <Life />,
  기타: <MoreCategory />,
};
