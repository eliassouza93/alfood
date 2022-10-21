import { Button, TextField, Typography, Container, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import http from "../../../http"
import ITag from "../../../interfaces/ITag"


const FormularioPratos = () => {

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tags, setTags] = useState <ITag[]>([])
    const [tag, setTag] = useState('')

    const aoSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

    }
    useEffect(()=>{
        http.get<{tags:ITag[]}>('tags/')
        .then(resposta => setTags(resposta.data.tags))
    },[])
    return (
        <Box>
            <Container maxWidth='lg' sx={{ mt: 1 }}>
                <Paper sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }
                    }>
                        <div  >
                            <Typography component="h1" variant="h6">Formulário de Pratos</Typography>
                            <Box component='form' sx={{ width: '100%' }} onSubmit={aoSubmitForm}>
                                <TextField
                                    value={nomePrato}
                                    onChange={evento => setNomePrato(evento.target.value)}
                                    label="Nome do Prato"
                                    variant="standard"
                                    fullWidth
                                    required
                                    margin="dense" />
                                <TextField
                                    value={descricao}
                                    onChange={evento => setDescricao(evento.target.value)}
                                    label="Descrição do Prato"
                                    variant="standard"
                                    fullWidth
                                    required />
                                <FormControl margin='dense' fullWidth >
                                    <InputLabel id='select-tag'>Tag</InputLabel>
                                    <Select labelId='select-tag' value={tag} onChange={evento => setTag(evento.target.value)}>
                                        {tags.map(tag =><MenuItem 
                                        value={tag.id} key={tag.id}>
                                            {tag.value}
                                        </MenuItem>)}
                                    </Select>
                                </FormControl>
                                <Button sx={{ marginTop: 1 }} fullWidth type="submit" variant="outlined">Salvar</Button>
                            </Box>
                        </div>
                    </Box>
                </Paper>

            </Container>
        </Box>
    )
}
export default FormularioPratos