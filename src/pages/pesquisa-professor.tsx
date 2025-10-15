import PageTitle from "@components/data-display/PageTitle";
import ProfessorCard from "@components/ProfessorCard";
import ListaProfessorCard from "@components/ProfessorCard/listaProfessorCard";
import UsePesquisaProfessor from "@data/hooks/pages/usePesquisaProfessor";
import { Container, Icon, InputAdornment, TextField } from "@mui/material";

export default function PesquisarProfessorPage() {
    const { professores } = UsePesquisaProfessor();
    return (
        <Container>
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
            <ListaProfessorCard professores={professores ?? []} onClick={(professor) => {}} />
        </Container>
    );
}
