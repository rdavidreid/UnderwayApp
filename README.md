# UnderWay

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

UnderWay is a web application inspired by Kickstarter built using Ruby on Rails
and React.js. UnderWay allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Explore projects users have created
- [ ] Back projects created by other users
- [ ] Create projects that other users can back.
- [ ] Projects are funded if enough money is raised in a set amount of time.
- [ ] Projects are not funded if funding goal is not met by deadline.


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days / 0.5)

**Objective:** Build functioning rails project with authentication

- [ ] create `User` model
- [ ] Implement authentication
- [ ] create user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Project Model, API, and basic APIUtil (1.5 days / 2)

**Objective:** A project can be created, viewed, edited and destroyed through
the API.

- [ ] create `Project` model
- [ ] seed the database with test data
- [ ] create standard CRUD API for projects (`ProjectsController`)
- [ ] create jBuilder views for projects
- [ ] setup Webpack & Flux
- [ ] setup `APIUtil` to interact with the API
- [ ] test API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days / 4)

**Objective:** Projects can be created, viewed, edited and destroyed with UI.

- [ ] setup the flux loop
- [ ] setup React Router
- implement each Project component, building out flux loop as needed.
  - [ ] `ProjectsIndex` (contains index items)
  - [ ] `ProjectIndexItem` (Displays small amount of details on each project)
  - [ ] `ProjectDetail` (Displays all details on specific project)
  - [ ] `ProjectForm` (To create a new project)


### Phase 4: Start Styling (0.5 days / 4.5)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] implement bootstrap
- [ ] position elements on page
- [ ] add basic colors & styles

### Phase 5: Back Projects (2 days / 6.5)

**Objective:** Add functionality so projects can be 'backed'

- [ ] create `backers` join table
- [ ] create `Rewards` Table and Model
- build out API, Flux loop, and components for:
  - [ ] backers create, destroy, index, show API
  - [ ] rewards create, index
  - [ ] fetching rewards for specific project
  - [ ] Backing a project on project show page
  - [ ] `Reward` component.
- [ ] Add Reward creation to Project Creation
- [ ] Style new elements

### Phase 6: User Profile Page (1 days / 7.5)

**Objective:** Add functionality to allow user to see backed projects, created
projects, and change display name / password

- [ ] Create `UserDetails` component, API, and Flux Loop
- [ ] Users page displays projects user has backed
- [ ] Users page displays projects user has created


### Phase 7: Touch up CSS ( 0.5 days / 8)

**Objective:** Make things look pretty!

- [ ] Get feedback on user experience thus far.
- [ ] Refactor all things that need to be refactored.
- [ ] Go through all pages and touch up CSS where necessary
- [ ] Make sure CSS and overall style is the same across all pages


### Phase 8: Categories (1 day / 9)

**Objective:** All projects have a category. On project index page, user can
chose which categories to display, or to display all.

- [ ] create `Category` Model and react component
- [ ] build association between Categories and Projects
- [ ] build API and flux loop for Category
- [ ] add functionality that allows user to sort by category on Discovery page
- [ ] Style new elements

### Phase 9: Polish  & Refactor (1 days / 10)

**Objective:** Make site as clean and presentable as possible

 - [ ] get feedback on UI
 - [ ] Refactor all things that need to be refactored
 - [ ] add CSS flourishes, transitions, etc.

### Bonus Features (TBD)
- [ ] Implement 'quill' for text inputs
- [ ] Author can post updates on authored project
- [ ] Multiple sessions
- [ ] Users can post comments on projects they have backed
- [ ] Users can 'follow' a project without backing it
- [ ] Implement 'Account Settings.' Edit display name, update password, etc.
- [ ] Implement infinite scroll on Project Index. Fix scalability.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
