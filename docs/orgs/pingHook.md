---
name: Ping a hook
example: octokit.orgs.pingHook({ org, hook_id })
route: POST /orgs/{org}/hooks/{hook_id}/pings
scope: orgs
type: API method
---

# Ping a hook

This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.

```js
octokit.orgs.pingHook({
  org,
  hook_id,
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
    <tr><td>org</td><td>yes</td><td>

org parameter

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

hook_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/hooks/#ping-a-hook).
