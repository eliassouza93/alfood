import { Button, TextField, Typography, Container, Paper } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IRestaurante from "../../interfaces/IRestaurante"
import http from "../../http"

const FormularioRestaurantes = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
        }
    }, [parametros])

    const [nomeRestaurante, setNomeRestaurante] = useState('')


    const aoSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Restaurante ' + nomeRestaurante + ' atualizado com sucesso!')
                })

        } else {
            http.post('restaurantes/', {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Restaurante ' + nomeRestaurante + ' cadastrado com sucesso!')
                })
        }

    }
    return (
        <Box>
            <Container maxWidth='lg' sx={{ mt: 1 }}>
                <Paper sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }
                    }>
                        <div  >
                            <Typography component="h1" variant="h6">Formulário de restaurantes</Typography>
                            <Box component='form' sx={{ width: '100%' }} onSubmit={aoSubmitForm}>
                                <TextField
                                    value={nomeRestaurante}
                                    onChange={evento => setNomeRestaurante(evento.target.value)}
                                    label="Nome do Restaurante"
                                    variant="standard"
                                    fullWidth
                                    required />
                                <Button sx={{ marginTop: 1 }} fullWidth type="submit" variant="outlined">Salvar</Button>
                            </Box>
                        </div>
                    </Box>
                </Paper>

            </Container>
        </Box>
    )
                }
    export default FormularioRestaurantes