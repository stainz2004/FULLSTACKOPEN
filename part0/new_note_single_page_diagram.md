```mermaid
sequenceDiagram
    autonumber
    participant Browser
    participant Server as "Web Server"
    participant API as "API Server (/api/notes)"

    Browser->>Server: GET /exampleapp/spa
    Server-->>Browser: 200 OK (HTML)
    Browser->>Server: GET /exampleapp/main.css
    Server-->>Browser: 200 OK (CSS)
    Browser->>Server: GET /exampleapp/spa.js
    Server-->>Browser: 200 OK (JavaScript)
    Browser->>API: GET /api/notes
    API-->>Browser: 200 OK [ JSON list of notes ]
    Browser-->>Browser: Render SPA UI with notes