import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const specificId = req.params.id - 1;
  if (specificId >= 0 && specificId < tasks.length) {
    res.json(tasks[specificId]);
  } else {
    console.log("Invalid ID");
  }
});

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  const newTask = { id: tasks.length + 1, task, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task, completed } = req.body;

  const updatedTask = { id, task, completed };

  const taskIndex = tasks.findIndex((task) => task.id === id);

  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = tasks.findIndex((task) => task.id === id);
  if (searchIndex > -1) {
    tasks.splice(searchIndex, 1);
    res.sendStatus(200);
  } else {
    res
      .status(404)
      .json({ error: `Task with id: ${id} not found. No tasks were deleted.` });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

var tasks = [
  {
    id: 1,
    task: "Complete homework assignment",
    completed: false,
  },
  {
    id: 2,
    task: "Buy groceries",
    completed: false,
  },
  {
    id: 3,
    task: "Call mom",
    completed: false,
  },
  {
    id: 4,
    task: "Go for a run",
    completed: false,
  },
  {
    id: 5,
    task: "Prepare presentation slides",
    completed: false,
  },
  {
    id: 6,
    task: "Read a chapter of a book",
    completed: false,
  },
  {
    id: 7,
    task: "Pay bills",
    completed: false,
  },
  {
    id: 8,
    task: "Clean the house",
    completed: false,
  },
  {
    id: 9,
    task: "Attend meeting at 2 PM",
    completed: false,
  },
  {
    id: 10,
    task: "Fix leaking faucet",
    completed: false,
  },
  {
    id: 11,
    task: "Walk the dog",
    completed: false,
  },
  {
    id: 12,
    task: "Write thank-you notes",
    completed: false,
  },
  {
    id: 13,
    task: "Research vacation destinations",
    completed: false,
  },
  {
    id: 14,
    task: "Call the doctor for an appointment",
    completed: false,
  },
  {
    id: 15,
    task: "Update resume",
    completed: false,
  },
  {
    id: 16,
    task: "Organize closet",
    completed: false,
  },
  {
    id: 17,
    task: "Plan weekly meals",
    completed: false,
  },
  {
    id: 18,
    task: "Start a new hobby",
    completed: false,
  },
  {
    id: 19,
    task: "Volunteer at local shelter",
    completed: false,
  },
  {
    id: 20,
    task: "Practice meditation",
    completed: false,
  },
  {
    id: 21,
    task: "Watch a documentary",
    completed: false,
  },
  {
    id: 22,
    task: "Repair bike",
    completed: false,
  },
  {
    id: 23,
    task: "Learn to cook a new recipe",
    completed: false,
  },
  {
    id: 24,
    task: "Review monthly budget",
    completed: false,
  },
  {
    id: 25,
    task: "Take car for servicing",
    completed: false,
  },
  {
    id: 26,
    task: "Finish reading novel",
    completed: false,
  },
  {
    id: 27,
    task: "Practice yoga",
    completed: false,
  },
  {
    id: 28,
    task: "Update social media profiles",
    completed: false,
  },
  {
    id: 29,
    task: "Make dentist appointment",
    completed: false,
  },
  {
    id: 30,
    task: "Study for upcoming exam",
    completed: false,
  },
  {
    id: 31,
    task: "Take online course",
    completed: false,
  },
  {
    id: 32,
    task: "Plant flowers in the garden",
    completed: false,
  },
  {
    id: 33,
    task: "Go to the gym",
    completed: false,
  },
  {
    id: 34,
    task: "Send birthday card to friend",
    completed: false,
  },
  {
    id: 35,
    task: "Create weekly schedule",
    completed: false,
  },
  {
    id: 36,
    task: "Declutter desk",
    completed: false,
  },
  {
    id: 37,
    task: "Research investment options",
    completed: false,
  },
  {
    id: 38,
    task: "Practice a musical instrument",
    completed: false,
  },
  {
    id: 39,
    task: "Clean out refrigerator",
    completed: false,
  },
  {
    id: 40,
    task: "Watch a TED talk",
    completed: false,
  },
  {
    id: 41,
    task: "Fix broken light fixture",
    completed: false,
  },
  {
    id: 42,
    task: "Read daily news",
    completed: false,
  },
  {
    id: 43,
    task: "Write in journal",
    completed: false,
  },
  {
    id: 44,
    task: "Organize digital files",
    completed: false,
  },
  {
    id: 45,
    task: "Review insurance policies",
    completed: false,
  },
  {
    id: 46,
    task: "Plan weekend getaway",
    completed: false,
  },
  {
    id: 47,
    task: "Attend networking event",
    completed: false,
  },
  {
    id: 48,
    task: "Sort through old clothes",
    completed: false,
  },
  {
    id: 49,
    task: "Learn a new language",
    completed: false,
  },
  {
    id: 50,
    task: "Listen to podcast",
    completed: false,
  },
];
