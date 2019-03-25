let defaultCity = '许昌'
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {

}
export default {
	city: defaultCity
}