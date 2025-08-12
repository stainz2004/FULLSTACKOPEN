```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks Save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of browser: The POST request contains the new note data (content, date)
    activate server
    server-->>browser: 200 OK (note saved confirmation)
    deactivate server

    Note right of browser: The browser fetches the updated list of notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "New note", "date": "2025-08-11" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback to render the updated notes list
