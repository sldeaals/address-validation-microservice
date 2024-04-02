import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Address Validation Microservice API",
      version: "1.0.0",
      description: "API documentation for Address Validation Microservice",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [path.resolve(__dirname, "../routes/*.ts")],
};

const specs = swaggerJsdoc(options);

export function swagger (app: express.Application): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
