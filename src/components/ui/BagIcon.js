import React   from 'react';


const BagIcon = (props) => {
    // This function can receive the following parameters, if any

//    if(props.userName) {  // User logged in, and so Bag appears
        return(
            <i  className="ui big shopping bag icon"
                style={ {position:"relative", float:"left"} }>
            </i>
        );
//    }
//    else {                // User not logged, so Bag does not appear
//        return(<div></div>);
//    }
}


export default  BagIcon;
