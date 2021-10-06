import { GetServerSideProps } from 'next';

import { useUserQuery } from '../../services/queries';

const Header = (): JSX.Element => {
  const { isLoading } = useUserQuery();

  return <h1>{isLoading ? 'Loading' : 'Load'}</h1>;
};

export default Header;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
