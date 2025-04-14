export const ROUTES = [
  {
    href: "/",
    label: "Trang chủ",
  },
  {
    href: "/product",
    label: "Sản phẩm",
  },
  {
    href: "/order",
    label: "Đơn hàng",
  },
  {
    href: "/about",
    label: "Giới thiệu",
  },
  {
    href: "/contact",
    label: "Liên hệ",
  },
  {
    href: "/blog",
    label: "Tin tức",
  },
  {
    href: "/ho-tro",
    label: "Hỗ trợ",
  },
  {
    href: "/tai-khoan",
    label: "Tài khoản",
  },
  {
    href: "/cart",
    label: "Giỏ hàng",
  },
  {
    href: "/addresses",
    label: "Địa chỉ",
  },
  {
    href: "/auth/sign-in",
    label: "Đăng nhập",
  },
  {
    href: "/auth/sign-up",
    label: "Đăng ký",
  },
];

export type OrderStatusEN = "cancelled" | "pending" | "shipped" | "delivered";

export type OrderStatusVN =
  | "Đã hủy"
  | "Đang chờ xử lý"
  | "Đang giao hàng"
  | "Đã giao hàng";
