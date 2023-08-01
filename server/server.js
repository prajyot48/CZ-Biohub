import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Data Base
import pg from "pg";
const Client = pg.Client;
const DATABASE_URL =
  "postgres://dhotreprajyot22:NM1zVa4UrfmE@ep-red-base-93907475.us-east-2.aws.neon.tech/neondb?options=endpoint%3Dep-red-base-93907475";
  const client = new Client({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
// Conection
client.connect();

// Post Request
app.post("/", async (req, res) => {
  try {
    const requiredValue = req.body.val
    const data = await client.query(`SELECT * FROM Fibbo limit ${requiredValue}`);
    //  Read all the data
    let arr = data.rows.map(({ val }) => val)
    if(req.body.val != data.rowCount){
        // making a array to access all the data points
        // Generate a helper function giving the numbers that are missing
        let insertQuery = "Insert into Fibbo Values "
            for (let i=data.rows.length+1;i<=requiredValue;i++){
                let sumi=arr[arr.length-1]+arr[arr.length-2]
                insertQuery = insertQuery + `(${i},${sumi}),`

                arr.push(sumi)
            }
            // Making a fial Query
            insertQuery = insertQuery.substr(0,insertQuery.length-1);
            insertQuery= insertQuery + ";"
            //  Making query run
            client.query(insertQuery)
        }
        return res.status(200).send({result:arr});
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(5002, () =>
  console.log("Server is running on http://localhost:5002")
);
