# aws-lab18 

## ROUTES

GET - `/person`
GET - `/person{id}`
POST - `/person`
PUT - `/person/{id}`
DELETE - `/person{id}`

{id} routes are used to either fetch or delete a specific person object.<br>

The `POST` route requires an object similar to `{"id": "1", "name": "username", "age": "40"}`.<br>
returns created user.<br>

The `PUT` route requires you to specific the Id and then the properties you wish to update.<br>
returns updated user.<br>

The `DELETE` route requires the id of the person you wish to delete.<br>
returns no data<br>

The `GET` with {id} params route requires the id of the person to fetch.<br>
returns the person associated with the id

The `GET` with no params requires nothing<br>
returns all persons in the database
