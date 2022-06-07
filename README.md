# Airbean-API---Bunny-Scientists


TODO: 

- [x] i `accountdb.js`, lägg till en funktion så att expired blir `true` när ETA tiden har passerat.
- [ ] i `accountdb.js`, lägg till en funktion så att den endast returnerar summan av varje order +  createdAt + orderId. Exempel:      
```
{
  sum: sumOfOrder,
  createdAt: orderTime,
  orderId: orderNmbr,
}
```
- [ ] skapa en ny endpoint i `accountdb.js` och `account.js` för att få på aktiva ordrar, dvs när `expired` är false.    
```
{
  orderId: orderNmbr,
  timeETA: etaTime.toLocaleTimeString(),
}
```
Glöm inte att lägga in i dokumentationen också!

---
---

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
username | William2     
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