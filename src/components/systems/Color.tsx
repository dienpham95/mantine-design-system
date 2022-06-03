import {
  AspectRatio,
  Divider,
  Grid,
  Space,
  Stack,
  Title,
  useMantineTheme,
} from '@mantine/core';
import _ from 'lodash';

export const Color = () => {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Title order={2}>Main Colors</Title>
      <Grid columns={10}>
        <Grid.Col md={1} sm={2} xs={2}>
          <AspectRatio
            ratio={1}
            sx={{ backgroundColor: theme.white, border: '1px solid' }}
          />
          <p style={{ textTransform: 'uppercase' }}>{theme.white}</p>
          <p>white</p>
        </Grid.Col>
        <Grid.Col md={1} sm={2} xs={2}>
          <AspectRatio
            ratio={1}
            sx={{ backgroundColor: theme.black, border: '1px solid' }}
          />
          <p style={{ textTransform: 'uppercase' }}>{theme.black}</p>
          <p>black</p>
        </Grid.Col>
      </Grid>

      <Space h="lg" />

      {_.map(
        _.pick(theme.colors, [
          'primary',
          'secondary',
          'success',
          'warning',
          'error',
          'info',
          'gray',
        ]),
        (colorArray, colorName) => (
          <Grid columns={10}>
            <Grid.Col span={10}>
              <Divider my="sm" label={colorName} labelPosition="center" />
            </Grid.Col>
            {_.map(colorArray, (color, index) => (
              <Grid.Col md={1} sm={2} xs={2}>
                <AspectRatio ratio={1} sx={{ backgroundColor: color }} />
                <p style={{ textTransform: 'uppercase' }}>{color}</p>
                <p>{`${colorName}[${index}]`}</p>
              </Grid.Col>
            ))}
          </Grid>
        ),
      )}
    </Stack>
  );
};
