import React from 'react';
import { Delete } from '@material-ui/icons';
import db from '../firebase';



const Dtest = ({ id }) => {
    const dtest = () => {
        console.log(id);
        // const confirmdelete = prompt('enter any word to confirm else cancle')

        if (id) {

            if (window.confirm('are you sure you want to delete')) {

                db.collection("rooms").doc(id).delete().then(function () {
                    console.log("Document successfully deleted!");
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
            } else (console.log('dont'))

        }
    }
    return (
        <div className='delete' onClick={dtest}>
            <Delete />
        </div>
    );
};

export default Dtest;