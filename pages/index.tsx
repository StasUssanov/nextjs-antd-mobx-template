import type { NextPage } from 'next';
// @ts-ignore
import styles from '../styles/home.module.less';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { appStore } from '../store/app-store';

const Home: NextPage = observer(() => {
  return (
    <div className={styles.container}>
      <Button
        type="primary"
        onClick={() => appStore.testMobx()}
      >
        Hello!
      </Button>
    </div>
  );
});

export default Home;
