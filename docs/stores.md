# Flux Stores

### ProjectStore

Holds all persisted Project data.

##### Actions:
- `recieveAllProjects`
  ApiUtil.fetchAllProjects
- `recieveSelectProjects`
  projects of certain category, author, or id
- `recieveSingleProject`
  ApiUtil.fetchSingleProject
- `updateProject`
  ApiUtil.updateProject
- `removeProject`
  ApiUtil.destroyProject

##### Listeners:
- `projectIndex`
- `projectDetail`



### RewardStore

Holds all persisted reward data.

##### Actions:
- `receiveAllRewards`
- `recieveSelectRewards`
- `removeRewards`

##### Listeners:
- `ProjectDetail`



### CategoryStore

Manipulates ProjectIndex

##### Actions:
- `receivecategoryParams`

##### Listeners:
- `ProjectIndex`



### UserDetailStore

shows Users details, backed projects, and created projects

##### Actions:
- `recieveUserDetails`

##### Listeners:
