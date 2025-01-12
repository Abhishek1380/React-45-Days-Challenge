 <!-- Problem Statement  -->

<!-- <2. Show "Loading..." While Data is Loading
Create a component that:
Displays "Loading..." if isLoading is true.
Displays "Data loaded successfully!" if isLoading is false.
Hint: Use a conditional (if-else) in the component.  -->

<!-- App.js -->

import Sample from './Sample.jsx';

export default function App(){
    return(
    <Sample isLoading={false} />
    )
}

<!-- if - else rendering  -->
<!-- Sample.jsx -->

import React from 'react';

const Sample = ({isLoading})=>{

if(isLoading){
    return <p> Loading ... </p>
    }else{
    return <p> Data Loaded Successfully </p>
}

}
export default Sample;

<!-- Ternary Operator use -->

import React from 'react';

const Sample = ({isLoading})=>{
    return(
    isLoading ? <p> Loading...</p> : <p> Data loaded successfully </p>
)

}
export default Sample;

<!-- Logical && Operator -->
