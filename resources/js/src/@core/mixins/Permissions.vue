<script>
import Vue from 'vue'

export default {
  methods: {
    $can(permissionName) {
      return Permissions.indexOf(permissionName) !== -1
    },

  },
}
</script>
