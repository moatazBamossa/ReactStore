import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const FAICon = ({
  icon,
  color = "--color-natural-black-default-new",
  fontSize,
  ...rest
}: FontAwesomeIconProps): JSX.Element => {
  return (
    <FontAwesomeIcon color={color} fontSize={fontSize} icon={icon} {...rest} />
  );
};

export default FAICon;
