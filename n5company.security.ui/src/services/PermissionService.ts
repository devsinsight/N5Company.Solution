
import { Permission } from '../models/Permission';
import axios, { AxiosResponse } from 'axios';



class PermissionService {
    private api: any;

    constructor() {
        this.api = axios.create({
            baseURL: 'https://localhost:61854/api/v1/security', // Reemplaza con la URL de tu propia API
        });
    }

    async getPermissions(): Promise<Permission[]> {
        try {
            const response: AxiosResponse = await this.api.get('/permissions');
            return response.data.permissions as Permission[];
        } catch (error) {
            console.error('Error al obtener los permisos:', error);
            throw error;
        }
    }

    async addPermission(newPermission: Permission): Promise<Permission> {
        try {
            const response: AxiosResponse = await this.api.post('/permissions', newPermission);
            return response.data as Permission;
        } catch (error) {
            console.error('Error al agregar un permiso:', error);
            throw error;
        }
    }

    async updatePermission(updatedPermission: Permission): Promise<Permission> {
        try {
            const response: AxiosResponse = await this.api.put(`/permissions`, updatedPermission);
            return response.data as Permission;
        } catch (error) {
            console.error('Error al actualizar un permiso:', error);
            throw error;
        }
    }
}

export default PermissionService;
