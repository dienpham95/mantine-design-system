import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import _ from 'lodash';

import * as SystemComponents from './components/systems';
import {
  ActionIcon,
  AppShell,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from '@mantine/core';
import { MainLinks } from './components/others/MainLink';
import { User } from './components/others/User';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { Logo } from './components/others/Logo';

const routes = _.map(SystemComponents, (SystemComponent) => ({
  Component: SystemComponent,
  path: _.kebabCase(SystemComponent.name),
}));

const AppLayout: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks routes={routes} />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Logo colorScheme={colorScheme} />
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {dark ? <BsSun size={16} /> : <BsMoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routes.map(({ Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={routes[0].path} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
