import { useRouter } from "next/router";
import React from "react";
import DetailProduct from "../../src/Components/DetailProduct";
import Layout from "../../src/Components/Layout";

const index = () => {
  const {
    pathname,
    query: { id },
  } = useRouter();
  // console.log(id);

  return (
    <Layout>
      {id ? <DetailProduct id={id as string} /> : <h1>Khong co id</h1>}
    </Layout>
  );
};

export default index;
