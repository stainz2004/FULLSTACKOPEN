```mermaid
sequenceDiagram
    autonumber
    participant Browser
    participant API as "API Server (/api/notes)"

    Browser->>API: POST /api/notes {"content": "My new note", "date": "..."}
    API-->>Browser: 201 Created {"id": 123, "content": "My new note", "date": "..."}
    Browser->>API: GET /api/notes
    API-->>Browser: 200 OK [ Updated JSON notes list ]
    Browser-->>Browser: Render updated notes list in UI
