import React   from 'react';
import './Banner.css'


const Banner = (props) => {
    return(
        <div className="banner"
             style={{
                height: props.height,
                backgroundColor: props.background,
                color: props.color,
                fontSize: props.fontSize
             }}   
        >
            <div>
                {props.message}
            </div>
        </div>
    )
}


export default  Banner;
