import styles from "../../styles/components/button/Button.module.css"
import { Button as Chakrabutton } from '@chakra-ui/react'
import { type } from "os";
type buttonType = {
    color: string
    buttonTitle: string,
    data?: string,
    extraStyle?: any,
    onClickHandler?: () => void
    // {
    // padding:number,
    // color:string,
    // border:string 
    //     },

}
const onClickHandler = () => {
    console.log("button clicked");

}
const Button = (props: buttonType) => {
    console.log("props", props);

    return (
        <div>

            <Chakrabutton onClick={props.onClickHandler} colorScheme={props.color} style={props.extraStyle}>{props.buttonTitle}</Chakrabutton>
            {/* <button >{props.buttonTitle}</button> */}
            <br />
            {/* <ButtonGroup colorScheme="cyan">any one</ButtonGroup> */}
        </div>
    )
}
export default Button