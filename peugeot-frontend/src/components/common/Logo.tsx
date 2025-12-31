// src/components/common/Logo.tsx
import logo from '../../assets/common/peugeot-logo.png';

interface LogoProps {
  heightPx?: number;
  className?: string;
}

const Logo = ({ heightPx = 200, className = '' }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Peugeot Logo"
      style={{ height: `${heightPx}px` }}
      className="w-auto object-contain block"
    />
  );
};

export default Logo;