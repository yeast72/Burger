import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;    
`
const Button = styled.button`
    display:block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;

    :disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }
    :hover :disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }
    
`

const Less = styled(Button)`  
    background-color: #D39952;
    color: white;

    :hover {
        background-color: #DAA972;
        color: white;
    }

    :active{
        background-color: #DAA972;
        color: white;
    }
`

const More = styled(Button)`
    background-color: #8F5E1E;
    color: white;

    :hover {
        background-color: #99703F;
        color: white;
    }

    :active {
        background-color: #99703F;
        color: white;
    }

`

const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`

const burgerControl = (props) =>(
        <Container>
            <Label>{props.label}</Label>
            <More 
            onClick={props.added}>More</More>
            <Less onClick={props.removed} disabled={props.disableButton}>Less</Less>
        </Container>
)

export default burgerControl;