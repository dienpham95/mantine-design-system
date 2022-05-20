import React from 'react';
import { UnstyledButton, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface MainLinkProps {
  Component: React.FC;
  path: string;
}

function MainLink({ Component, path }: MainLinkProps) {
  const navigate = useNavigate();

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={() => navigate(path)}
    >
      <Group>
        <Text size="sm">{Component.name}</Text>
      </Group>
    </UnstyledButton>
  );
}

interface MainLinksProps {
  routes: MainLinkProps[];
}

export const MainLinks: React.FC<MainLinksProps> = ({ routes }) => {
  return (
    <div>
      {routes.map((route) => (
        <MainLink key={route.Component.name} {...route} />
      ))}
    </div>
  );
};
