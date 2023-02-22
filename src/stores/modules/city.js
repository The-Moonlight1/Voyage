import { defineStore } from "pinia"
import { getCityAll } from "@/api/cityApi"

const useCityStore = defineStore("city", {
  state: () => {
    return {
      allCities: {},
      currentCity: {
        cityId: 45,
        cityName: "广州"
      }
    }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore