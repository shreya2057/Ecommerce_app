import instance from "../axios/instance"
import { Response } from "../data/types";

const getAllProducts = async (): Promise<Response>=>{
    try{
        const response = await instance.get("/products");
        return {status: response.status, message: response.data.products};
    }catch(error:any){
        return {status: 404, message: error.message};
    }
}

export {getAllProducts};