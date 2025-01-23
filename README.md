# **Task Management API**

This is a simple RESTful API for managing tasks.

## **Base URL**

`/api/tasks`

---

## **Endpoints**

| Method | Endpoint            | Description                  | Request Body                                                                                  | Response Body         |
|--------|---------------------|------------------------------|----------------------------------------------------------------------------------------------|-----------------------|
| GET    | `/api/tasks`        | Get a list of all tasks.     | None                                                                                         | Array of task objects |
| GET    | `/api/tasks/{id}`   | Get a specific task by its ID. | None                                                                                         | Task object           |
| POST   | `/api/tasks`        | Create a new task.           | `{"title": "Task Title", "description": "Task Description", "status": "Pending"}`            | Created task object   |
| PUT    | `/api/tasks/{id}`   | Update a task by its ID.     | `{"title": "Updated Task Title", "description": "Updated Task Description", "status": "Completed"}` | Updated task object   |
| DELETE | `/api/tasks/{id}`   | Delete a task by its ID.     | None                                                                                         | `{}` (Empty object)   |

---

## **Task Object Structure**

```json
{
  "id": "1",
  "title": "Task Title",
  "description": "Task Description",
  "status": "Pending",
  "created_at": "2025-01-21T10:20:00.000Z",
  "updated_at": "2025-01-21T10:20:00.000Z"
}
```

---

## **Endpoints in Detail**

### **1. Get All Tasks**

**Endpoint:** `GET /api/tasks`  
**Query Parameters:**  
- `status` (optional): Filter tasks by their status. Valid values: `"Pending"`, `"Completed"`.  

**Example Request:**
```bash
curl http://0.0.0.0:3000/api/tasks
```

**Example Response:**
```json
[
  {
    "id": "1",
    "title": "Task 1",
    "description": "This is a new task",
    "status": "Pending",
    "created_at": "2025-01-21T08:51:08.555Z",
    "updated_at": "2025-01-21T08:51:08.555Z"
  }
]
```

---

### **2. Get a Specific Task**

**Endpoint:** `GET /api/tasks/{id}`  
**Path Parameter:**  
- `id` (required): The ID of the task to retrieve.  

**Example Request:**
```bash
curl http://0.0.0.0:3000/api/tasks/1
```

**Example Response (Success):**
```json
{
  "id": "1",
  "title": "Task 1",
  "description": "This is a new task",
  "status": "Pending",
  "created_at": "2025-01-21T08:51:08.555Z",
  "updated_at": "2025-01-21T08:51:08.555Z"
}
```

**Example Response (Not Found):**
```json
{
  "message": "Task not found"
}
```

---

### **3. Create a New Task**

**Endpoint:** `POST /api/tasks`  
**Request Body:**
```json
{
  "title": "New Task",
  "description": "This is a new task",
  "status": "Pending"
}
```

**Example Request:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "title": "New Task",
  "description": "This is a new task",
  "status": "Pending"
}' http://0.0.0.0:3000/api/tasks
```

**Example Response:**
```json
{
  "id": "2",
  "title": "New Task",
  "description": "This is a new task",
  "status": "Pending",
  "created_at": "2025-01-21T10:20:00.000Z",
  "updated_at": "2025-01-21T10:20:00.000Z"
}
```

---

### **4. Update a Task**

**Endpoint:** `PUT /api/tasks/{id}`  
**Path Parameter:**  
- `id` (required): The ID of the task to update.  

**Request Body:**
```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "Completed"
}
```

**Example Request:**
```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "Completed"
}' http://0.0.0.0:3000/api/tasks/1
```

**Example Response (Success):**
```json
{
  "id": "1",
  "title": "Updated Task",
  "description": "Updated description",
  "status": "Completed",
  "created_at": "2025-01-21T08:51:08.555Z",
  "updated_at": "2025-01-21T10:20:00.000Z"
}
```

**Example Response (Not Found):**
```json
{
  "message": "Task not found"
}
```

---

### **5. Delete a Task**

**Endpoint:** `DELETE /api/tasks/{id}`  
**Path Parameter:**  
- `id` (required): The ID of the task to delete.  

**Example Request:**
```bash
curl -X DELETE http://0.0.0.0:3000/api/tasks/1
```

**Example Response (Success):**
(No Content, Status Code `204`)

**Example Response (Not Found):**
```json
{
  "message": "Task not found"
}
```

---

---
