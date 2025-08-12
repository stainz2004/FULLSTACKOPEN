# SPA — Creating a new note

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Browser
    participant SPA as "SPA (JavaScript running in browser)"
    participant API as "API Server (/api/notes)"

    User->>Browser: Type new note text & click "Save"
    Browser->>SPA: Pass note content to SPA code
    SPA->>API: POST /api/notes {"content": "My new note", "date": "..."}
    API-->>SPA: 201 Created {"id": 123, "content": "My new note", "date": "..."}
    SPA->>API: GET /api/notes
    API-->>SPA: 200 OK [ Updated JSON notes list ]
    SPA-->>Browser: Update UI to show new note
