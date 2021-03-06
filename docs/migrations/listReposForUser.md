---
name: List repositories for a user migration
example: octokit.migrations.listReposForUser({ migration_id })
route: GET /user/{migration_id}/repositories
scope: migrations
type: API method
---

# List repositories for a user migration

Lists all the repositories for this user migration.

```js
octokit.migrations.listReposForUser({
  migration_id,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/users/#list-repositories-for-a-user-migration).
