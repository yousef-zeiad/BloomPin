<!-- language-all: javascript -->

# Services

- [api](./apis) - The place that we add handle the SDK's
- [context](./context) - In the context we have the authProvider and the user

## API

in this folder we have the following SDK's:

- [LocalStorageService](#Localstorage-Basic-Service)
- [OauthService](#oAuth)

## LocalStorage Service
##### In the LocalStorage Service we handle the access-token, refresh-tokens and we clear the tokens.

```typescript
 localStorageService.setToken();
```

To get the access token use 

`localStorageService.getAccessToken()`

To Clear the Token use 

`localStorageService.clearToken()`


See the [localstorage](./apis) to know more


## Oauth Service

##### In the O-auth Service we have the login,logout functionality.

For the Login use the login SDK
`oauthService.login(pin);`

To Logout the user use the following SDK:
`oauthService.logout();`
