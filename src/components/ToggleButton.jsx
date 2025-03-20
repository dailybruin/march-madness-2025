import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { useBracket } from '../components/BracketProvider.jsx';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';


const customTheme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#593012',
            dark: '#784C2D',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        margin: theme.spacing(0.5),
        border: 0,
        borderRadius: theme.shape.borderRadius,
        [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
    },
}));

function CustomizedDividers() {
    const theme = useTheme();
    const { editor, setEditor, gen, setGen } = useBracket();

    const handleGen = (event, newGen) => {
        if (newGen !== null) {
            setGen(newGen);
        }
    };

    const handleEditor = (event, newEditor) => {
        if (newEditor !== null) {
            setEditor(newEditor);
        }
    };

    return (
        <div>
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    border: `1px solid ${theme.palette.divider}`,
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.primary.main, // ✅ Now correctly applies custom theme
                    color: theme.palette.primary.contrastText, // Ensures text is readable
                }}
            >
                <StyledToggleButtonGroup
                    size="small"
                    value={editor}
                    exclusive
                    onChange={handleEditor}
                    aria-label="editor"
                    color={theme.palette.primary.contrastText}
                >
                    <ToggleButton value="Ira" aria-label="Ira" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Ira
                    </ToggleButton>
                    <ToggleButton value="Kai" aria-label="Kai" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Kai
                    </ToggleButton>
                    <ToggleButton value="Aaron" aria-label="Aaron" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Aaron
                    </ToggleButton>
                    <ToggleButton value="Connor" aria-label="Connor" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Connor
                    </ToggleButton>
                    <ToggleButton value="Sabrina" aria-label="Sabrina" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Sabrina
                    </ToggleButton>
                    <ToggleButton value="Una" aria-label="Una" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Una
                    </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1, color: theme.palette.primary.contrastText}} />
                <StyledToggleButtonGroup
                    size="small"
                    value={gen}
                    exclusive
                    onChange={handleGen}
                    aria-label="gen"
                >
                    <ToggleButton value="Women's" aria-label="Women's" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Women's
                    </ToggleButton>
                    <ToggleButton value="Men's" aria-label="Men's" sx={{
                        color: theme.palette.primary.contrastText, // Default text color
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.dark, // Custom selected color
                            color: theme.palette.primary.contrastText, // Ensure readable text
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.dark, // Darker color when selected and hovered
                        }, fontFamily:"Sen, sans-serif"  
                    }}>
                        Men's
                    </ToggleButton>
                </StyledToggleButtonGroup>
            </Paper>
        </div>
    );
}

export default function ThemedCustomizedDividers() {
    return (
        <ThemeProvider theme={customTheme}>
            <CustomizedDividers />
        </ThemeProvider>
    );
}