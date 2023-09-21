import { Link } from "react-scroll";

type LinkToProps = {
  title?: string;
  to: string;
  onclick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const LinkTo = (props: LinkToProps) => {
  return (
    <Link
      style={{
        cursor: "pointer",
      }}
      to={props.to}
      onClick={props.onclick}
      smooth={true}
      duration={500}
      offset={-50}
      className={props.className}
    >
      {props.title}
      {props.children}
    </Link>
  );
};
export default LinkTo;
