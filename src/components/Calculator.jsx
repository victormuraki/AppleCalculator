import React, { useState } from "react";
import "./Calculator.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
    
    const [num,setNum] = useState(0);
    const [Oldnum,setOldNum] = useState(0);
    const [Operador,setOperador] = useState();

    function InpuNum(e) {
        var input=e.target.value
        if (num === 0){
            setNum(input);
        } else {
            setNum(num + input)
        }
    } 
    function Clear() {
        setNum(0);
    }

    function Porcentagem() {
        setNum(num / 100);
    }

    function MudaSinal() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e){
        var operatorInput=e.target.value
        setOperador(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (Operador === "/") {
            setNum(parseFloat(Oldnum) / parseFloat(num));
        } else if (Operador === "x") {
            setNum(parseFloat(Oldnum) * parseFloat(num))
        } else if (Operador === "+") {
            setNum(parseFloat(Oldnum) + parseFloat(num))
        } else if (Operador === "-") {
            setNum(parseFloat(Oldnum) - parseFloat(num))
        }
    }

    return(
        <div>
        <Box m={5}/>
        <Container maxWidth="xs">
            <div className="wrapper">
                <p className="resultado">{num}</p>
                <button className="grey1" onClick={Clear}>C</button>
                <button className="grey1" onClick={MudaSinal}>+/-</button>
                <button className="grey1" onClick={Porcentagem}>%</button>
                <button className="orange" onClick={operatorHandler} value="/">/</button>
                <button className="grey" onClick={InpuNum} value={7}>7</button>
                <button className="grey" onClick={InpuNum} value={8}>8</button>
                <button className="grey" onClick={InpuNum} value={9}>9</button>
                <button className="orange" onClick={operatorHandler} value="x">X</button>
                <button className="grey" onClick={InpuNum} value={4}>4</button>
                <button className="grey" onClick={InpuNum} value={5}>5</button>
                <button className="grey" onClick={InpuNum} value={6}>6</button>
                <button className="orange" onClick={operatorHandler} value="-">-</button>
                <button className="grey" onClick={InpuNum} value={1}>1</button>
                <button className="grey" onClick={InpuNum} value={2}>2</button>
                <button className="grey" onClick={InpuNum} value={3}>3</button>
                <button className="orange" onClick={operatorHandler} value="+">+</button>
                <button className="grey" onClick={InpuNum} value={0}>0</button>
                <button className="grey" onClick={InpuNum} value={"."}>.</button>
                <button className="grey">,</button>
                <button className="orange" onClick={calculate}>=</button>
            </div>
        </Container>
        </div>
    )
}