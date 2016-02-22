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



### ProjectFormStore

Holds un-persisted project data to send to the API.

##### Actions:
- `receiveProjectFormParams`

##### Listeners:
- `ProjectForm`



### BackerStore

Will hold current user's backed project data from join table

##### Actions:
- `recieveAllPairs`
- `recieveSelectPairs`
- `removePair`

##### Listeners:
- `ProjectDetail`



### RewardStore

Holds all persisted reward data.

##### Actions:
- `receiveAllRewards`
- `recieveSelectRewards`
- `removeRewards`

##### Listeners:
- `ProjectDetail`



### RewardFormStore

Holds un-persisted reward data to send to the API.

##### Actions:
- `receiveRewardFormParams`

##### Listeners:
- `ProjectForm`



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
- `recieveBackedProjects`
- `recieveCreatedProjects`

##### Listeners:
