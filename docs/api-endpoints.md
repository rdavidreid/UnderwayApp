# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Projects

- `GET /api/projects`
  index of all projects
- `GET /api/categories/projects`
  index of all projects of certain category
- `POST /api/projects`
  create new project
- `GET /api/projects/:id`
  get details of specific project
- `PATCH /api/projects/:id`
  edit project
- `DELETE /api/projects/:id`
  delete project

### backers

- `GET /api/backers`
  get all of the current user's backers pair to see all projects user has backed
- `POST /api/projects/:id/backers`
  create backers pair
- `GET /api/projects/:id/backers/:id`
  get current users backers pair for a specific project

### Rewards

- `GET /api/projects/:id/rewards`
  get reward options for specific project
- `POST /api/projects/:id/rewards`
  create reward

### Categories

- `GET /api/categories`
