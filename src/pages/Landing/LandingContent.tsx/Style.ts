import { Box, Typography, styled } from "@mui/material";

// Content 1

export const TextBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
}));

export const BigTextBlack = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    fontSize: '2.5rem',
    fontWeight: 700,
}));

export const SmallTextBlack = styled('span')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
}));

export const YellowText = styled('span')(() => ({
    display: 'contents',
    color: '#FFD700',
}));

export const IllustrationEle = styled('div')(() => ({
    display: 'flex',
    '& img': {
        width: '100%',
        height: '100%',
    },
    justifyContent: 'end'
}));

// Content 2

export const TextBox2 = styled(Box)(() => ({
    maxHeight: '70px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '10px',
    padding: 20,
    minHeight: '70px',
    minWidth: '80px',
    gap: '0.2rem',
    cursor: 'pointer'
}));

export const SmallTextWhite = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: 400,
    color: 'white',
}));

export const BigTextWhite = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 700,
}));

export const BoxText = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: '0.8rem',
}));

export const PopUp = styled(Box)(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
}));

export const PopUpContent = styled(Box)(() => ({
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    width: '35%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflow: 'hidden', // Ensure content does not overflow
    zIndex: 1000,
}));

export const Close = styled('span')(() => ({
    display: 'flex',
    justifyContent: 'end',
    fontSize: '2rem',
    cursor: 'pointer',
}));

// Content 3

export const ImageEle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
    },
    padding: '20px',
}));

export const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const SpecialText = styled('span')(() => ({
    fontWeight: 800,
    fontSize: '2.5rem',
}));

// Content 5

export const WhiteTextSpan = styled('span')(() => ({
    color: 'white',
    fontSize: '2rem',
    fontWeight: 700,
}));

// Content 6
export const HistoryEle = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
    },
    padding: '20px',
    minWidth: '300px',
}));



