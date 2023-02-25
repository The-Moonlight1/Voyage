import { defineStore } from "pinia"
import cityApi from "@/api/cityApi"

const useCityStore = defineStore("city", {
  state: () => {
    return {
      allCities: {},
      currentCity: {
        cityId: 275,
        cityName: "晋中"
      }
    }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await cityApi.getCityAll()
      this.allCities = res.data
    }
  },
})

export default useCityStore