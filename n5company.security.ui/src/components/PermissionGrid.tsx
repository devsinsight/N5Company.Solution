import React from 'react';
import { Permission } from '../models/Permission';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import moment from 'moment';

interface PermissionGridProps {
    permissions: Permission[];
    setSelectedPermission: (permission: Permission | null) => void;
}

const PermissionGrid: React.FC<PermissionGridProps> = ({ permissions, setSelectedPermission }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre Empleado</TableCell>
                        <TableCell>Apellido Empleado</TableCell>
                        <TableCell>Tipo Permiso</TableCell>
                        <TableCell>Fecha Permiso</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {permissions.map((permission) => (
                        <TableRow
                            key={permission.Id}
                            onClick={() => setSelectedPermission(permission)}
                        >
                            <TableCell>{permission.NombreEmpleado}</TableCell>
                            <TableCell>{permission.ApellidoEmpleado}</TableCell>
                            <TableCell>{permission.TipoPermisoId}</TableCell>
                            <TableCell>{moment(permission.FechaPermiso).format('YYYY-MM-DD')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PermissionGrid;
