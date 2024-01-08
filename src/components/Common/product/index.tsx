import * as S from "./style";
import { Text } from "@/src/styles/text";
import { Category } from "../category";
import { MoreIcon, StarIcon } from "@/src/assets";
import { useState } from "react";

export const Product = ({
  image,
  title,
  price,
  success,
  category,
  id,

  place,
  personnelAll,
  personnelNow,
  type = "DEFAULT",
  review,
}: ProductComponentType) => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => setShowModal(!showModal);

  return (
    <S.Container>
      <img src={image} />
      {type === "COMPLETED" && review ? (
        <S.EctContainer onClick={onShowModal}>
          <StarIcon />
          {/* // Todo : 거래 후기 남기는 모달 띄워주기  */}
        </S.EctContainer>
      ) : (
        type === "MY" && (
          <S.EctContainer onClick={onShowModal}>
            <MoreIcon />
            {/* // Todo : 수정, 삭제, 목록보기/거래마치기 드롭다운 보여주기  */}
            {showModal && <S.MoreContainer>sad</S.MoreContainer>}

          </S.EctContainer>
        )
      )}
      <S.DescriptionContainer success={success}>
        <Category category={category} success={success} />
        <Text fontStyle="BodySemiBold16">{title}</Text>
        <S.PricePlaceContainer success={success}>
          <Text fontStyle="HeadingSemiBold18">
            {price.toLocaleString("ko-KR")} 원
          </Text>
          {success ? (
            <p>거래 완료</p>
          ) : place ? (
            <p>{place}</p>
          ) : (
            <p>
              {personnelNow}/{personnelAll} 명
            </p>
          )}
        </S.PricePlaceContainer>
      </S.DescriptionContainer>
    </S.Container>
  );
};
