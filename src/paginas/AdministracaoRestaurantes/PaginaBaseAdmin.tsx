
import { AppBar, Button, Typography, Container, Toolbar, Link, Paper } from "@mui/material"
import { Box } from "@mui/system"
import { Link as RouterLink, Outlet } from 'react-router-dom'

const PaginaBaseAdmin = () => {
    return (
        <> <AppBar position="static">
            <Container maxWidth='xl'>
                <Toolbar>
                    <Typography variant="h6">
                        Administração
                    </Typography>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        <Link component={RouterLink} to='/admin/restaurantes'>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Restaurantes
                            </Button>
                        </Link>
                        <Link component={RouterLink} to='/admin/restaurantes/novo'>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Novo Restaurante
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>

                <Box>
                    <Container maxWidth='lg' sx={{ mt: 1 }}>
                        <Paper sx={{ p: 2 }}>

                            <Outlet />
 
                        </Paper>
                    </Container>
                </Box>
            </Container>
        </AppBar>

        </>


    )
}
export default PaginaBaseAdmin