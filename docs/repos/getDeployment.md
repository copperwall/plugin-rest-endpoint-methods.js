---
name: Get a single deployment
example: octokit.repos.getDeployment({ owner, repo, deployment_id })
route: GET /repos/{owner}/{repo}/deployments/{deployment_id}
scope: repos
type: API method
---

# Get a single deployment

```js
octokit.repos.getDeployment({
  owner,
  repo,
  deployment_id,
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
    <tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>deployment_id</td><td>yes</td><td>

deployment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/deployments/#get-a-single-deployment).
