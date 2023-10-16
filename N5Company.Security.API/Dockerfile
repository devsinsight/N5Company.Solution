#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["N5Company.Security.API/N5Company.Security.API.csproj", "N5Company.Security.API/"]
COPY ["N5Company.Security.Elasticsearch/N5Company.Security.Elasticsearch.csproj", "N5Company.Security.Elasticsearch/"]
COPY ["N5Company.Security.Kafka/N5Company.Security.Kafka.csproj", "N5Company.Security.Kafka/"]
COPY ["N5Company.Security.Repository/N5Company.Security.Repository.csproj", "N5Company.Security.Repository/"]
RUN dotnet restore "N5Company.Security.API/N5Company.Security.API.csproj"
COPY . .
WORKDIR "/src/N5Company.Security.API"
RUN dotnet build "N5Company.Security.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "N5Company.Security.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "N5Company.Security.API.dll"]