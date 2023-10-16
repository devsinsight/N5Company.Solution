import { useState, useEffect } from 'react';
import AddPermissionForm from './AddPermissionForm';
import EditPermissionForm from './EditPermissionForm';
import PermissionGrid from './PermissionGrid';
import { Permission } from '../models/Permission';
import PermissionService from '../services/PermissionService';

function GridPage() {
    const permissionService = new PermissionService();
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null);

    const fetchPermissions = async () => {
        try {
            const permissions = await permissionService.getPermissions();

            setTimeout(() => setPermissions(permissions), 1000);

        } catch (error) {
            console.error('Error al obtener los permisos:', error);
        }
    };

    useEffect(() => {
        fetchPermissions();
    }, []);


    const addPermission = async (newPermission: Permission) => {
        try {
            const addedPermission = await permissionService.addPermission(newPermission);
            setPermissions([...permissions, addedPermission]);
            fetchPermissions();
        } catch (error) {

            console.error('Error al agregar un permiso:', error);
        }
    };


    const updatePermission = async (updatedPermission: Permission) => {
        try {
            const updated = await permissionService.updatePermission(updatedPermission);
            const updatedPermissions = permissions.map((p) => (p.Id === updated.Id ? updated : p));
            setPermissions(updatedPermissions);
            setSelectedPermission(null);
            fetchPermissions();
        } catch (error) {
            console.error('Error al actualizar un permiso:', error);
        }
    };


    return (
        <div>
            <PermissionGrid permissions={permissions} setSelectedPermission={setSelectedPermission} />
            <AddPermissionForm addPermission={addPermission} />
            <EditPermissionForm permission={selectedPermission} updatePermission={updatePermission} />
        </div>
    );
}

export default GridPage;
