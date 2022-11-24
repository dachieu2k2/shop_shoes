import React from "react";
// import { Row, Typography, Image, Col } from "antd";
import Link from "next/link";

// const { Text } = Typography;

const Footer = () => {
  return (
    <div className="bg-black font-roboto text-white pb-6 px-14">
      <div className="container mx-auto mt-5">
        <div className="flex flex-wrap">
          <div className="basis-full md:basis-4/12">
            <div className="flex flex-col gap-3 mt-10">
              <div className="">
                <p className="text-sm">LIÊN HỆ ZALO : 0967585135</p>
              </div>
              <div>
                <p className="text-sm">
                  Địa chỉ: Số 1D Ngõ 24 Đặng Tiến Đông, Hà Nội, Vietnam
                </p>
              </div>
              <div>
                <p className="text-sm">Điện thoại: 099999999</p>
              </div>
              <img
                src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/logo_bct.png?1663899591926"
                width={200}
              ></img>
            </div>
          </div>
          <div className="basis-full md:basis-2/12 mt-10">
            <p>THÔNG TIN</p>
            <ul>
              {[
                "Trang chủ",
                "Giới thiệu",
                "Sản phẩm",
                "Khuyến mãi",
                "Tin tức",
                "Liên hệ",
              ].map((value, index) => (
                <li key={index} className="pt-2 text-xs">
                  {" "}
                  {`>  `}
                  <Link href={"/"}>{value}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-full md:basis-3/12 mt-10">
            <p>HƯỚNG DẪN & CHÍNH SÁCH</p>
            <ul>
              {[
                "Hướng dẫn mua hàng",
                "Thẻ thành viên",
                "Chính sách đổi trả & hoàn tiền",
                "Chính sách thanh toán",
                "Chính sách vận chuyển",
                "Chính sách bảo mật",
              ].map((value, index) => (
                <li key={index} className="pt-2 text-xs">
                  {" "}
                  {`>  `}
                  <Link href={"/"}>{value}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-full md:basis-3/12 mt-10">
            <div className="flex flex-col gap-3">
              <p>ĐỊA CHỈ</p>
              <img
                src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/slider_1.jpg?1663899591926"
                width={400}
              ></img>
            </div>
          </div>
        </div>

        {/* <Row>
          <Col md={8}>
            <div className="flex flex-col gap-3">
              <div>
                <Text className="color-white">LIÊN HỆ ZALO : 0967585135</Text>
              </div>
              <div>
                <Text className="color-white">
                  Địa chỉ: Số 1D Ngõ 24 Đặng Tiến Đông, Hà Nội, Vietnam Điện
                  thoại:
                </Text>
              </div>
              <Image
                src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/logo_bct.png?1663899591926"
                width={200}
              ></Image>
            </div>
          </Col>
          <Col md={8}>
            <ul className="color-white p-3">
              THÔNG TIN
              <li className="px-1">
                <Link href={"/"}> {">  "}Trang chủ</Link>
              </li>
              <li className="px-1">
                <Link href={"/"}> {">  "}Giới thiệu</Link>
              </li>
              <li className="px-1">
                <Link href={"/"}> {">  "}Sản phẩm</Link>
              </li>
              <li className="px-1">
                <Link href={"/"}> {">  "}Khuyến mãi</Link>
              </li>
              <li className="px-1">
                <Link href={"/"}> {">  "}Tin tức</Link>
              </li>
              <li className="px-1">
                <Link href={"/"}> {">  "}Liên hệ</Link>
              </li>
            </ul>
          </Col>
          <Col md={8}>
            <div className="flex flex-col">
              <div>
                <Text className="color-white">LIÊN HỆ ZALO : 0967585135</Text>
              </div>
              <div>
                <Text className="color-white">
                  Địa chỉ: Số 1D Ngõ 24 Đặng Tiến Đông, Hà Nội, Vietnam Điện
                  thoại:
                </Text>
              </div>
              <Image src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/logo_bct.png?1663899591926"></Image>
            </div>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default Footer;
