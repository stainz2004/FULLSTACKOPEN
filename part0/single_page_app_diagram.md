# SPA initial load — sequenceDiagram

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Browser
    participant Server as "Web Server"
    participant API as "API Server (/api/notes)"

    User->>Browser: Navigate to https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: GET /exampleapp/spa (index.html)
    Server-->>Browser: 200 OK (HTML)
    Browser->>Server: GET /exampleapp/main.css
    Server-->>Browser: 200 OK (CSS)
    Browser->>Server: GET /exampleapp/spa.js
    Server-->>Browser: 200 OK (JavaScript)
    Browser->>API: GET /api/notes
    API-->>Browser: 200 OK [ JSON list of notes ]
    Browser-->>User: Render SPA UI with notes
