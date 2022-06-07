# Airbean-API---Bunny-Scientists

## Debug in insomnia:

---
**localhost:8000/api/account/signup**

Body:    
json       
```json
{
    "username":"William2",
    "email":"william@hotmaail.se",
    "password":"pw65123"
}
```

Header:   
Content-Type | application/json

---
**localhost:8000/api/order**

Body:     
json        
```json
{"cart": [
    {"id": "2",
    "title": "Caffè Doppio",
    "amount": 1},
{
  "id": 3,
  "title": "Cappuccino",
    "amount": 2}
]}
```

Header:      
username | William2 *(alt. Guest)*        
Content-Type | application/json

---
**localhost:8000/api/account/orderhistory**

Body:         
*no body*

Header:   
Content-Type | application/json

---
**localhost:8000/api/menu**

Body:       
*no body*

Header:        
*no header*


---
**localhost:8000/api/account/login**

Body:       
json                 
```json
{
  "username":"William2",
  "password":"pw65123"
}
```

Header:        
*no header*