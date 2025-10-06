import express from "express";
import cors from "cors";
import morgan from "morgan";
import {nanoid} from "nanoid";

const app=express();
const port=process.env.PORT || 3000; // process.env.PORT if provided

app.use(cors({origin:[
    "http://localhost:5173",                  // for local dev
    "https://task-manager-1-3qob.onrender.com/"      // add this for Render deployment
  ]}));
app.use(express.json()); // Expect JSON from the frontend
app.use(morgan("dev"));

let tasks=[
    {
        id:nanoid(),
        title:"Sample Task",
        description:"Task Description",
    }
]

const findIndex=(id)=>{
    return tasks.findIndex(item=>item.id===id);
}

app.get("/api/tasks",(req,res)=>{
    res.json(tasks);
})

app.post("/api/tasks",(req,res)=>{  //Expect data to be in JSON Format
    const {title,description} =req.body || {};   //Extract data from req.body
    console.log(title)
    if(!title || typeof title !=="string"){  // checking if title exists and is a string
        return res.status(400).json({error:"Title is required and must be a string"});
    }
    const task={id:nanoid(),title:title,description:String(description)};
    tasks.unshift(task);
    res.status(201).json(task);
})

app.put("/api/tasks/:id",(req,res)=>{
    const index=findIndex(req.params.id);
    console.log(`index is ${index}`);
    if(index===-1){
        return res.status(404).json({error:"Task not found."});
    }
    const {title,description}=req.body || {}; 
    console.log(title);
    console.log(description);
    if(title !== undefined && typeof title !== "string"){
        return res.status(400).json({error:"Title must be a string."})
    }
    if(description !== undefined && typeof description !=="string"){
        return res.status(400).json({error:"Description must be a string."})
    }

    const updated={...tasks[index]};

    if (title!==undefined){
        updated.title=title;
    }

    if(description!==undefined) {
        updated.description=description;
    }
    tasks[index]=updated;
    console.log(tasks[index])
    res.json(tasks[index]);
})

app.delete("/api/tasks/:id",(req,res)=>{
    const index=findIndex(req.params.id);
    if(index===-1){
        return res.status(404).json({error:"Task not found."});
    }
    tasks.splice(index,1);
    res.json("Successfully deleted.")
})


app.listen(port,()=>{
    console.log(`Backend running on port ${port}`);
})
