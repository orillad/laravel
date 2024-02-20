import { FormKitNode } from "@formkit/core";
import { AxiosError } from "axios";

export function handleInvalitdForm(err:any, node?:FormKitNode){
    if(err instanceof AxiosError && err.response?.status === 422){
        node?.setErrors([], err.response.data.errors)
    }
}