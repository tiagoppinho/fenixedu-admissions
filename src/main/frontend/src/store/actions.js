import * as types from './mutation-types'
import ProfileAPI from '@/api/profile'

export const setTopMessage = ({ commit }, { active, msg, dismiss, type }) => {
  commit(types.SET_TOP_MESSAGE, { active, msg, dismiss, type })
}

export const fetchProfile = async ({ commit }) => {
  return ProfileAPI.get()
    .then(response => commit(types.RECEIVE_PROFILE, { profile: response.profile }))
    .catch(err => console.error(err))
}
