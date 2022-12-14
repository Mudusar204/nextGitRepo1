import Button from "../button/Button";
import { useState } from "react";
// var counterValue: number = 0
const Counter = () => {
    const [countValue, setCountValue] = useState<number>(0)
    const onClickIncrementHandler = () => {
        // counterValue = counterValue + 1
        setCountValue(countValue + 1)
        console.log("countervalue",countValue);

    }
    const onClickDecrementHandler = () => {
        // counterValue = counterValue - 1
        setCountValue(countValue - 1)

        console.log("countervalue",countValue );

    }
    return (
        <div>
            <h2>Counter App</h2>
            <Button buttonTitle="+" color="red" onClickHandler={onClickIncrementHandler} extraStyle={{ border: "black", color: "white", padding: [50] }} />
            {countValue}
            <Button buttonTitle="-" color="red" onClickHandler={onClickDecrementHandler} extraStyle={{ border: "black", color: "white", padding: 10 }} />

        </div>
    )
}
export default Counter