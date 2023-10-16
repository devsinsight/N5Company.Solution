
import GridPage from './components/GridPage'; // Asegúrate de que esta ruta sea correcta
import { CssBaseline, Container, Typography } from '@mui/material';
import { styled } from '@mui/material';

const useStyles = styled((theme) => ({
    container: {
        marginTop: theme.spacing(4),
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <CssBaseline />
            <header className={classes.header}>
                <Typography variant="h4">Gestión de Permisos</Typography>
            </header>
            <main>
                <Container className={classes.container}>
                    <GridPage />
                </Container>
            </main>
        </div>
    );
}

export default App;
