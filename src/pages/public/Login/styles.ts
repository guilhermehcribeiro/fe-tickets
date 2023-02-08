import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

export const WrapperContainer = styled('div')(({ theme }) => ({
  width: '600px',
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const WrapperForm = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RegisterTypography = styled(Typography)`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  color: #1976d2;
  font-size: 12px;
  a {
    text-decoration: none;
    :visited {
      color: inherit;
    }
  }
`;
