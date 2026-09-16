import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineDocumentText, HiUsers } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

const generateSummaries = ({
  productsLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productsLength,
      icon: BiShoppingBag,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      value: usersLength,
      icon: HiUsers,
    },
    {
      id: 3,
      title: "تعداد تیکت ها",
      value: ticketsLength,
      icon: HiOutlineDocumentText,
    },
    {
      id: 4,
      title: "تعداد مدیران",
      value: adminsLength,
      icon: RiAdminFill,
    },
  ];
};
const generateData = ({
  productsLength,
  usersLength,
  ticketsLength,
  adminsLength,
}) => {
  return [
    { name: "تعداد محصولات", value: productsLength },
    { name: "تعداد کاربران", value: usersLength },
    { name: "تعداد مدیران", value: adminsLength },
    { name: "تعداد تیکت‌ها", value: ticketsLength },
  ];
};
export { generateSummaries, generateData };
