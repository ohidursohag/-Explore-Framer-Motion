import NavigationArrow from "@/assets/menu-icons/navigation_arrow.svg";

type MyComponentProps<E extends HTMLDivElement> = React.HTMLProps<E> & {
  icon: React.ComponentType<any>;
  iconStyle?: string;
  title: string;
  currentOption?: string;
  hasSubMenu?: boolean;
};
const MenuItem = <E extends HTMLDivElement>({
  icon: Icon,
  iconStyle,
  title,
  currentOption = "",
  hasSubMenu = false,
  ...props
}: MyComponentProps<E>) => {
  return (
    <div
      {...props}
      className={` ${props.className} flex justify-between items-center p-2 hover:bg-[#4E4F50] rounded-lg duration-300 cursor-pointer`}>
      <div
        className={` ${props.className} flex justify-center gap-3  items-center`}>
        <span
          className={`bg-[#4E4F50] filter brightness-150 cursor-pointer size-10 rounded-full flex justify-center items-center `}>
          <Icon className={`${iconStyle} text-[#E7E9ED] size-6`} />
        </span>
        <div className="flex flex-col">
          <span className="text-[#E7E9ED] text-lg">{title}</span>
          {
            currentOption && <span className="text-[#9fa0a1]">{currentOption}</span>
          }
        </div>
      </div>
      {hasSubMenu && (
        <span>
          <NavigationArrow className={`${iconStyle} text-[#E7E9ED] size-6`} />
        </span>
      )}
    </div>
  );
};

export default MenuItem;
