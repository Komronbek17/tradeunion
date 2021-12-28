<template>
  <div>
    <div class="table-body" :class="tablePositionClass">
      <p>{{ user.fullname }}</p>
      <p>{{ user.birthday }}</p>
      <p>{{ user.lavozimivaQachondan }}</p>
      <p>{{ user.district.region.name }}</p>
      <p class="district-place flex__row-center">
        <span class="display__block">{{ user.district.districtname }}</span>
        <!--   Delete User     -->
        <span
            v-if="!deletingProcess"
            class="display__block trash-icon"
            @click="deleteUserFromDatabase"
        >
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM20 6H16V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H11C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5V6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8H5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8H20C20.2652 8 20.5196 7.89464 20.7071 7.70711C20.8946 7.51957 21 7.26522 21 7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6ZM10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V6H10V5ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V19ZM14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11V17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18Z"/>
          </svg>
        </span>
        <span
            v-else
            class="display__block"
        >
          <img
              src="../assets/icons/spin.svg"
              alt="spin-circle"
              class="spin-animation"
          />
        </span>
        <!--  EDIT USER      -->
        <span
            class="display__block editor-icon"
            @click="$emit('edit-user-info')"
        >
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M5 17.9999H9.24C9.37161 18.0007 9.50207 17.9755 9.62391 17.9257C9.74574 17.8759 9.85656 17.8026 9.95 17.7099L16.87 10.7799L19.71 7.99994C19.8037 7.90698 19.8781 7.79637 19.9289 7.67452C19.9797 7.55266 20.0058 7.42195 20.0058 7.28994C20.0058 7.15793 19.9797 7.02722 19.9289 6.90536C19.8781 6.7835 19.8037 6.6729 19.71 6.57994L15.47 2.28994C15.377 2.19621 15.2664 2.12182 15.1446 2.07105C15.0227 2.02028 14.892 1.99414 14.76 1.99414C14.628 1.99414 14.4973 2.02028 14.3754 2.07105C14.2536 2.12182 14.143 2.19621 14.05 2.28994L11.23 5.11994L4.29 12.0499C4.19732 12.1434 4.12399 12.2542 4.07423 12.376C4.02446 12.4979 3.99924 12.6283 4 12.7599V16.9999C4 17.2652 4.10536 17.5195 4.29289 17.707C4.48043 17.8946 4.73478 17.9999 5 17.9999ZM14.76 4.40994L17.59 7.23994L16.17 8.65994L13.34 5.82994L14.76 4.40994ZM6 13.1699L11.93 7.23994L14.76 10.0699L8.83 15.9999H6V13.1699ZM21 19.9999H3C2.73478 19.9999 2.48043 20.1053 2.29289 20.2928C2.10536 20.4804 2 20.7347 2 20.9999C2 21.2652 2.10536 21.5195 2.29289 21.707C2.48043 21.8946 2.73478 21.9999 3 21.9999H21C21.2652 21.9999 21.5196 21.8946 21.7071 21.707C21.8946 21.5195 22 21.2652 22 20.9999C22 20.7347 21.8946 20.4804 21.7071 20.2928C21.5196 20.1053 21.2652 19.9999 21 19.9999Z"
            />
          </svg>
        </span>
        <span class="display__block" v-if="loading">
          <img
              src="../assets/icons/spin.svg"
              alt="spin-circle"
              class="spin-animation"
          />
        </span>
        <span
            v-else
            class="display__block"
            @click="getMoreUserInfo"
        >
          <!--    MINUS SVG      -->
          <svg
              v-if="collapsedMoreInfo"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(235, 21, 55, 0.8)"
              class="collapse-button"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM16 11H8C7.73479 11 7.48043 11.1054 7.2929 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.2929 12.7071C7.48043 12.8946 7.73479 13 8 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"/>
          </svg>
          <!--    PLUS SVG      -->
          <svg
              v-else
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              class="collapse-button"
          >
          <path
              d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM16 11H13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V11H8C7.73479 11 7.48043 11.1054 7.2929 11.2929C7.10536 11.4804 7 11.7348 7 12C7 12.2652 7.10536 12.5196 7.2929 12.7071C7.48043 12.8946 7.73479 13 8 13H11V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929C16.5196 11.1054 16.2652 11 16 11Z"/>
        </svg>
      </span>
      </p>
    </div>
    <transition
        enter-active-class="animated animate__slideInDown"
        leave-active-class="animated animate__slideInUp"
    >
      <div
          class="additional"
          v-if="hasAdditionalInfo && collapsedMoreInfo"
          :class="tablePositionClass"
      >
        <!--      <img :src="additional.imageUrl" alt="avatar user" width="150" height="150">-->
        <p>
          <span>Chettillari : </span>
          <span>{{ additional.chettillari }}</span>
        </p>
        <p>
          <span>Davlat mukofoti bilan taqdirlanganligi : </span>
          <span>{{ additional.davlatmukofotibilantaqdirlanganligiqanaqa }}</span>
        </p>
        <p>
          <span>Harbiy unvoni : </span>
          <span>{{ additional.harbiyunvoni }}</span>
        </p>
        <p>
          <span>Ilmiy darajasi : </span>
          <span>{{ additional.ilmiydarajasi }}</span>
        </p>
        <p>
          <span>Ilmiy unvoni : </span>
          <span>{{ additional.ilmiyunvoni }}</span>
        </p>
        <p>
          <span>Malumoti : </span>
          <span>{{ additional.malumoti }}</span>
        </p>
        <p>
          <span>Malumoti boyicha mutaxasisligi : </span>
          <span>{{ additional.malumotiboyichamutaxasisligi }}</span>
        </p>
        <p>
          <span>Mehnat faoliyati : </span>
          <span>{{ additional.mehnatfaoliyati }}</span>
        </p>
        <p>
          <span>Nationality : </span>
          <span>{{ additional.nationality }}</span>
        </p>
        <p>
          <span>Partiyaviyligi : </span>
          <span>{{ additional.partiyaviyligi }}</span>
        </p>
        <p>
          <span>Saylov organi azosi : </span>
          <span>{{ additional.saylovorganiazosi }}</span>
        </p>
        <p>
          <span>Tamomlagan joyi : </span>
          <span>{{ additional.tamomlaganjoyi }}</span>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import api from "../services/Api";

