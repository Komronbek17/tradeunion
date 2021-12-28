<template>
  <div>
    <div v-if="hasInfo">
      <img :src="user.imageUrl" alt="avatar user" width="150" height="150">
      <p>
        <span>chettillari:</span>
        <span>{{ user.chettillari }}</span>
      </p>
      <p>
        <span>davlat mukofoti bilan taqdirlanganligi:</span>
        <span>{{ user.davlatmukofotibilantaqdirlanganligiqanaqa }}</span>
      </p>
      <p>
        <span>harbiy unvoni:</span>
        <span>{{ user.harbiyunvoni }}</span>
      </p>
      <p>
        <span>ilmiy darajasi:</span>
        <span>{{ user.ilmiydarajasi }}</span>
      </p>
      <p>
        <span>ilmiyunvoni</span>
        <span>{{ user.ilmiyunvoni }}</span>
      </p>
      <p>
        <span>malumoti</span>
        <span>{{ user.malumoti }}</span>
      </p>
      <p>
        <span>malumotiboyichamutaxasisligi</span>
        <span>{{ user.malumotiboyichamutaxasisligi }}</span>
      </p>
      <p>
        <span>mehnatfaoliyati</span>
        <span>{{ user.mehnatfaoliyati }}</span>
      </p>
      <p>
        <span>nationality</span>
        <span>{{ user.nationality }}</span>
      </p>
      <p>
        <span>nationality</span>
        <span>{{ user.nationality }}</span>
      </p>
      <p>
        <span>partiyaviyligi</span>
        <span>{{ user.partiyaviyligi }}</span>
      </p>
      <p>
        <span>saylovorganiazosi</span>
        <span>{{ user.saylovorganiazosi }}</span>
      </p>
      <p>
        <span>tamomlaganjoyi</span>
        <span>{{ user.tamomlaganjoyi }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from "../services/Api";

export default {
  name: "UserViewInfo",
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.getUserAllInfo()
  },
  computed: {
    hasInfo() {
      return Object.keys(this.user).length > 0
    }
  },
  methods: {
    async getUserAllInfo() {
      const {id} = this.$route.params
      if (id) {
        await api.getUserMoreInfo(id).then(response => {
          this.user = response.data
        })
      }
    }
  }
}
</script>