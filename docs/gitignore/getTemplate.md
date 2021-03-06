---
name: Get a single template
example: octokit.gitignore.getTemplate({ name })
route: GET /gitignore/templates/{name}
scope: gitignore
type: API method
---

# Get a single template

The API also allows fetching the source of a single template.

Use the raw [media type](https://developer.github.com/v3/media/) to get the raw contents.

```js
octokit.gitignore.getTemplate({
  name,
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
    <tr><td>name</td><td>yes</td><td>

name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gitignore/#get-a-single-template).
