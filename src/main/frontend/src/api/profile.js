import client from './client'
import Vue from 'vue'

async function get () {
  try {
    const response = await client.get('/api/fenix/v1/person')

    // TODO: Set i18n locale based on the user's locale from fenix.
    Vue.i18n.set('pt')

    return {
      profile: response.data
    }
  } catch (err) {
    if (err.response.status === 401) {
      window.location.href = `/login?callback=${window.location}`
    } else {
      throw err
    }
  }
}

export default {
  get
}
