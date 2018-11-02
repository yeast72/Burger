import React from 'react'
import styled from 'styled-components'
import BuildControl from  './BuildControl/BuildControl'

const Container = styled.div`
    width:100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`
const controls = [
    { label: "Salad", type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <Container>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>
        ))}
    </Container>
)

export default buildControls;