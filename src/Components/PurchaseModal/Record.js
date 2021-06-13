import React from 'react'
import classes from './Record.module.css'

const Record=(props)=>{
    return(
        <div className={classes.record}>
            <div className={classes.title}>Harry Potter and the Philosopher's Stone</div>
            <div className="genre">Adventure Fantasy</div>
            <div className="date">12 jan 2020</div>
            <div className="price">500$</div>

        </div>
    )

}

export default Record;