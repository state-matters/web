# State Matters


_[Contentful CMS][2] + [React][3] + [Next.js][5] + [Styled Components][4]_

## About

State matters is an organization concerned with improving awareness surrounding state government. We track bills, laws and issues that affect you on a local level.

## Setup

1.  Clone the repo locally `git clone https://github.com/state-matters/state-matters-website.git`
1.  Install dependencies `npm install`
1.  Get a development server(s) started `npm run start:dev`

## About the Codebase

We're using next.js!

Pages are defined as routes in the pages folder.

Routing of dynamic pages is handled through next.js router + server.js

There are 2 important places to be concerned with when developing a new feature or maintaining an older one.

1.  The `pages` folder

    Pages are pages we expect a user to browse. Inside pages we have parent components that render the layout and content of each page. **Pages** are made of **components** (found in the components folder!)
    i.e. lessons/index shows the list of lessons, show.js in lessons shows a single lesson from that list


2.  The `components` folder

    This folder is where client state lives. Following true component architecture and to try and stay DRY, most components we reuse have been abstracted into the general `components` folder.

3.  The `design` folder

    Pages, site structure, components, styles, typography live here. Currently this folder is more of a documentation of practices. You won't 'use' anything here directly, but it is very important! You can also find design mockups here: https://projects.invisionapp.com/share/XGONN12WTJR#/screens


## Contributing

_Always work on from a branch based from the develop branch, never master_

1.  Open a Github issue or pick an exisiting issue. This helps us track what is working on and gives a list of tasks for yourself and other volunteers.
1.  Naming branches
    - If the merge is about a bug fix follow `fix/<concise-name-of-fix>`
    - If the merge is a new feature or an improvement to an existing feature follow `feature/<concise-name-of-feature>`
1.  Create a PR associated with that issue based on proposed solution.
1.  PR will be merged on approval.

[2]: https://www.contentful.com/developers/docs/references/content-delivery-api/
[3]: https://reactjs.org/
[4]: https://www.styled-components.com/docs
[5]: https://nextjs.org/
