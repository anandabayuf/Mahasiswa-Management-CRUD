import { textPrimary, backgroundColor, textSecondary } from "../utils/ColorPallete"
import FormMahasiswa from "../components/FormMahasiswa";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditMahasiswa() {
    const [mahasiswa, setMahasiswa] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setMahasiswa({
            ...mahasiswa,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let listMahasiswa = localStorage.getItem("list_mahasiswa");
        
        let newListMhs = JSON.parse(listMahasiswa);
        newListMhs.splice(params.index, 1, mahasiswa);
        localStorage.setItem("list_mahasiswa", JSON.stringify(newListMhs));

        setMahasiswa({});
        navigate("/list-mahasiswa");
    }

    const handleCancel = () => {
        setMahasiswa({})
        navigate("/list-mahasiswa")
    }

    const getDataMhsFromLocalStorage = () => {
        let listMhs = JSON.parse(localStorage.getItem("list_mahasiswa"));

        setMahasiswa(listMhs[params.index]);
    }

    useEffect(() => {
        getDataMhsFromLocalStorage()
    }, [params])

    const stylePage = {
        backgroundColor: backgroundColor,
        padding: "30px"
    }

    return (
        <div className="text-light min-vh-100" style={stylePage}>
            <h5 style={{color: textPrimary}} color={textSecondary}>Edit Mahasiswa</h5>
            <FormMahasiswa mhs={mahasiswa} handleChange={handleChange} handleCancel={handleCancel}
                handleSubmit={handleSubmit}/>
        </div>
    )
}

export default EditMahasiswa;