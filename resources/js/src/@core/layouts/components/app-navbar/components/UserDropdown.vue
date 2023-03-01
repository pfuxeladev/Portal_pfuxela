<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <!-- <span v-for="usr in userData" :key="usr.id"> -->
        <div class="d-sm-flex d-none user-nav">
          <p class="user-name font-weight-bolder mb-0">
            {{ userData[0].name || userData[0].name }}
          </p>
          <span class="user-status">{{ userData[0].role }}</span>
        </div>
        <b-avatar
          size="40"
          :src="userData[0].avatar"
          variant="light-primary"
          badge
          class="badge-minimal"
          badge-variant="success"
        >
          <feather-icon
            v-if="!userData[0].email"
            icon="UserIcon"
            size="22"
          />
        </b-avatar>
      <!-- </span> -->
    </template>

    <b-dropdown-item
      :to="{ name: 'pages-profile'}"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="UserIcon"
        class="mr-50"
      />
      <span>Profile</span>
    </b-dropdown-item>
    <b-dropdown-divider />
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
    >
      <feather-icon
        size="16"
        icon="LogOutIcon"
        class="mr-50"
      />
      <span>Logout</span>
    </b-dropdown-item></b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import { initialAbility } from '@/libs/acl/config'
import useJwt from '@/auth/jwt/useJwt'
import { avatarText } from '@core/utils/filter'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
    }
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
