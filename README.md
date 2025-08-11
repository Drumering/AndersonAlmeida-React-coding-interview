This is a Monorepo project in development. The application will be a contact management service for a theoretical customer. 

## Getting Started

```sh
# 1. Install dependencies
$ npm i

# 2. Build required packages
$ npm build

# 3. Run all projects 'dev' task to start development servers
$ turbo run dev
```

### Folder Structure
    .
    ├── ...
    ├── apps
    │   ├── api       # Rest API using express and routing-controllers
    │   ├── web       # Frontend application, bootstrapped with create-react-app and MaterialUI
    └── packages
        ├── eslint-config-custom  # Shared eslint configs
        ├── shared                # Shared code package(s) between apps (models, interfaces etc)

### Basic requirements

- Your preferred IDE / Code Editor
- NodeJS > 12
- Your preferred browser (tested on Chrome and Firefox)

### Linting and formatting

The linting and formatting is done using eslint and prettier, configured using common industry standards.
