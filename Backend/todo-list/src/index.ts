// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ApplicationConfig, TodoListApplication} from './application'

export async function main (options: ApplicationConfig = {}) {
  const app = new TodoListApplication(options)
  await app.boot()
  await app.start()

  const url = app.restServer.url
  console.log(`Server is running at ${url}`)
  return app
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST ?? 'localhost',
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  }
  main(config).catch(err => {
    console.error('Cannot start the application.', err)
    process.exit(1)
  })
}

// re-exports for our benchmark, not needed for the tutorial itself
export * from '@loopback/rest'
export * from './application'
export * from './models'
export * from './repositories'
