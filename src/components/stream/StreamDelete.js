import React from 'react';
import Modal from '../../Modal';

const StreamDelete = ()=> {

    const action = (
        <div>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
    );


        return(
            <div>
                <h3>Stream Delete</h3>
                <Modal 
                title = 'delete'
                description = 'desc'
                action = {action}
                />
            </div>
        )
    }


export default StreamDelete