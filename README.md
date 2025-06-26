# MongoDB-App
# API DOCUMENTATION
This API allows users to get customers/ locations/ reviews from our database.
Built by Express.js and MongoDB as database. Using basic CRUD to get/ update/ create/ delte the data. 


[localhost:3000]
# Route/ endpoint Url:

/customers -> get all customers infos:

/locations -> get all locations infos:

/reviews   -> get all reviews infos:



# To find customers / locations by id:

/customers/:id

/locations/:id


# POST / CREATE new customer/location/review:

/customers          {email, address, phone}

/locations          {storeName, city, address ,phone}

/reviews            {title, comment, rating}

# PATCH / DELETE (updates or delete) by id

/customers/:id

/locations/:id
  




