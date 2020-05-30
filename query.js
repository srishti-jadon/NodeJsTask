var http = require('http');
var url = require('url');

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
    },
    {
        taskNo: 5,
        taskTitle: "task 5",
        taskDeadline: "tomorrow"
    }
];

var server = http.createServer((req, res) => {

    console.log(req.url);
    var queryString = url.parse(req.url, true).query;
    var deadlineFilter = queryString.deadline;

    if (req.url === '/favicon.ico') {
        res.writeHead(404);
    }
    res.write("<h1>Task List</h1>");
    for (var i = 0; i < taskList.length; i++) {

        currentTask = taskList[i];
        if (currentTask.taskDeadline === deadlineFilter) {

            res.write(`
                    <h1>${currentTask.taskTitle}</h1>
                    <div>${currentTask.taskDeadline}</div>
        `);

        }

    }


    res.end();
});

server.listen(8080);