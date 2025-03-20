import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { useBracket } from '../components/BracketProvider.jsx';

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

export default function CustomizedDividers() {
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
                sx={(theme) => ({
                    display: 'flex',
                    border: `1px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                })}
            >
                <StyledToggleButtonGroup
                    size="small"
                    value={editor}
                    exclusive
                    onChange={handleEditor}
                    aria-label="editor"
                >
                    <ToggleButton value="Ira" aria-label="Ira">
                        Ira
                    </ToggleButton>
                    <ToggleButton value="Kai" aria-label="Kai">
                        Kai
                    </ToggleButton>
                    <ToggleButton value="Aaron" aria-label="Aaron">
                        Aaron
                    </ToggleButton>
                    <ToggleButton value="Connor" aria-label="Connor">
                        Connor
                    </ToggleButton>
                    <ToggleButton value="Sabrina" aria-label="Sabrina">
                        Sabrina
                    </ToggleButton>
                    <ToggleButton value="Una" aria-label="Una">
                        Una
                    </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                <StyledToggleButtonGroup
                    size="small"
                    value={gen}
                    exclusive
                    onChange={handleGen}
                    aria-label="gen"
                >
                    <ToggleButton value="Men's" aria-label="Men's">
                        Men's
                    </ToggleButton>
                    <ToggleButton value="Women's" aria-label="Women's">
                        Women's
                    </ToggleButton>
                </StyledToggleButtonGroup>
            </Paper>
        </div>
    );
} 