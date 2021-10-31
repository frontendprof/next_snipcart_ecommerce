import s from './Button.module.scss';

const Button = ({ children, className, ...rest }) => {
  let buttonClassname = s.button;
  if (className) {
    buttonClassname = `${buttonClassname} ${className}`;
  }
  return (
    <button className={buttonClassname} {...rest}>
      {children}
    </button>
  );
};

export default Button;
