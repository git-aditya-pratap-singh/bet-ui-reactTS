import { RxCross1 } from 'react-icons/rx';

type IconProps = {
  iconType: string;
  iconSize?: number;
  iconColor?: string;
  iconStyle?: string;
};

const AppIcons: React.FC<IconProps> = ({ iconType, iconSize, iconColor, iconStyle }) => {
  const icons: Record<IconProps['iconType'], JSX.Element> = {
    crossIcon: <RxCross1 size={iconSize} color={iconColor} className={iconStyle} />,
  };

  return icons[iconType] || null;
};

export default AppIcons;
