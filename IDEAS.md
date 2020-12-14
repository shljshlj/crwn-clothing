### withSpinner component improvement

```js
const withSpinner = ({isLoading, props}) =>
  WrappedComponent =>
    isLoading
      ? <SpinnerOverlay>
          <SpinnerContainer/>
        </SpinnerOverlay>
      : <WrappedComponent {...props} />
 
export default withSpinner
```
and thus

```js
<Route exact path={`${match.path}`} render={props =>
     withSpinner({isLoading, props})(CollectionsOverview)}
/>
```