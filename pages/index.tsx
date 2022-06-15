import type { NextPage } from 'next';
// @ts-ignore
import styles from '../styles/home.module.less';
import { Button } from 'antd';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button type="primary">
        Hello!
      </Button>
    </div>
  );
};

export default Home;
