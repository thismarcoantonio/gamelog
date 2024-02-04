import { NavLink } from "react-router-dom";
import cn from "classnames";
import { Icon, IconTypes } from "../Icon";
import styles from "./styles.module.css";

const icons: Array<{ icon: IconTypes; to: string }> = [
  { icon: "gamepad", to: "/" },
  { icon: "lineChart", to: "/statistics" },
  { icon: "settings", to: "/settings" },
  { icon: "info", to: "/about" },
];

export function MobileNavigation() {
  return (
    <div className={styles.navigationBar}>
      {icons.map(({ icon, to }) => (
        <NavLink key={icon} className={({ isActive }) => cn([styles.navigationIcon, { [styles.active]: isActive }])} to={{ pathname: to }}>
          <Icon size={28} icon={icon} />
        </NavLink>
      ))}
    </div>
  );
}
