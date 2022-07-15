import React from 'react';
// @ts-ignore
import classes from './main-footer.module.less';
import { Layout, Typography } from 'antd';

export const MainFooter: React.FC = () => {
  return (
    <Layout.Footer className={classes.root}>
      <Typography.Text
        type="secondary"
        children={'Footer'}
      />
    </Layout.Footer>
  );
};
