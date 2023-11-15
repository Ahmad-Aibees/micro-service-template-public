# Micro-Service

This repository serves as a microservice provider in a microservices architecture. It provides specific services to consumers and follows a REST API communication model.

## Features

- **Single-Purpose Microservice:** Each service serves a specific purpose (e.g., auth-ms for authorization).
- **Token-Based Authentication:** Authentication is based on tokens hashed with one-way hashing.
- **Token Management:** Services regenerate tokens every minute by default.
- **Discovery Database:** Tokens are submitted to the discovery database for consumer retrieval.

## Rules

1. Consumers can connect to providers and frontend apps.
2. Each frontend app should have a corresponding provider.
3. Providers cannot connect to other providers.

## Token Refresh

- Tokens are refreshed every minute.
- Consumers fetch the latest token from the discovery database based on the service type enum.

## Getting Started

1. Run `npm install`.
2. Create a `.env` file in the root folder with the entry `NODE_ENV={environment_type}`.
    - Example: `NODE_ENV=local`.
3. Create a `.{environment_type}.env` file in `src/common/config` folder based on `.example.env` (fill in details based on comments).
    - Example: `.local.env` if NODE_ENV is set to `local`.
4. Run `npm run start`.

## Environment Requirements

- MongoDB server (at least one).

## Swagger Documentation

- Swagger documentation is available at `{uri}/swagger`.
- To enable swagger set swagger_enabled to 1 in the environment config file.
## Note

- Ensure MongoDB is set up before running the code.
