import React,{Component} from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class MyModal extends Component{
  deleteSingleStream = ()=>{
    const { text, deleteStream } = this.props;

    deleteStream(text.id)
    ModalManager.close()
  }


   render(){
    const { onRequestClose, text } = this.props;

      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.FlipVertical3D}
            >
              <div className="my-modal">
            <h6> Do you rellay want to delete: {text.title}</h6>
            <button className="btn btn-danger btn-sm mg" onClick={this.deleteSingleStream}>Delete</button>

            <button className="btn btn-primary btn-sm mg" onClick={ModalManager.close}>Close Modal</button>
            </div>
         </Modal>
      );
   }
}

export default MyModal