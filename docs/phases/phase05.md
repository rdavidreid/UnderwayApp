# Phase 5: Back Projects (2 days / 6.5)

## Rails
### Models
* backers
* rewards

### Controllers
* Api::projectUsersController (create, destroy, index, show)
* Api:: rewardsController (create, destroy, index)

### Views
* api/backers
* api/projects/:id/backers
* api/projects/:id/backers/:id

* /api/projects/:id/rewards
* /api/projects/:id/rewards/:id

## Flux
### Views (React Components)
* update existing project show view

### Stores
* rewardStore
* backerStore

### Actions
* ApiActions.recieveAllRewards  -> triggered by ApiUtil
* ApiActions.recieveAllBackers  -> triggered by ApiUtil
* ApiActions.createBacker       ->triggers ApiUtil

### ApiUtil

* ApiUtil.fetchAllRewards
* ApiUtil.fetchAllBackers
* ApiUtil.createBacker

## Gems/Libraries
