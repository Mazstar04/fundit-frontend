import { IconType } from "react-icons";

export default interface INavOption {
  title: string;
  description: string;
  icon: IconType;
  route: string;
  tabs: string[];
}
