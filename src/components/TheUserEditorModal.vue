<template>
  <div class="modal__form">
    <validation-observer ref="user-editor-validation">
      <form @submit.prevent="saveEditedUserInfo" class="form">
        <p class="form__title">{{ position.title }}</p>
        <validation-provider
            class="validation__provider"
            v-for="{inputId,inputType,labelText,placeholder,vModel,extraClass} in validations"
            :key="placeholder+vModel"
            rules="required"
            v-slot="{errors}"
        >
          <label :for="inputId" class="form__label">
            <span>{{ labelText }}</span>
            <span class="form__label-star">
              <img src="../assets/icons/star-input-label.svg" alt="star input svg">
            </span>
          </label>
          <input
              class="form__input"
              :type="inputType"
              :id="inputId"
              :placeholder="placeholder"
              v-model="form[vModel]"
              :class="extraClass"
          >
          <span v-if="errors[0]" class="error__input-class">{{ placeholder }} to'ldirilishi lozim</span>
        </validation-provider>
        <validation-provider
            class="validation__provider"
            rules="image|required"
            v-slot="{errors,validate}"
        >
          <label for="employeeImage" class="form__label">
            <span>Xodimning rasmini yuklash</span>
            <span class="form__label-star">
              <img src="../assets/icons/star-input-label.svg" alt="star input svg">
            </span>
          </label>
          <label
              class="form__input display__block form__upload-content"
              for="employeeImage"
          >
              <span class="upload__title">
                <span class="upload__title-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.71 7.7099L11 5.4099V14.9999C11 15.2651 11.1054 15.5195 11.2929 15.707C11.4804 15.8945 11.7348 15.9999 12 15.9999C12.2652 15.9999 12.5196 15.8945 12.7071 15.707C12.8946 15.5195 13 15.2651 13 14.9999V5.4099L15.29 7.7099C15.383 7.80363 15.4936 7.87802 15.6154 7.92879C15.7373 7.97956 15.868 8.00569 16 8.00569C16.132 8.00569 16.2627 7.97956 16.3846 7.92879C16.5064 7.87802 16.617 7.80363 16.71 7.7099C16.8037 7.61693 16.8781 7.50633 16.9289 7.38447C16.9797 7.26261 17.0058 7.13191 17.0058 6.9999C17.0058 6.86788 16.9797 6.73718 16.9289 6.61532C16.8781 6.49346 16.8037 6.38286 16.71 6.2899L12.71 2.2899C12.6149 2.19886 12.5028 2.12749 12.38 2.0799C12.1365 1.97988 11.8635 1.97988 11.62 2.0799C11.4972 2.12749 11.3851 2.19886 11.29 2.2899L7.29 6.2899C7.19676 6.38313 7.1228 6.49383 7.07234 6.61565C7.02188 6.73747 6.99591 6.86804 6.99591 6.9999C6.99591 7.13176 7.02188 7.26232 7.07234 7.38415C7.1228 7.50597 7.19676 7.61666 7.29 7.7099C7.38324 7.80313 7.49393 7.8771 7.61575 7.92756C7.73757 7.97802 7.86814 8.00399 8 8.00399C8.13186 8.00399 8.26243 7.97802 8.38425 7.92756C8.50607 7.8771 8.61676 7.80313 8.71 7.7099ZM21 13.9999C20.7348 13.9999 20.4804 14.1053 20.2929 14.2928C20.1054 14.4803 20 14.7347 20 14.9999V18.9999C20 19.2651 19.8946 19.5195 19.7071 19.707C19.5196 19.8945 19.2652 19.9999 19 19.9999H5C4.73478 19.9999 4.48043 19.8945 4.29289 19.707C4.10536 19.5195 4 19.2651 4 18.9999V14.9999C4 14.7347 3.89464 14.4803 3.70711 14.2928C3.51957 14.1053 3.26522 13.9999 3 13.9999C2.73478 13.9999 2.48043 14.1053 2.29289 14.2928C2.10536 14.4803 2 14.7347 2 14.9999V18.9999C2 19.7955 2.31607 20.5586 2.87868 21.1212C3.44129 21.6838 4.20435 21.9999 5 21.9999H19C19.7956 21.9999 20.5587 21.6838 21.1213 21.1212C21.6839 20.5586 22 19.7955 22 18.9999V14.9999C22 14.7347 21.8946 14.4803 21.7071 14.2928C21.5196 14.1053 21.2652 13.9999 21 13.9999Z"
                      fill="#969696"/>
                </svg>
                </span>
                <span class="upload__title-text">
                  <span v-if="getEmployeeImageName">
                    {{ getEmployeeImageName }}
                  </span>
                  <span v-else>
                    Xodimning rasmini yuklash
                  </span>
                </span>
              </span>
            <input
                type="file"
                name="employeeImage"
                id="employeeImage"
                class="upload__image"
                @change="validate($event);uploadEmployeeImage($event)"
                accept="image/*"
                ref="employeeImage"
                autocomplete="off"
            >
          </label>
          <span v-if="errors[0]" class="error__input-class">Xodimning rasmi yuklanishi lozim</span>
        </validation-provider>
        <validation-provider
            class="validation__provider"
            rules="required"
            v-slot="{errors}"
        >
          <label for="regionId" class="form__label">
            <span>Viloyatingizni tanlang</span>
            <span class="form__label-star">
              <img src="../assets/icons/star-input-label.svg" alt="star input svg">
            </span>
          </label>
          <div>
            <select
                name="selectRegion"
                id="regionId"
                class="form__input form__select"
                v-model="form.regionId"
            >
              <option value=""> Viloyat</option>
              <option
                  v-for="{id,name} in regions"
                  :value="id"
                  :key="id"
              >
                {{ name }}
              </option>
            </select>
          </div>
          <span v-if="errors[0]" class="error__input-class">Viloyat bo'limi to'ldirilishi lozim</span>
        </validation-provider>
        <validation-provider
            class="validation__provider"
            rules="required"
            v-slot="{errors}"
        >
          <label for="districtId" class="form__label">
            <span>Tumaningizni tanlang</span>
            <span class="form__label-star">
              <img src="../assets/icons/star-input-label.svg" alt="star input svg">
            </span>
          </label>
          <div>
            <select
                name="selectDistrict"
                id="districtId"
                class="form__input form__select"
                v-model="form.districtId"
            >
              <option value="">Tuman</option>
              <option
                  v-for="{id,districtname} in districts"
                  :value="id"
                  :key="id"
              >
                {{ districtname }}
              </option>
            </select>
          </div>
          <span v-if="errors[0]" class="error__input-class">Tumaningiz to'ldirilishi lozim</span>
        </validation-provider>
        <validation-provider
            class="validation__provider"
            rules="required"
            v-slot="{errors}"
        >
          <label for="companyId" class="form__label">
            <span>Kompaniyangizni tanlang</span>
            <span class="form__label-star">
              <img src="../assets/icons/star-input-label.svg" alt="star input svg">
            </span>
          </label>
          <div>
            <select
                name="selectCompany"
                id="companyId"
                class="form__input form__select"
                v-model="form.companyId"
            >
              <option value="">Kompaniyangizni tanlang</option>
              <option
                  v-for="{regionId,companyname} in companies"
                  :value="regionId"
                  :key="regionId"
              >
                {{ companyname }}
              </option>
            </select>
          </div>
          <span v-if="errors[0]" class="error__input-class">Kompaniyangizni tanlashingiz lozim</span>
        </validation-provider>
        <div class="form__buttons">
          <button
              @click="$emit('canceling-edit-user')"
              class="button__edited-employee cancel__edited-employee"
          >
            Orqaga
          </button>
          <button
              type="submit"
              class="button__edited-employee save__edited-employee"
          >
            Saqlash
          </button>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import api from "../services/Api";

