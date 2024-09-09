import { forwardRef } from "react";
import {
  IBarProgress,
  PolymorphicComponent,
  PolymorphicProps,
  Ref,
} from "@/interface";
import './styles.scss'

const prefix = "c_bar_progress";

export const BarProgress: PolymorphicComponent<IBarProgress, "progress"> = forwardRef(
  <T extends React.ElementType>(
    {
      className,
      max = 100,
      value,
      ...rest
    }: PolymorphicProps<IBarProgress, T>,
    ref: Ref<T>
  ) => {

    const completeClass = value >= max ? `${prefix}--complete` : '';

    const itemClasses = [prefix, className, completeClass]
      .filter(Boolean)
      .join(" ");

    return (
      <progress 
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={value}
        className={itemClasses}
        max={max}
        ref={ref}
        value={value}
        {...rest}
      />
    );
});

