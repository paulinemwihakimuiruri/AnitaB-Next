interface ButtonProps {
  buttonText: string;
  variant: string;
  onClickHandler: () => void;
}

const Button = ({ buttonText, variant, onClickHandler }: ButtonProps) => {
  const buttonVariants = () => {
    switch (variant) {
      case "primary":
        return "bg-green-500 text-white"
      case "secondary":
        return "bg-white text-green-500 border border-green-500"
      default:
        return "bg-green-500 text-white"
    }
  };

  const variantStyles = buttonVariants();
  return <button className={`${variantStyles} px-[16] py-[12] cursor-pointer rounded-md border-none`}
  onClick={onClickHandler}
  >{buttonText}</button>;
};

export default Button;
