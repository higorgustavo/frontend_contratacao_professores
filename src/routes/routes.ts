import { NextRouter } from "next/router";

export const Router = {
    home: {
        name: "/",
        push: function (router: NextRouter) {
            router.push({ pathname: this.name });
        },
    },
    pesquisaProfessor: {
        name: "/pesquisa-professor",
        push: function (router: NextRouter, search?: string) {
            router.push({ pathname: this.name, query: { search } });
        },
    },
};
