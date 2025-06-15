# NestJS Microservices Architecture

This project demonstrates a microservices architecture built with NestJS, featuring multiple services that communicate through message patterns and HTTP.

## Architecture Overview

```mermaid
graph TB
    subgraph "API Gateway"
        AG[API Gateway Service]
    end
    
    subgraph "Core Services"
        US[User Service]
        PS[Product Service]
        OS[Order Service]
        NS[Notification Service]
    end
    
    subgraph "Message Broker"
        RB[RabbitMQ]
    end
    
    subgraph "Databases"
        DB1[(MongoDB)]
        DB2[(PostgreSQL)]
    end
    
    AG -->|HTTP| US
    AG -->|HTTP| PS
    AG -->|HTTP| OS
    US -->|Events| RB
    PS -->|Events| RB
    OS -->|Events| RB
    RB -->|Events| NS
    US -->|Data| DB1
    PS -->|Data| DB1
    OS -->|Data| DB2
```

## Service Communication Flow

```mermaid
sequenceDiagram
    participant Client
    participant Gateway
    participant UserService
    participant ProductService
    participant OrderService
    participant NotificationService
    participant RabbitMQ

    Client->>Gateway: HTTP Request
    Gateway->>UserService: Forward Request
    UserService->>RabbitMQ: Publish Event
    Gateway->>ProductService: Forward Request
    ProductService->>RabbitMQ: Publish Event
    Gateway->>OrderService: Forward Request
    OrderService->>RabbitMQ: Publish Event
    RabbitMQ->>NotificationService: Consume Events
    NotificationService-->>Client: Send Notification
```