export default {
  name: "BaseUserMoreInfo",
  emits:['edit-user-info'],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      additional: {},
      collapsedMoreInfo: false,
      loading: false,
      deletingProcess: false
    }
  },
  computed: {
    hasInfo() {
      return Object.keys(this.user).length > 0
    },
    hasAdditionalInfo() {
      return Object.keys(this.additional).length > 0
    },
    tablePositionClass() {
      return this.collapsedMoreInfo ? 'active-info' : 'passive-info'
    }
  },
  methods: {
    getMoreUserInfo() {
      const getAdditional = async () => {
        this.loading = true
        await api.getUserMoreInfo(this.user.id).then(response => {
          this.additional = response.data
        }).finally(() => {
          this.loading = false
        })
      }
      this.collapsedMoreInfo = !this.collapsedMoreInfo
      if (!this.hasAdditionalInfo) {
        this.collapsedMoreInfo && getAdditional()
      }
    },
    async deleteUserFromDatabase() {
      this.deletingProcess = true
      await api.deleteUserFromDatabase(this.user.id)
          .then((response) => {
            console.log(response.status)
          }).finally(() => {
            this.deletingProcess = false
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.active-info {
  border-bottom: none;
}

.tag-line {
  color: var(--primary-color);
  letter-spacing: 0;
}

.passive-info {
  background-color: #E8E8E8;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
}

.editor-icon,
.trash-icon {
  cursor: pointer;

  svg:hover {
    fill: #ef4444;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}

.table-body {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  align-items: center;
  padding: 14px 8px;

  .district-place {
    display: flex;
    justify-content: space-between;

    .collapse-button {
      cursor: pointer;

      &:hover {
        fill: #ef4444;
      }
    }
  }
}

.additional {
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

  & > p {
    padding-top: 8px;
    padding-bottom: 16px;
    padding-left: 8px;
  }
}

.spin-animation {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>