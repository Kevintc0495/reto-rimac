import { ElementType, forwardRef } from 'react';
import {
  IClassName,
  PolymorphicComponent,
  PolymorphicProps,
  Ref,
} from "@/interface";
import './styles.scss';

const prefix = "c_radio";

export const Radio: PolymorphicComponent<IClassName, 'input'> = forwardRef(<T extends ElementType>({
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
      className={itemClasses} 
      type="radio"
      role="radio"
      aria-checked={rest?.checked}
      aria-required={rest?.required}
      aria-disabled={rest?.disabled}
      {...rest}
      ref={ref}
    />
  )
})