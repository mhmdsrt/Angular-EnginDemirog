import { ReponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ReponseModel{
    data: T[];
    // extends ile kalıtım alıyoruz.
}