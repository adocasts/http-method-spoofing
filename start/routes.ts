/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.post('/ping', pingHandler).as('ping.post')
Route.put('/ping', pingHandler).as('ping.put')
Route.patch('/ping', pingHandler).as('ping.patch')
Route.delete('/ping', pingHandler).as('ping.delete')

async function pingHandler ({ request, response, session }: HttpContextContract) {
  session.flash({ status: `Recieved an ${request.method()} request`, ...request.body() })

  return response.redirect().back()
}
