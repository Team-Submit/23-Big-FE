/** 거래물품 기본 타입 */
type BasicProductType = {
  image: string; // 이미지
  category: categoryType; // 카테고리
  title: string; // 제목
  price: number; // 가격
  success: boolean; // 거래완료 여부
  id: string; // 상품 아이디
};

/** 중고거래 타입 */
type UsedProductType = BasicProductType & {
  place: string; // 거래 장소
};

/** 공구거래 타입 */
type GroupProductType = BasicProductType & {
  personnelAll: number; // 모집 인원
  personnelNow: number; // 현재 인원
};

/** 거래물품 컴포넌트 타입  */
type ProductComponentType = BasicProductType & {
  personnelAll?: number; // 모집 인원
  personnelNow?: number; // 현재 인원
  place?: string; // 거래 장소
  type?: "DEFAULT" | "MY" | "COMPLETED"; // 거래 물품 상태 타입  default: 기본, my: 내가 올린 물건, compleyted:거래 완료한 물품
  moreOnClick?: () => void; // 더보기 클릭시
  review?: boolean; // 리뷰 작성 여부
};
