import { PessoaADController } from "./controller/PessoaADController"
import { DadosADController } from "./controller/DadosADController"

export const Routes = [{
    method: "get",
    route: "/pessoaAD",
    controller: PessoaADController,
    action: "all"
}, {
    method: "get",
    route: "/pessoaAD/:id",
    controller: PessoaADController,
    action: "one"
}, {
    method: "post",
    route: "/pessoaAD",
    controller: PessoaADController,
    action: "save"
}, {
    method: "delete",
    route: "/pessoaAD/:id",
    controller: PessoaADController,
    action: "remove",
},
{
    method: "get",
    route: "/dadosAD",
    controller: DadosADController,
    action: "all"
},
{
    method: "get",
    route: "/dadosAD/:id",
    controller: DadosADController,
    action: "one"
},
{
    method: "post",
    route: "/dadosAD",
    controller: DadosADController,
    action: "save"
},
{
    method: "delete",
    route: "/dadosAD/:id",
    controller: DadosADController,
    action: "remove"

}]