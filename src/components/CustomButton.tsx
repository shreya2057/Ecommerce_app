import { Button } from "@chakra-ui/react";

function CustomButton(pt:{label: string, onClickFunction:()=>void}){
    return (
        <Button 
            bgColor={"#eda6c8"} 
            textColor={"#4d2f56"}
            onClick = {pt.onClickFunction}
        >{pt.label}</Button>
    );
}

export default CustomButton;