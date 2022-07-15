import type { NextPage } from 'next';
// @ts-ignore
import styles from '@styles/home.module.less';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { appStore } from '@store/app-store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { IGetServerSideProps } from '@type/IGetServerSideProps';

const Home: NextPage = observer(() => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Button
        type="primary"
        onClick={() => appStore.testMobx()}
        children={t('button.seeConsole')}
      />
    </div>
  );
});

export const getServerSideProps = async ({ locale }: IGetServerSideProps) => ({
  props: {
    ...(await serverSideTranslations(locale))
  }
});

export default Home;
