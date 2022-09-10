import { useEffect, useState } from "react"
import { PlusCircle, Pencil, Trash3 } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom";
import { backgroundColor, textPrimary, textSecondary } from "../utils/ColorPallete";
import EmptyBoxImg from "../assets/images/empty-box.png"
import ModalDeleteConfirmation from "../components/ModalDeleteConfirmation";

function ListMahasiswa(){
    const [listMahasiswa, setListMahasiswa] = useState([]);
    const [mahasiswa, setMahasiswa] = useState({});
    const [index, setIndex] = useState(null)

    const navigate = useNavigate();

    const handleButtonCreate = () => {
        navigate("create")
    }

    const handleClickModal = (mahasiswa, index) => {
        setMahasiswa(mahasiswa);
        setIndex(index);
    }

    const handleClickEdit = (index) => {
        setIndex(index);
        navigate(`edit/${index}`)
        setIndex(null);
    }

    const handleDelete = (index) => {
        let listMhs = JSON.parse(localStorage.getItem("list_mahasiswa"));

        listMhs.splice(index, 1);

        localStorage.setItem("list_mahasiswa", JSON.stringify(listMhs));
        const modalElement = document.getElementById("deleteconfirmationmodal")
        modalElement.className = "modal fade";
        setListMahasiswa(listMhs);        

        setMahasiswa({});
        setIndex(null);
    }

    useEffect(() => {
        let listMhs = localStorage.getItem("list_mahasiswa");

        if(listMhs === null || JSON.parse(listMhs).length === 0){
            //empty
        }
        else {
            setListMahasiswa(JSON.parse(listMhs));
        }
    }, [])

    const stylePage = {
        backgroundColor: backgroundColor,
        padding: "30px"
    }

    const styleButtonCreateMhs = {
        backgroundColor: textSecondary
    }

    return (
        <div className="min-vh-100" style={stylePage}>
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <h5 style={{color: textPrimary}}>List Mahasiswa</h5>
                </div>
                <div className="col-auto">
                    <button className="btn btn-lg shadow text-light" style={styleButtonCreateMhs} onClick={handleButtonCreate}>
                        <span><PlusCircle/> Create Mahasiswa</span>
                    </button>
                </div>
            </div>
            <div className="mt-5">
                {
                    listMahasiswa.length > 0 ?
                    <table className="table">
                        <thead className="text-center">
                            <tr style={{color: textSecondary}}>
                                <td>No</td>
                                <td>NIK</td>
                                <td>Nama</td>
                                <td>Jurusan</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listMahasiswa.map((mahasiswa, index) => {
                                    return (
                                        <tr key={index} style={{color: textPrimary}} className="text-center">
                                            <td>{index + 1}</td>
                                            <td>{mahasiswa.nik}</td>
                                            <td>{mahasiswa.nama}</td>
                                            <td>{mahasiswa.jurusan}</td>
                                            <td>{mahasiswa.status}</td>
                                            <td>
                                                <button className="btn btn-outline-dark" onClick={() => handleClickEdit(index)}><span><Pencil/> Edit</span></button>&nbsp;&nbsp;&nbsp;
                                                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteconfirmationmodal" onClick={() => handleClickModal(mahasiswa, index)}><span><Trash3/> Delete</span></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="mb-3">
                            <img src={EmptyBoxImg} alt="no data" width="128px"/>
                        </div>
                        <div style={{color: textSecondary}}>
                            No Data Available
                        </div>
                    </div>
                }
            </div>
            <ModalDeleteConfirmation mahasiswa={mahasiswa} index={index} handleDelete={handleDelete}/>
        </div>
    )
}

export default ListMahasiswa;