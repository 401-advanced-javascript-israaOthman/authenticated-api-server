# authenticated-api-server

# auth-server


## Author: Israa Othman 

## Links and Resourcs 
  -  [Herokuapp](https://auth-api15.herokuapp.com/)  




  ## Setup 
   - `.env` requirment 
   - PORT=3000
   - MMONGODB_URI='mongodb+srv://labTest:1234@cluster0-zjquu.mongodb.net/test'

  #### How to initialize/run your application  
  using postman or httpi  
    -  signup : POST -  http://localhost:3000/signup/
        + body = {username : 'some name' , password : 'pass'}
    -  signin : POST -  http://localhost:3000/signup/
        + Authoraization --> enter the username and the paeeword 
    - add category : POST - http://localhost:3000/api/v1/categories
        + body = {name : '...' , display_name : '...',description: '...'}
    - add product : POST - http://localhost:3000/api/v1/products
        + body = {name : '...' , category:'...' ,display_name : '...',description: '...'}
    - read category: GET - http://localhost:3000/api/v1/categories
    - read product: GET - http://localhost:3000/api/v1/products
    - change category: PATCH or PUT - http://localhost:3000/api/v1/categories/"ID"
    - change product:  PATCH or PUT - http://localhost:3000/api/v1/products/"ID"
    - delete category: DELETE - http://localhost:3000/api/v1/categories/"ID"
    - delete product: DELETE - http://localhost:3000/api/v1/products/"ID"

    

  # UML 
   ![uml](./uml.jpeg) 
