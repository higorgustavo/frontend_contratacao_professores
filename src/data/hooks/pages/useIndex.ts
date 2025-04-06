import { Router } from "@routes/routes";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useIndex() {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");
    const [messageErro, setMessageErro] = useState<string>("");

    function onBuscarProfessor(event: FormEvent) {
        event.preventDefault();
        if (search?.length >= 3) {
            Router.pesquisaProfessor.push(router, search);
        } else {
            setMessageErro("Minimo de três caracteres");
        }
    }

    return { setSearch, messageErro, onBuscarProfessor };
}
