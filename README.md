# Angular api call using HttpClientModule
Angular call api to get data &amp; display on page

## Run project
ng serve to run a project, default is http://localhost:4200/

## Command
* create a new app : ng new project-name
* new component : ng g c component-name
* new modules : ng g m modules-name
* new services : ng g s services-name

## Note
1. Using this **[Node Api](https://github.com/sundaramj/express-api)** to fetch data on load of angular page. Please download that api then first run it on your local system after that run your Angular project. So you will not fetch any issue.
2. Redirect home url to /employee from src/app/app-routing.module.ts file you can change based on requirements.
3. Its taking base url from src/environments/environment.ts for dev environment. On production it takes url from src/environments/environment.prod.ts. Api url is http://localhost:3000/ you can change it from src/environments/environment.ts file.
4. If url is incorrect so it will go to the notfound component to display common not found page. that is also handled in src/app/app-routing.module.ts file.

## Sample response
Expecting below response from node api:
[{"_id":"5e8c8b7691d26679f0e29fa8","emp_id":101,"name":"Abhishek","dept":"hr","__v":0},{"_id":"5e8c8e1a108cab0784450dad","emp_id":103,"name":"Rohit","dept":"IT","__v":0}]