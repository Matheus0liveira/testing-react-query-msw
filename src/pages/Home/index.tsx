import { GetServerSideProps } from 'next';

const Header = (): JSX.Element => {
  return <h1>Header</h1>;
};

export default Header;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
