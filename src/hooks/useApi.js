
/**
 * 给人一种脱裤子放屁的感觉，还是不要用了
 */

import { getCurrentInstance } from 'vue'
export default function useApi() {
	const {appContext:{app:{config: {globalProperties:{$api}}}}}= getCurrentInstance()
	return $api
}