---
name: Get the authenticated user
example: octokit.users.getAuthenticated()
route: GET /user
scope: users
type: API method
---

# Get the authenticated user

Lists public and private profile information when authenticated through basic auth or OAuth with the `user` scope.

Lists public profile information when authenticated through OAuth without the `user` scope.

```js
octokit.users.getAuthenticated();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/#get-the-authenticated-user).
