
type MyComponentProps<E extends HTMLElement> = React.HTMLProps<E> & {
  icon: React.ComponentType<any>;
  iconStyle?: string;
};
const NavIcon = <E extends HTMLElement>({
  icon: Icon,
  iconStyle,
  ...props
}: MyComponentProps<E>) => {
  return (
    <span {...props}
      className={`${props.className} bg-[#4E4F50] cursor-pointer size-10 rounded-full flex justify-center items-center hover:filter hover:brightness-150 duration-300`}>
      <Icon className={`${iconStyle} text-[#E7E9ED]`} />
    </span>
  );
};
export default NavIcon;