export default {
  name: "TheUserEditorModal",
  props: {
    user: {
      type: Object,
      required: true
    },
    position: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      regions: [],
      districts: [],
      companies: [],
      form: {
        name: '',
        employeeImage: null,
        parentName: '',
        parentFullName: '',
        parentBirthAndPlace: '',
        parentWorkAndPosition: '',
        parentPlaceOfLiving: '',
        motherName: '',
        motherFullName: '',
        motherBirthAndPlace: '',
        motherWorkAndPosition: '',
        motherPlaceOfLiving: '',
        positionAndDate: '',
        birthday: '',
        nationality: '',
        education: '',
        specialization: '',
        academicDegree: '',
        academicTitle: '',
        foreignLanguages: '',
        stateAward: '',
        electedMember: '',
        partisanship: '',
        placeOfCompletion: '',
        militaryRank: '',
        laborActivity: '',
        regionId: '',
        districtId: '',
        companyId: ''
      },
      validations: [
        {
          labelText: 'Familiyasi va ismi',
          inputId: 'full-name',
          inputType: 'text',
          placeholder: 'Familiya va ism',
          vModel: 'name',
          extraClass: ''
        },
        {
          labelText: "Tug'ilgan sanasi",
          inputId: 'birthdate',
          inputType: 'date',
          placeholder: "Tug'ilgan sanasi",
          vModel: 'birthdate',
          extraClass: 'input__date'
        },
        {
          labelText: "Millati",
          inputId: 'nationality',
          inputType: 'text',
          placeholder: "Millati",
          vModel: 'nationality',
          extraClass: ''
        },
        {
          labelText: "Otasining ismi",
          inputId: 'parentName',
          inputType: 'text',
          placeholder: "Otasining ismi",
          vModel: 'parentName',
          extraClass: ''
        },
        {
          labelText: "Otasining Familiya , ismi va sharifi",
          inputId: 'parentFullName',
          inputType: 'text',
          placeholder: "Familiya ism sharif",
          vModel: 'parentFullName',
          extraClass: ''
        },
        {
          labelText: "Otasining tug'ilgan yili va manzili",
          inputId: 'parentBirthAndPlace',
          inputType: 'text',
          placeholder: "Tug'ilgan yil va manzil",
          vModel: 'parentBirthAndPlace',
          extraClass: ''
        },
        {
          labelText: "Otasining ish joyi va lavozimi",
          inputId: 'parentWorkAndPosition',
          inputType: 'text',
          placeholder: "Ish joyi va lavozimi",
          vModel: 'parentWorkAndPosition',
          extraClass: ''
        },
        {
          labelText: "Otasining yashash manzili",
          inputId: 'parentPlaceOfLiving',
          inputType: 'text',
          placeholder: "Yashash manzili",
          vModel: 'parentPlaceOfLiving',
          extraClass: ''
        },
        {
          labelText: "Onasining ismi",
          inputId: 'motherName',
          inputType: 'text',
          placeholder: "Onasining ismi",
          vModel: 'motherName',
          extraClass: ''
        },
        {
          labelText: "Onasining familiya , ismi va sharifi",
          inputId: 'motherFullName',
          inputType: 'text',
          placeholder: "Familiya ism sharif",
          vModel: 'motherFullName',
          extraClass: ''
        },
        {
          labelText: "Onasining tug'ilgan yili va manzili",
          inputId: 'motherBirthAndPlace',
          inputType: 'text',
          placeholder: "Tug'ilgan yil va manzil",
          vModel: 'motherBirthAndPlace',
          extraClass: ''
        },
        {
          labelText: "Onasining ish joyi va lavozimi",
          inputId: 'motherWorkAndPosition',
          inputType: 'text',
          placeholder: "Ish joyi va lavozimi",
          vModel: 'motherWorkAndPosition',
          extraClass: ''
        },
        {
          labelText: "Onasining yashash manzili",
          inputId: 'motherPlaceOfLiving',
          inputType: 'text',
          placeholder: "Yashash manzili",
          vModel: 'motherPlaceOfLiving',
          extraClass: ''
        },
        {
          labelText: "Lavozimi va qachondan ishlashi",
          inputId: 'positionAndDate',
          inputType: 'text',
          placeholder: "Lavozimi va qachondan ishlashi",
          vModel: 'positionAndDate',
          extraClass: ''
        },
        {
          labelText: "Tugatgan ta'lim muassasasi",
          inputId: 'education',
          inputType: 'text',
          placeholder: "Tugatgan ta'lim muassasasi",
          vModel: 'education',
          extraClass: ''
        },
        {
          labelText: "Mutaxasisligi",
          inputId: 'specialization',
          inputType: 'text',
          placeholder: "Mutaxasisligi",
          vModel: 'specialization',
          extraClass: ''
        },
        {
          labelText: "Ilmiy darajasi",
          inputId: 'academicDegree',
          inputType: 'text',
          placeholder: "Ilmiy darajasi",
          vModel: 'academicDegree',
          extraClass: ''
        },
        {
          labelText: "Ilmiy unvoni",
          inputId: 'academicTitle',
          inputType: 'text',
          placeholder: "Ilmiy unvoni",
          vModel: 'academicTitle',
          extraClass: ''
        },
        {
          labelText: "Chet tillari",
          inputId: 'foreignLanguages',
          inputType: 'text',
          placeholder: "Chet tillari",
          vModel: 'foreignLanguages',
          extraClass: ''
        },
        {
          labelText: "Davlat mukofoti bilan taqdirlanganligi",
          inputId: 'stateAward',
          inputType: 'text',
          placeholder: "Davlat mukofoti bilan taqdirlanganligi",
          vModel: 'stateAward',
          extraClass: ''
        },
        {
          labelText: "Saylov organi azosi",
          inputId: 'electedMember',
          inputType: 'text',
          placeholder: "Saylov organi azosi",
          vModel: 'electedMember',
          extraClass: ''
        },
        {
          labelText: "Partiyaviyligi",
          inputId: 'partisanship',
          inputType: 'text',
          placeholder: "Partiyaviyligi",
          vModel: 'partisanship',
          extraClass: ''
        },
        {
          labelText: "Tamomlagan joyi",
          inputId: 'placeOfCompletion',
          inputType: 'text',
          placeholder: "Tamomlagan joyi",
          vModel: 'placeOfCompletion',
          extraClass: ''
        },
        {
          labelText: "Harbiy unvoni",
          inputId: 'militaryRank',
          inputType: 'text',
          placeholder: "Harbiy unvoni",
          vModel: 'militaryRank',
          extraClass: ''
        },
        {
          labelText: "Mehnat faoliyati",
          inputId: 'laborActivity',
          inputType: 'text',
          placeholder: "Mehnat faoliyati",
          vModel: 'laborActivity',
          extraClass: ''
        }
      ],
    }
  },
  computed: {
    getEmployeeImageName() {
      return this.form.employeeImage?.name
    }
  },
  watch: {
    'form.regionId'(last) {
      if (last !== '') {
        this.getDistrictsFromApi(last)
      }
    }
  },
  async created() {
    await Promise.all([await this.getRegionsFromApi(), await this.getCompanies()])
  },
  methods: {
    async saveEditedUserInfo() {
      const validateEditUserForm = await this.$refs["user-editor-validation"].validate()
          .then(async (response) => response)

      const saveEditedUserInfo = async () => {
        const {
          name,
          employeeImage,
          parentName,
          parentFullName,
          parentBirthAndPlace,
          parentWorkAndPosition,
          parentPlaceOfLiving,
          motherName,
          motherFullName,
          motherBirthAndPlace,
          motherWorkAndPosition,
          motherPlaceOfLiving,
          positionAndDate,
          birthday,
          nationality,
          education,
          specialization,
          academicDegree,
          academicTitle,
          foreignLanguages,
          stateAward,
          electedMember,
          partisanship,
          placeOfCompletion,
          militaryRank,
          laborActivity,
          regionId,
          districtId,
          companyId
        } = this.form

        const aboutRelative = [
          {
            name: parentName,
            relativefullname: parentFullName,
            birthdayandbirthofplace: parentBirthAndPlace,
            ishjoyivalavozimi: parentWorkAndPosition,
            turarjoyi: parentPlaceOfLiving,
          },
          {
            name: motherName,
            relativefullname: motherFullName,
            birthdayandbirthofplace: motherBirthAndPlace,
            ishjoyivalavozimi: motherWorkAndPosition,
            turarjoyi: motherPlaceOfLiving,
          },
        ]

        const params = new FormData()
        params.append('fullname', name)
        params.append('regionId', regionId)
        params.append('districtId', districtId)
        params.append('companyId', companyId)
        params.append('aboutRelative', aboutRelative)
        params.append('lavozimivaQachondan', positionAndDate)
        params.append('birthday', birthday)
        params.append('nationality', nationality)
        params.append('malumoti', education)
        params.append('malumotiboyichamutaxasisligi', specialization)
        params.append('ilmiydarajasi', academicDegree)
        params.append('ilmiyunvoni', academicTitle)
        params.append('chettillari', foreignLanguages)
        params.append('davlatmukofotibilantaqdirlanganligiqanaqa', stateAward)
        params.append('saylovorganiazosi', electedMember)
        params.append('partiyaviyligi', partisanship)
        params.append('tamomlaganjoyi', placeOfCompletion)
        params.append('harbiyunvoni', militaryRank)
        params.append('mehnatfaoliyati', laborActivity)
        params.append('image', employeeImage)

        // const form = {
        //   regionId,
        //   districtId,
        //   companyId,
        //   birthday,
        //   nationality,
        //   aboutRelative,
        //   fullname:name,
        //   lavozimivaQachondan:positionAndDate,
        //   malumoti:education,
        //   malumotiboyichamutaxasisligi:specialization,
        //   ilmiydarajasi:academicDegree,
        //   ilmiyunvoni:academicTitle,
        //   chettillari:foreignLanguages,
        //   davlatmukofotibilantaqdirlanganligiqanaqa:stateAward,
        //   saylovorganiazosi:electedMember,
        //   partiyaviyligi:partisanship,
        //   tamomlaganjoyi:placeOfCompletion,
        //   harbiyunvoni:militaryRank,
        //   mehnatfaoliyati:laborActivity,
        //   image:employeeImage
        // }
        //
        // const params = JSON.stringify(form)

        // console.log(this.params)
        // for (let pair of params.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]);
        // }

        if (this.position.addUser) {
          await api.addNewEmployee(params)
              .then(response => {
                console.log(response)
              })
        } else {
          await api.editEmployeeInfo({id: this.user.id, params})
              .then(response => {
                console.log(response)
              })
        }
      }

      validateEditUserForm && await saveEditedUserInfo()
    },
    async getRegionsFromApi() {
      await api.getRegions().then(response => {
        this.regions = response.data
      })
    },
    async getDistrictsFromApi(regionId) {
      await api.getDistricts(regionId).then(response => {
        this.districts = response.data
      })
    },
    async getCompanies() {
      await api.getCompanies().then(response => {
        this.companies = response.data
      })
    },
    uploadEmployeeImage(event) {
      if (event.target.files[0]) {
        this.form.employeeImage = event.target.files[0]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 20px;
  height: 40px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

.modal__form {
  overflow-y: scroll;
  height: 100%;
}

.form {
  padding: 24px;

  .validation__provider {
    display: block;
    margin-bottom: 24px;
  }

  &__title {
    font-size: 36px;
    line-height: 48px;
    font-weight: 600;
    color: #1C1C1C;
    margin-bottom: 16px;
  }

  &__label {
    display: flex;
    color: #585757;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 8px;

    &-star {
      display: grid;
      align-content: end;
      width: 20px;
      height: 20px;
      margin-left: 2px;
    }
  }

  .input__date {
    color: #969696;
    border: 1.5px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    max-width: 1080px;
    padding: 0 12px;
    font-size: 20px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      height: 28px;
      font-size: 20px;
      line-height: 28px;
      color: #969696;
    }
  }

  &__input {
    border: 1.5px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    max-width: 1080px;
    padding: 0 12px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      height: 28px;
      font-size: 20px;
      line-height: 28px;
      color: #969696;
    }
  }

  &__select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;

    option {
      height: 28px;
      font-size: 16px;
      line-height: 28px;
    }
  }

  &__upload-content {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .upload__image {
    width: 100%;
    height: 100%;
    display: none;
  }

  .upload__title {
    display: flex;
    justify-items: center;
    align-content: center;

    &-icon {
      margin-top: 2px;
      margin-right: 8px;
    }

    &-text {
      height: 28px;
      font-size: 20px;
      line-height: 28px;
      color: #969696;
    }
  }

  .error__input-class {
    width: 100%;
    display: block;
    color: #ef4444;
    font-weight: bolder;
    text-align: start;
    margin-top: 8px;
    margin-left: 2px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 8px;

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

    .cancel__edited-employee {
      background-color: rgba(235, 21, 55, 0.8);
    }
  }
}
</style>