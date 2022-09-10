import { textPrimary, backgroundColor, textSecondary } from "../utils/ColorPallete"
import FormMahasiswa from "../components/FormMahasiswa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMahasiswa(){
    const [mahasiswa, setMahasiswa] = useState({});
    const navigate = useNavigate();

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
        
        if(listMahasiswa === null){
            localStorage.setItem("list_mahasiswa", JSON.stringify([mahasiswa]))
        }
        else {
            let newListMhs = JSON.parse(listMahasiswa);
            newListMhs.push(mahasiswa);
            localStorage.setItem("list_mahasiswa", JSON.stringify(newListMhs));
        }
        
        navigate("/list-mahasiswa");
        setMahasiswa({});
    }

    const handleCancel = () => {
        setMahasiswa({})
        navigate("/list-mahasiswa")
    }

    const stylePage = {
        backgroundColor: backgroundColor,
        padding: "30px"
    }

    return (
        <div className="text-light min-vh-100" style={stylePage}>
            <h5 style={{color: textPrimary}} color={textSecondary}>Create Mahasiswa</h5>
            <FormMahasiswa mhs={mahasiswa} handleChange={handleChange} handleCancel={handleCancel}
                handleSubmit={handleSubmit}/>
        </div>
    )
}

export default CreateMahasiswa;