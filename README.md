# Workflow

1. create new branch
2. make changes the branch
3. create a pull request (PR) with `development` as the base branch
4. get code reviewed and merge the PR
5. verify that the changes are functional on [myonlinepool-qa.herokuapp.com](myonlinepool-qa.herokuapp.com)
6. once the feature is checked, create a PR to merge changes from `development` to `staging`.
7. verify the function again.
8. once all checks are good, create a PR to merge changes from `staging` to `master`.

# Protocols

- store all data in database as lower case strings

# Gotchas

- fontawesome icons need "Name" added to className in html
