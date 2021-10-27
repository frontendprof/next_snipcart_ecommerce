import s from './Container.module.scss';

const Container = ({ children, className, ...rest }) => {
  let containerClassname = s.container;
  if (className) {
    containerClassname = `${containerClassname} ${className}`;
  }
  return (
    <div className={containerClassname} {...rest}>
      {children}
    </div>
  );
};

export default Container;
