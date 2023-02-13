import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwither } from 'shared/ui/ThemeSwither';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation('main');
  return (
    <div className={classNames(cls.Navbar, {}, [className])}> 
    <div className={cls.links}>
    <AppLink theme = {AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
    {t("Главная страница", {ns: "main"})}
        </AppLink>
    <AppLink theme = {AppLinkTheme.SECONDARY} to={'/about'}>
    {t("сайт", {ns: "about"})}
        </AppLink>
    </div>
    </div>
  )
}

export default Navbar;
