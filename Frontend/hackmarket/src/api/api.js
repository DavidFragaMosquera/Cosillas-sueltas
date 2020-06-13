// IMPORTANDO LO QUE NECESITO PARA LA CONEXION/API: express, cors, bodyparser,mysql
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require ('mysql')
// JSONWEBTOKEN DEPENDENCIAS
const jwt = require('jsonwebtoken')
const config = require('./config')
// DECLARO LA APP
const app = express()
// APP USES
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('llave', config.llave)

// DATOS DE CONEXION
const connection = mysql.createConnection({
  host:'localhost',
  user: 'dvvd',
  password: '123456',
  database: 'hackamarket'
})

// CONEXION 
connection.connect(error => {
  if(error) throw error // si hay error
  console.log('RULANDO') //  si todo está correito
})
//PUERTO DE LA API
const PORT = 3050

app.listen(PORT, () => console.log('DALLE!!!'))

// LLAMADA DE PRUEBA
app.get('/', (req,res) => {
  res.send('parece que funsionas :P')
})

app.get("/clientes", (req, res) => {
  const sql = "SELECT * FROM clientes";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay clientes");
    }
  });
});

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM productos";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay productos");
    }
  });
});

// FUNCION PARA CREAR CLIENTES //
app.get("/", (req, res) => {
  res.send("Hola");
});

app.post("/add", (req, res) => {
  const sql = "INSERT INTO clientes SET ?";
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa,
  };

  connection.query(sql, newClient, (error) => {
    if (error) throw error;
    res.send("Cliente creado");
  });
});

app.post("/new-user", (req, res) => {
  const sql = "INSERT INTO usuarios SET ?";
  const addUser = {
    email: req.body.email,
    password: req.body.password,
  };
});

  app.put("/clientes/edit/:id", (req, res) => {
      const {id} = req.body;
      const {nombre} = req.body;
      const {apellido} = req.body;
      const {ciudad} = req.body;
      const {empresa} = req.body;

      const sql = `UPDATE clientes SET nombre='${nombre}',
      apellido='${apellido}',
      ciudad='${ciudad}',
      empresa='${empresa}'
      WHERE id='${id}'`
connection.query(sql, (error) => {
  if (error) throw error;
  res.send("Usuario creado");
});
});

app.delete("/clientes/del/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM clientes WHERE id=${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Cliente borrado.");
  });
});
// METODO LOGIN PARA CREAR EL TOKEN //
app.post("/auth", (req, res) => {
// DATOS QUE LLEGAN, USER Y PASSWORD //
  const email = req.body.email;
  const password = req.body.password;
// SECUENCIA SQL //
  const sql = `SELECT * FROM usuarios WHERE email='${email}' AND password='${password}'`;
// CONEXION A LA BBDD //
  connection.query(sql, (error, results) => {
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };
      if (results[0].admin === 1) {
        admin = true;
      } else {
        admin = false;
      }
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "1 day",
      });
      res.json({
        mensaje: "Autenticación correcta",
        token: token,
        isAdmin: admin
      });
    } else {
      console.log("Datos incorrectos");
    }
  });
});