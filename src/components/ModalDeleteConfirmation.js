import { textPrimary, textSecondary, textTertiary } from "../utils/ColorPallete"

function ModalDeleteConfirmation(props) {
    const modalStyle = {
        backgroundColor: textTertiary
    }

    return (
        <div className="modal fade" id="deleteconfirmationmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={modalStyle}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: textPrimary}}>Delete Confirmation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p style={{color: textSecondary}}>Are you sure you want to delete <strong>{props.mahasiswa.nama}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => props.handleDelete(props.index)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDeleteConfirmation;