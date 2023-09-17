
db.createCollection("nonfiction")
db.createCollection("nonfiction", {
    validator:
    {
        $jsonSchema:
        {
            required: ['name', 'price'],
            properties: {
                name:
                {
                    bsonType: 'string',
                    description: 'must be a string and required'
                },
                price:
                {
                    bsonType: 'number',
                    description: 'must be a number and required'

                }

            }

        }
    },
    validationAction: 'error'

})



db.runCommand({
    colMod: 'nonfiction',
})





db.createCollection("books", {
    validator:
    {
        $jsonSchema:
        {
            required: ['name', 'price', 'authors'],
            properties: {
                name:
                {
                    bsonType: 'string',
                    description: 'must be a string and required'
                },
                price:
                {
                    bsonType: 'number',
                    description: 'must be a number and required'

                },
                authors:
                {
                    bsonType: 'array',
                    description: 'must be a array and required',
                    items: 
                    {
                        bsonType: 'object',
                        required: ['name', 'email'],
                        properties:
                        
                        {
                            name:
                            {
                                bsonType: 'string'

                            },
                            email:
                            {
                                bsonType: 'string'


                            }
                        }




                    }


                }
            }

        }
    },
    validationAction: 'error'

})

