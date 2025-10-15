import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxContainsStyled, ImageStyled } from "./styles";
import { ProfessorInterface } from "@data/@types/professor";

export interface ProfessorCardProps {
    professor: ProfessorInterface;
    onClick: (professor: ProfessorInterface) => void;
}

export default function ProfessorCard({ professor, onClick }: ProfessorCardProps) {
    return (
        <>
            <BoxAvatarStyled>
                {professor.foto_perfil ? (
                    <ImageStyled src={`${process.env.NEXT_PUBLIC_API_URL}${professor.foto_perfil}`} alt="" />
                ) : (
                    <ImageStyled src={"/user.svg"} alt="" style={{ width: "50%" }} />
                )}
            </BoxAvatarStyled>
            <BoxContainsStyled>
                <div className="text-container">
                    <Typography variant="h6" className="descricao" sx={{ marginBottom: "16px" }}>
                        {professor.nome}
                    </Typography>
                    <Typography
                        sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
                        className="descricao"
                        variant="body2"
                    >
                        {professor.descricao}
                    </Typography>
                </div>
                <Button variant="outlined" color="inherit" onClick={() => onClick(professor)}>
                    Ver detalhes
                </Button>
            </BoxContainsStyled>
        </>
    );
}
