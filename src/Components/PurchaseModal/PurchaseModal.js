import React from 'react'
import classes from './PurchaseModal.module.css'
import AllBooks from '../AllBooks/AllBooks'

import Record from './Record'


const purchaseModal=(props)=>{

    



    

    const modal=
        <div className={classes.modal} onClick={props.togglePurchaseModal}>
            <div className={classes.modal_content} onClick={e=>e.stopPropagation()}>
                <div className={classes.modal_body}>
                    <Record />
                    <Record />
                    <Record />
                    <Record />
                    <Record />
                   
                    
                </div>

                <div className={classes.modal_footer}>
                    <button onClick={props.togglePurchaseModal} className={classes.close_btn}>
                        Close
                    </button>
                </div>

            </div>

        </div>

    return (modal)
}


export default purchaseModal