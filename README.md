# useUserAgent

`useUserAgent` is a React hook that returns information about the user's browser.

## FAQ

### Is this compatible with SSR?

No, it's not. This hook uses `window.navigator` to get the user agent string, which is not available on the server. If you want to check the user agent on the server, you can use the [`useragent` package](https://www.npmjs.com/package/useragent).
