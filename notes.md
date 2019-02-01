# server testing

## components of an api

function name(args) => return value;
routes/endpoints: url+method(data) => return response;

- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

- window.setTimeout > global.setTimeout

# b/c of this

    -   aded jest: { 'testEnvironment": "node" } to package.json
    - default value is "jsdom"
