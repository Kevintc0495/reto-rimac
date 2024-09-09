import { forwardRef } from "react";
import {
  IInput,
  PolymorphicComponent,
  PolymorphicProps,
  Ref,
} from "@/interface";
import "./styles.scss";

const prefix = "c-input";

export const Input: PolymorphicComponent<IInput, "input"> = forwardRef(
  <T extends React.ElementType>(
    { className, fullwidth, ...props }: PolymorphicProps<IInput, T>,
    ref?: Ref<T>,
  ) => {

    const itemClasses = [prefix, className, fullwidth && `${prefix}--fullwidth`]
      .filter(Boolean)
      .join(" ");

    return <input className={itemClasses} {...props} ref={ref} />;
  },
);
