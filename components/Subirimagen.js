/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

//storaje imagen
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
//
import { FirebaseContext } from '../firebase';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarSubirimagen from '../validacion/validarSubirimagen.js';

import UploadIcon from '../public/static/img/UploadIcon';

const STATE_INICIAL = {
    nombre: '',
    categoria: '',
    img: '',
    creado: Date.now(),
}

export default function Subirimagen() {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);

    const { firebase } = useContext(FirebaseContext);
    const router = useRouter();

    const {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleBlur,
        handleSelected
    } = useValidacion(STATE_INICIAL, validarSubirimagen, Subirimagen);

    const { nombre, categoria, img } = valores;

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(firebase.storage, `imagenes/${file.name + v4()}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                   
                    setPerc(progress);
                    switch (snapshot.state) {
                        case "paused":
                          
                            break;
                        case "running":
                           
                        default:
                            break;
                    }
                },
                (error) => {
                    console.error(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData(({ img: downloadURL }));
                    });
                }
            );
        };
        file && uploadFile();
    }, [file]);
  

    async function Subirimagen() {
        const producto = {
            nombre,
            categoria,
            img: data.img,
            creado: Date.now(),
        }
        firebase.db.collection('trabajos').add(producto);
        return router.push('/dashboard');
    }

    return (
        <div className="new">
            <div className="bottom">
                <div className="left">
                    <img
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    />
                    <h3>{per}</h3>
                </div>

                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <div className="formInput">
                            <label htmlFor="file">
                                <UploadIcon className="icon" />
                            </label>
                            <input
                                type="file"
                                id="file"
                                name="img"
                                value={img}
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="formInput">
                            <label htmlFor="nombre">Nombre Trabajo:</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Nombre del Trabajo"
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errores.nombre && <p className='errores'>{errores.nombre}</p>}

                            <label htmlFor="categoria">Categoría:</label>
                            <select name='categoria' onBlur={handleBlur} onChange={handleSelected}>
                                <option value='' defaultValue >--Seleccione--</option>
                                <option value='cocinas'>Cocinas</option>
                                <option value='ce' >Centros de entretenimiento</option>
                                <option value='closets' >Clósets</option>
                                <option value='dormitorio'>Dormitorios</option>
                                <option value='oficina'>Muebles oficina</option>
                                <option value='baño'>Muebles de Baño</option>
                            </select>
                            {errores.categoria && <p className='errores'>{errores.categoria}</p>}
                        </div>
                        <button className='boton-secundario' disabled={per !== null && per < 100} type="submit">
                            Subir Trabajo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
