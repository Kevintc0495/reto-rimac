import { ISelect } from "../../interface";
import "./styles.scss";

const prefix = "c_select";

export const Select: React.FC<ISelect> = ({
  className,
  fullwidth,
  data,
  ...props
}) => {
  const itemClasses = [className, prefix, fullwidth && `${prefix}--fullwidth`]
    .filter(Boolean)
    .join(" ");

  return (
    <select className={itemClasses} {...props}>
      {data.map(({ id, value }) => (
        <option key={id} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
