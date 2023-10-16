import React, { useState, useEffect } from 'react';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import moment from 'moment';
import { Permission } from '../models/Permission';

interface EditPermissionFormProps {
    permission: Permission | null;
    updatePermission: (updatedPermission: Permission) => void;
}

const EditPermissionForm: React.FC<EditPermissionFormProps> = ({ permission, updatePermission }) => {
    const [updatedPermission, setUpdatedPermission] = useState<Permission>({
        Id: 0,
        NombreEmpleado: '',
        ApellidoEmpleado: '',
        TipoPermisoId: 1,
        FechaPermiso: '',
    });

    useEffect(() => {
        if (permission) {
            setUpdatedPermission(permission);
        }
    }, [permission]);

    const handleUpdatePermission = () => {
        if (updatedPermission.NombreEmpleado && updatedPermission.ApellidoEmpleado) {
            updatePermission(updatedPermission);
        }
    };

    return (
        <div>
            {permission && (
                <>
                    <h2>Editar Permiso</h2>
                    <TextField
                        label="Nombre del Empleado"
                        value={updatedPermission.NombreEmpleado}
                        onChange={(e) => setUpdatedPermission({ ...updatedPermission, NombreEmpleado: e.target.value })}
                    />
                    <TextField
                        label="Apellido del Empleado"
                        value={updatedPermission.ApellidoEmpleado}
                        onChange={(e) => setUpdatedPermission({ ...updatedPermission, ApellidoEmpleado: e.target.value })}
                    />
                    <Select
                        label="Tipo de Permiso"
                        value={updatedPermission.TipoPermisoId}
                        onChange={(e) => setUpdatedPermission({ ...updatedPermission, TipoPermisoId: e.target.value as number })}
                    >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Usuario</MenuItem>

                    </Select>
                    <TextField
                        label="Fecha del Permiso"
                        type="date"
                        value={ moment(updatedPermission.FechaPermiso).format('YYYY-MM-DD') }
                        onChange={(e) => setUpdatedPermission({ ...updatedPermission, FechaPermiso: e.target.value })}
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdatePermission}>
                        Actualizar
                    </Button>
                </>
            )}
        </div>
    );
};

export default EditPermissionForm;
