import * as Styles from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <Styles.LayoutContainer>{children}</Styles.LayoutContainer>;
};

export default Layout;
