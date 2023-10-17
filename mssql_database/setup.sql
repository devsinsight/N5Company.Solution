USE master
GO
CREATE DATABASE N5Company
GO
USE N5Company
GO
CREATE TABLE PermissionType
(
Id INT PRIMARY KEY IDENTITY(1,1),
Description VARCHAR(500) NOT NULL
)
GO
INSERT INTO PermissionType VALUES('Administrator'), ('User')
GO
CREATE TABLE Permission
(
Id INT PRIMARY KEY IDENTITY(1,1),
NombreEmpleado VARCHAR(100) NOT NULL,
ApellidoEmpleado VARCHAR(100) NOT NULL,
TipoPermiso INT FOREIGN KEY REFERENCES PermissionType(Id),
FechaPermiso Date
)
