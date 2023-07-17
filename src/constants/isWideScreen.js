import useMediaQuery from '@mui/material/useMediaQuery';

export const useWideScreen = () => {
  useMediaQuery('(min-width: 426px)');
  return useMediaQuery('(min-width: 426px)');
};
