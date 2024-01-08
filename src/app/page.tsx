"use client";

import styled from "styled-components";
import { Product } from "../components/common/product";

type reviewProduct = UsedProductType & {
  review: boolean; // 리뷰 남긴적있으면 true, 아니면 false
};
export default function Home() {
  const data: reviewProduct = {
    image:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    category: "전자기기",
    title: "이거 사셈",
    price: 2409870,
    place: "창조실이다",
    success: false,
    id: "1",
    review: false,
  };
  const data2: reviewProduct = {
    image:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    category: "전자기기",
    title: "이거 사셈",
    price: 2409870,
    place: "창조실이다",
    success: true,
    id: "1",
    review: true,
  };
  const data1: GroupProductType = {
    image:
      "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    category: "식품",
    title: "이거 사셈",
    price: 1230,
    personnelAll: 4,
    personnelNow: 2,
    success: true,
    id: "1",
  };
  return (
    <Container>
      <Product {...data} type="COMPLETED" />
      <Product {...data1} type="MY"/>
      <Product {...data2} type="COMPLETED" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
