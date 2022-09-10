import { textSecondary } from "../utils/ColorPallete";

function FormMahasiswa(props){
    const data = {
        jurusan: [
            "Akuntansi",
            "Ilmu Komunikasi",
            "Teknik Industri",
            "Teknik Informatika",
            "Sistem Informasi",
            "Teknik Sipil",
        ],
        status: [
            "Aktif",
            "Cuti",
            "Lulus",
            "Tidak Lulus"
        ]
    }

    return (
        <div className="container mt-5">
            <form onSubmit={props.handleSubmit} style={{color: textSecondary}}>
                <div className="mb-3">
                    <label htmlFor="nik" className="form-label">NIK</label>
                    <input className="form-control" type="number" name="nik" id="nik" onChange={props.handleChange} value={props.mhs.nik || ""}/>
                </div>
                <div className="mb-3" >
                    <label htmlFor="nama" className="form-label">Nama</label>
                    <input className="form-control" type="text" name="nama" id="nama" onChange={props.handleChange} value={props.mhs.nama || ""}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="jurusan" className="form-label">Jurusan</label>
                    <select className="form-select" aria-label="select jurusan" onChange={props.handleChange} value={props.mhs.jurusan || ""} name="jurusan" id="jurusan">
                        <option value="">Pilih Jurusan</option>
                        {
                            data.jurusan.map((jurusan, index) => {
                                return (
                                    <option key={index} value={jurusan}>{jurusan}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="form-select" aria-label="select status" onChange={props.handleChange} value={props.mhs.status || ""} name="status" id="status">
                        <option value="">Pilih Status</option>
                        {
                            data.status.map((status, index) => {
                                return (
                                    <option key={index} value={status}>{status}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-outline-dark me-md-2" onClick={props.handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormMahasiswa;