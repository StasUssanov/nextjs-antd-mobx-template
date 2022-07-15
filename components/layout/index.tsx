import React from 'react';
// @ts-ignore
import classes from './layout.module.less';
import { ILayoutProps } from './types';
import { Layout as AntdLayout } from 'antd';
import { MainFooter } from '@components/main-footer';
import { MainHeader } from '@components/main-header';

const { Content } = AntdLayout;

export const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <AntdLayout className={classes.root}>
      <MainHeader/>
      <Content children={props.children}/>
      <MainFooter/>
    </AntdLayout>
  );
};
