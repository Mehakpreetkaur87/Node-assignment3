import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json())

app.use("/users", userRoutes);

app.use(errorMiddleware);

app.listen(3000, () =>{
  console.log(`Server is running on ${PORT}`);
});