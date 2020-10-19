const express=require('express')

const app=express()

// const morgan=require('morgan')
// const swaggerJSDoc=require('swagger-jsdoc')
// const swaggerUi=require('swagger-ui-express')



// app.use(bodyParser.json())
// app.use(morgan('combined'))


// app.use('/user', userRouter)





  



// app.use(express.static('images/'))

app.get('/',(req,res)=>{
    res.send('<iframe src=" https://abbybounty.github.io/HBD/" title=""></iframe>')
})

 
app.listen(4000,'0.0.0.0',()=>{
    console.log('server started')
})