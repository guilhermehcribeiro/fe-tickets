import { createRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import { SnackbarProvider } from 'notistack';

import { ToastConfig } from './components/Toast';
import Routes from './pages';

function App() {
  const notistackRef = createRef<any>();

  const onClickDismiss = (key: string | number) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <>
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        hideIconVariant={false}
        autoHideDuration={2000}
        TransitionComponent={Fade}
        action={(key) => (
          <Button onClick={onClickDismiss(key)}>
            <ClearIcon color='disabled' />
          </Button>
        )}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <ToastConfig />
        <CssBaseline />
        <Routes />
      </SnackbarProvider>
    </>
  );
}

export default App;
