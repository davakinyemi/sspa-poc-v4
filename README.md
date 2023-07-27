# Micro Frontend POC using single-spa framework 

- (https://github.com/single-spa/single-spa)

root-app: 9000

shared-app: 8080
state-app: 8081
shared-todo-angular-library

auth-app: 4200
layout-app: 4201
home-app: 4202
counter-app: 4203
task-app: 4204



credentials:
username: admin
password: 123456

note: try using angular libraries such as core and common in shared state lib (didn't work),
try subscribing to counter state behaviour subject in ngoninit for navbar component and initializing counter variable inside (worked, alternative)
calling changeDetectionRef on subscriber worked
