# Phase 2: Project Model, API, and basic APIUtil (1.5 days / 2)

## Rails
### Models
* Projects

### Controllers
* Api::ProjectsController (create, destroy, index, show, update)

### Views
* projects/index.json.jbuilder
* projects/show.json.jbuilder

## Flux
### Views (React Components)

### Stores
* projectStore

### Actions
* projectStore.recieveAllProjects
* projectStore.recieveSelectProjects
* projectStore.recieveSingleProject
* projectStore.updateProject
* projectStore.removeProject


### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchSingleProject
* ApiUtil.createProject
* ApiUtil.updateProject
* ApiUtil.destroyProject

## Gems/Libraries
* Webpack
* Flux
