import React from 'react';
// @ts-ignore
import classes from './main-header.module.less';
import { useTranslation } from 'next-i18next';
import { Layout, Menu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/router';
import { routeList } from '@root/router';

export const MainHeader: React.FC = () => {
  const { t } = useTranslation('navigation');
  const router = useRouter();

  const items: ItemType[] = Object.entries(routeList).map(([key, value]) => ({
    key: `header-menu-item-${key}`,
    label: t(value?.label ?? `main.${key}`),
    onClick: () => router.push(value.link)
  }));

  return (
    <Layout.Header className={classes.root}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['header-menu-item-0']}
        items={items}
      />
    </Layout.Header>
  );
};
