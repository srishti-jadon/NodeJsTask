var http = require('http');

taskList = [{
        taskNo: 1,
        taskTitle: "task 1",
        taskDeadline: "today"
    },
    {
        taskNo: 2,
        taskTitle: "task 2",
        taskDeadline: "yesterday"
    },
    {
        taskNo: 3,
        taskTitle: "task 3",
        taskDeadline: "today"
    },
    {
        taskNo: 4,
        taskTitle: "task 4",
        taskDeadline: "tomorrow"
    }
];

var server = http.createServer((req, res) => {

    console.log(req.url);

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
    }

    res.write("<h1>Task List</h1>");
    for (var i = 0; i < taskList.length; i++) {

        res.write(`
                   <h2>${taskList[i].taskNo}</h2>
                   <div>${taskList[i].taskTitle}</div>
                   <h5>${taskList[i].taskDeadline}</h5>
        `)
    }
    res.end();
});

server.listen(8080);