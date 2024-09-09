import { ILayout } from "@/interface";
import { Header } from "@/components";

export const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};
