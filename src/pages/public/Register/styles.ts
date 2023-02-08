import { styled } from '@mui/material/styles';

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
