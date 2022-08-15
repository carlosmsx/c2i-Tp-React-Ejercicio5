import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ListaTareas = (props) => {
    const tareas=props.listaTareas;
    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th className="col-3">Tarea</th>
                <th className="col-7">Descripción</th>
                <th className="col-2 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    tareas.map((item,posicion)=><tr>
                        <td>{item.nombre}</td>
                        <td>{item.descripcion}</td>
                        <td className="text-center"><Button variant="danger" onClick={()=>props.borrarTarea(item)}>Eliminar</Button></td>
                    </tr>)
                }
            </tbody>
        </Table>    
    );
};

export default ListaTareas;