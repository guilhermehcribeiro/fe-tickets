import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

export const WrapperContainer = styled('div')`
  width: 600px;
  margin: auto;
`;

export const WrapperForm = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RegisterTypography = styled(Typography)`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  color: #bfbfbf;
  font-size: 12px;
  a {
    text-decoration: none;
    :visited {
      color: inherit;
    }
  }
`;
