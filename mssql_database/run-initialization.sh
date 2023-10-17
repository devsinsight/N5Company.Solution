#!/bin/bash
sleep 30s
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Pass@w0rd1 -d master -i /usr/src/sql/setup.sql