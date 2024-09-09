import { IClassName } from "../className";

interface ISelectData {
  id: number;
  value: string
}

export interface ISelect
  extends IClassName,
  React.SelectHTMLAttributes<HTMLSelectElement> {
  fullwidth?: boolean;
  data: ISelectData[];
}
