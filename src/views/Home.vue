<template>
  <div class="home">
    <div class="table-head">
      <p>Xodim</p>
      <p>Tug'ilgan yili</p>
      <p>Lavozimi va qachondan</p>
      <p>Viloyat</p>
      <p>Tuman</p>
    </div>
    <div class="table-body">
      <BaseUserMoreInfo
          @edit-user-info="editUserInformation(user)"
          class="user-info"
          v-for="user in users"
          :key="user.id"
          :user="user"
      />
    </div>
    <div class="home__paginate">
      <paginate
          :click-handler="paginated"
          :page-count="pagination.totalPages+1"
          :prev-text="paginationPrevContent"
          :next-text="paginationNextContent"
          :container-class="'pagination'"
          :page-class="'pagination__item'"
          :prev-class="'pagination__prev-button'"
          :next-class="'pagination__next-button'"
      >
      </paginate>
    </div>
    <modal :height="600" name="userEditorModal">
      <TheUserEditorModal
          @canceling-edit-user="$modal.hide('userEditorModal')"
          :user="editUser"
          :position="position"
      />
    </modal>
  </div>
</template>

<script>
import api from "../services/Api";
import BaseUserMoreInfo from "../components/BaseUserMoreInfo";
/*eslint-disable*/
import TheUserEditorModal from "../components/TheUserEditorModal";

export default {
  name: 'Home',
  components: {
    BaseUserMoreInfo,
    TheUserEditorModal,
  },
  data() {
    return {
      users: [],
      editUser: {},
      position: {},
      pagination: {
        page: 0,
        totalPages: 0
      }
    }
  },
  computed: {
    paginationPrevContent() {
      return `<p>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.7912 7.00461H3.62124L8.50124 2.12461C8.89124 1.73461 8.89124 1.09461 8.50124 0.704609C8.11124 0.314609 7.48124 0.314609 7.09124 0.704609L0.50124 7.29461C0.11124 7.68461 0.11124 8.31461 0.50124 8.70461L7.09124 15.2946C7.48124 15.6846 8.11124 15.6846 8.50124 15.2946C8.89124 14.9046 8.89124 14.2746 8.50124 13.8846L3.62124 9.00461H14.7912C15.3412 9.00461 15.7912 8.55461 15.7912 8.00461C15.7912 7.45461 15.3412 7.00461 14.7912 7.00461Z" fill="#969696"/>
            </svg>
           <span>Avvalgisi</span>
      </p>`
    },
    paginationNextContent() {
      return `<p>
           <span>Keyingisi</span>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.20874 8.99973H12.3787L7.49874 13.8797C7.10874 14.2697 7.10874 14.9097 7.49874 15.2997C7.88874 15.6897 8.51874 15.6897 8.90874 15.2997L15.4987 8.70973C15.8887 8.31973 15.8887 7.68973 15.4987 7.29973L8.91874 0.699727C8.52874 0.309727 7.89874 0.309727 7.50874 0.699727C7.11874 1.08973 7.11874 1.71973 7.50874 2.10973L12.3787 6.99973H1.20874C0.65874 6.99973 0.20874 7.44973 0.20874 7.99973C0.20874 8.54973 0.65874 8.99973 1.20874 8.99973Z" fill="#969696"/>
            </svg>
      </p>`
    }
  },
  async created() {
    await this.getUsersInfo()
  },
  methods: {
    async getUsersInfo(page = 0) {
      await api.getUsersInfo(page).then(response => {
        this.pagination.totalPages = response.data.totalPages
        this.users = response.data.content
      })
    },
    editUserInformation(user) {
      this.editUser = user
      this.position = {
        addUser: false,
        title: "Xodimni tahrirlash"
      }
      this.$modal.show('userEditorModal')
    },
    async paginated(page) {
      await this.getUsersInfo(page-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 32px;
  max-width: 80vw;
  letter-spacing: 0.5px;

  .table-head {
    background: var(--primary-color);
    color: white;
    font-weight: 600;
    max-width: 100%;
    min-width: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    padding: 14px 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .table-body {
    border-left: 0.5px solid rgba(0, 0, 0, 0.2);
    border-right: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  .user-info:nth-last-child(1) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &__paginate{
    display: flex;
    justify-content: end;
    margin-top: 16px;
  }
}

.add__employee {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: end;

  .button__edited-employee {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    width: 258px;
    height: 52px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 1px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
  }

  .save__edited-employee {
    background-color: var(--primary-color);
  }
}
</style>