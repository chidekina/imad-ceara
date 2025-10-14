const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  rounded = false,
  className = '',
  as: Component = 'button',
  ...props
}) => {
  const baseClasses = 'font-semibold transition cursor-pointer border-2 inline-block text-center font-family-body';
  
  const variantClasses = {
    primary: 'bg-institutional text-white hover:bg-institutional/90 border-institutional hover:border-institutional/90',
    secondary: 'bg-black text-white hover:bg-black/90 border-black hover:border-black/90'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-4 text-xl'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const roundedClass = rounded ? 'rounded-lg' : '';
  
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    roundedClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};

export default Button;