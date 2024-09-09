import { ElementType, forwardRef } from "react";
import {
  IClassName,
  PolymorphicComponent,
  PolymorphicProps,
  Ref,
} from "@/interface";
import './styles.scss';

const prefix = "c_checkbox";


export const CheckBox: PolymorphicComponent<IClassName, 'input'>  = forwardRef(<T extends ElementType>({ 
  className,
  ...rest
}: PolymorphicProps<IClassName, T>,
  ref?: Ref<T>
) => {
  
  const itemClasses = [
    prefix,
    className,
  ].filter(Boolean).join(' ');

  return (
    <input
      aria-checked={rest?.checked}
      aria-disabled={rest?.disabled}
      aria-required={rest?.required}
      className={itemClasses}
      ref={ref}
      role="checkbox"
      type="checkbox"
      {...rest} 
    />
  )
});