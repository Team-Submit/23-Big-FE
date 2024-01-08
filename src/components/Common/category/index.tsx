import { Text } from "@/src/styles/text";
import * as S from "./style";
import { CatrgoryIcons } from "@/src/assets";

interface CategoryPropsType {
  category: categoryType;
  success?: boolean;
}

export const Category = ({ category, success = true }: CategoryPropsType) => {
  return (
    <S.Container success={success}>
      {CatrgoryIcons[category]}
      <Text fontStyle="BodySemiBold16">{category}</Text>
    </S.Container>
  );
};
