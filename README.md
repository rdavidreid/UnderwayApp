# UnderWay

[Heroku link][heroku]

[heroku]: https://underway.herokuapp.com/

## Description

UnderWay is a web application inspired by Kickstarter built using Ruby on Rails
and React.js.

![Underway](/images/login.png?raw=true "Underway")

Custom Auth Utilizes BCrypt to hash and salt passwords

![Underway](/images/BCrypt_login.png?raw=true "Underway")

Cloudinary integration allows users to easily upload and crop pictures.

![Underway](/images/cloudinary.png?raw=true "Underway")

Quill integration allows users to stylize project descriptions

![Underway](/images/quill.png?raw=true "Underway")

Users can easily explore projects based on category and see 'trending' projects (projects that have received the most funding and have not reached their campaign end date)

![Underway](/images/discover.png?raw=true "Underway")

Full CRUD API for projects - users can create projects, and edit or destroy projects they have created.

![Underway](/images/edit.png?raw=true "Underway")

![Underway](/images/delete.png?raw=true "Underway")

Users can back a project simply by clicking on a reward

![Underway](/images/purchase_reward.png?raw=true "Underway")

Users can see projects they have backed and created on their user page

![Underway](/images/user_profile1.png?raw=true "Underway")

![Underway](/images/user_profile2.png?raw=true "Underway")

Project's cannot be backed after they reach their campaign end date, and display weather or not they were successfully funded

![Underway](/images/expired_project.png?raw=true "Underway")

## Minimum Viable Product

- [X] Create an account
- [X] Log in / Log out
- [X] Explore projects users have created
- [X] Back projects created by other users
- [X] Create projects that other users can back.
- [X] Projects are funded if enough money is raised in a set amount of time.
- [X] Projects are not funded if funding goal is not met by deadline.

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

- [X] create `User` model
- [X] Implement authentication
- [X] create user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Project Model, API, and basic APIUtil (1.5 days / 2)

**Objective:** A project can be created, viewed, edited and destroyed through
the API.

- [X] create `Project` model
- [X] seed the database with test data
- [X] create standard CRUD API for projects (`ProjectsController`)
- [X] create jBuilder views for projects
- [X] setup Webpack & Flux
- [X] setup `APIUtil` to interact with the API
- [X] test API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days / 4)

**Objective:** Projects can be created, viewed, edited and destroyed with UI.

- [X] setup the flux loop
- [X] setup React Router
- implement each Project component, building out flux loop as needed.
  - [X] `ProjectsIndex` (contains index items)
  - [X] `ProjectIndexItem` (Displays small amount of details on each project)
  - [X] `ProjectDetail` (Displays all details on specific project)
  - [X] `ProjectForm` (To create a new project)


### Phase 4: Start Styling (1 day / 5)

**Objective:** Existing pages (including singup/signin) will look good.

- [X] create top menu bar
- [X] create a basic style guide
- [X] implement bootstrap
- [X] position elements on page
- [X] add basic colors & styles

### Phase 5: Back Projects (2 days / 7)

**Objective:** Add functionality so projects can be 'backed'

- [X] create `backers` join table
- [X] create `Rewards` Table and Model
- build out API, Flux loop, and components for:
  - [X] backers create, index, show [API ONLY]
  - [X] rewards create, destroy, index
  - [X] fetching rewards for specific project
  - [X] Backing a project on project show page
  - [X] `Reward` component.
- [X] Add Reward creation to Project Creation
- [X] Style new elements

### Phase 6: User Profile Page (1 days / 8)

**Objective:** Add functionality to allow user to see backed projects, created
projects, and change display name / password

- [X] Create `UserDetails` component, API, and Flux Loop
- [X] Users page displays projects user has backed
- [X] Users page displays projects user has created


### Phase 7: Touch up CSS (1 day / 9)

**Objective:** Make things look pretty!

- [X] Get feedback on user experience thus far.
- [X] Refactor all things that need to be refactored.
- [X] Go through all pages and touch up CSS where necessary
- [X] Make sure CSS and overall style is the same across all pages
- [X] Finish off funding of projects


### Phase 8: Categories (1 day / 10)

**Objective:** All projects have a category. On project index page, user can
chose which categories to display, or to display all.

- [X] create `Category` Model and react component
- [X] build association between Categories and Projects
- [X] build API and flux loop for Category
- [X] add functionality that allows user to sort by category on Discovery page
- [X] Style new elements

### Phase 9: Polish  & Refactor (1 days / 11)

**Objective:** Make site as clean and presentable as possible

 - [X] get feedback on UI
 - [X] Refactor all things that need to be refactored
 - [X] add CSS flourishes, transitions, etc.

### Bonus Features (TBD)
- [X] Implement 'quill' for text inputs
- [X] Implement 'cloudinary' for picture uploading
- [ ] Author can post updates on authored project
- [ ] Implement search bar
- [ ] Multiple sessions
- [ ] Users can post comments on projects they have backed
- [ ] Users can 'follow' a project without backing it
- [ ] Users can send messages to other users
- [ ] Project authors can message all backers
- [ ] Implement 'Account Settings.' Edit display name, update password, etc.
- [ ] Implement infinite scroll on Project Index. Improve scalability.

[phase-one]: ./docs/phases/phase01.md
[phase-two]: ./docs/phases/phase02.md
[phase-three]: ./docs/phases/phase03.md
[phase-four]: ./docs/phases/phase04.md
[phase-five]: ./docs/phases/phase05.md
[phase-six]: ./docs/phases/phase06.md
[phase-seven]: ./docs/phases/phase07.md
[phase-eight]: ./docs/phases/phase08.md
[phase-nine]: ./docs/phases/phase09.md
