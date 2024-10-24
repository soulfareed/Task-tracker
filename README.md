Running the Project

    Install dependencies (if not already done):

    bash

npm install

Compile TypeScript:

bash

npx tsc

Run the application:

bash

node dist/cli.js <command> <arguments>

Example of Commands
Add a new task:

node dist/cli.js add "Buy groceries"

Update a task:

node dist/cli.js update 1 "Buy groceries and cook dinner"

Delete a task:

node dist/cli.js delete 1

Mark a task as in progress:

node dist/cli.js mark-in-progress 1

Mark a task as done:

node dist/cli.js mark-done 1

List all tasks:

node dist/cli.js list

List tasks by status (e.g., done, todo, in-progress):

node dist/cli.js list done
