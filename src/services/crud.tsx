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

const getCategorywiseProduct =async (category:string) => {
    try{
        const response = await instance.get(`/products/category/${category}?limit=100`);
        return {status: response.status, message: response.data};
    } catch(error:any){
        return {status: 404, message: error.message}
    }
}

const productCategory = async (): Promise<Response>=>{
    try{
        const response = await instance.get("/product/categories");
        return {status: response.status, message: response.data};
    }catch(error:any){
        return {status: 404, message: error.message};
    }
}

const searchOperation = async(text:string):Promise<Response>=>{
    try{
        const response = await instance.get(`https://dummyjson.com/products/search?q=${text}`);
        return {status: response.status, message: response.data};
    }catch(error:any){
        return {status: 404, message: error.message};
    }
}

export {getAllProducts, getCategorywiseProduct , productCategory, searchOperation};