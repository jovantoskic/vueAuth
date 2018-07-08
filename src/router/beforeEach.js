/**
 * Created by jovan on 7/6/18.
 */
/* eslint-disable */

export const beforeEachHook = (to, from, next) => {
  //Check if token exist to protect the routes
  let token = localStorage.getItem('user-token')

  if (token) {
    if (to.meta.guest) {
      next({name: 'usersList'})
      return
    }
    next()
  } else {
    if (to.meta.needsAuth) {
      next({name: 'login'})
      return
    }
    next()
  }
}
