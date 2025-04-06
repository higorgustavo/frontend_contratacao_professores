import PageTitle from "@components/data-display/PageTitle";
import { Icon, InputAdornment, TextField } from "@mui/material";

export default function PesquisarProfessorPage() {
    return (
        <>
            <TextField
                sx={{ mt: 3, mb: 1 }}
                label={"Encontre um professor"}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon sx={{ mr: 1 }}>search</Icon>
                            </InputAdornment>
                        ),
                    },
                }}
                fullWidth
                required
            />
            <PageTitle
                title="Professores Encontrados"
                subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com o mesmo"
            />
        </>
    );
}
