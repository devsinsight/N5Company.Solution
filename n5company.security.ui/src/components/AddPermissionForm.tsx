import React, { useState } from 'react';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Permission } from '../models/Permission';
import moment from 'moment';

interface AddPermissionFormProps {
    addPermission: (newPermission: Permission) => void;
}

const AddPermissionForm: React.FC<AddPermissionFormProps> = ({ addPermission }) => {
    const [newPermission, setNewPermission] = useState<Permission>({
        Id: 0,
        NombreEmpleado: '',
        ApellidoEmpleado: '',
        TipoPermisoId: 1,
        FechaPermiso: '',
    });

    const handleAddPermission = () => {
        if (newPermission.NombreEmpleado && newPermission.ApellidoEmpleado) {
            addPermission(newPermission);
            // Limpia el formulario después de agregar un "Permission"
            setNewPermission({
                Id: 0,
                NombreEmpleado: '',
                ApellidoEmpleado: '',
                TipoPermisoId: 1,
                FechaPermiso: '',
            });
        }
    };

    return (
        <div>
            <h2>Agregar Permiso</h2>
            <TextField
                label="Nombre del Empleado"
                value={newPermission.NombreEmpleado}
                onChange={(e) => setNewPermission({ ...newPermission, NombreEmpleado: e.target.value })}
            />
            <TextField
                label="Apellido del Empleado"
                value={newPermission.ApellidoEmpleado}
                onChange={(e) => setNewPermission({ ...newPermission, ApellidoEmpleado: e.target.value })}
            />
            <Select
                label="Tipo de Permiso"
                value={newPermission.TipoPermisoId}
                onChange={(e) => setNewPermission({ ...newPermission, TipoPermisoId: e.target.value as number })}
            >
                <MenuItem value={1}>Administrador</MenuItem>
                <MenuItem value={2}>Usuario</MenuItem>
            </Select>
            <TextField
                label="Fecha del Permiso"
                type="date"
                value={moment(newPermission.FechaPermiso).format('YYYY-MM-DD')}
                onChange={(e) => setNewPermission({ ...newPermission, FechaPermiso: e.target.value })}
            />
            <Button variant="contained" color="primary" onClick={handleAddPermission}>
                Agregar
            </Button>
        </div>
    );
};

export default AddPermissionForm;
